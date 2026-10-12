import { useEffect, useRef } from 'react';

/*
 * A slowly turning 3D "neural globe": nodes on a jittered sphere, linked to their nearest
 * neighbours, with light pulses routing from node to node along the links. Rendered on a canvas,
 * depth-shaded so the far side recedes, and tilted by the cursor.
 */

const NODES = 130;
const LINK_DIST = 0.4;
const PULSES = 16;

type Vec = { x: number; y: number; z: number };

function buildGraph() {
  let seed = 17;
  const rand = () => {
    seed = (seed * 16807) % 2147483647;
    return seed / 2147483647;
  };
  const nodes: Vec[] = [];
  const golden = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < NODES; i++) {
    const y = 1 - (i / (NODES - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const t = golden * i;
    const shell = 0.82 + rand() * 0.3;
    nodes.push({ x: Math.cos(t) * r * shell, y: y * shell, z: Math.sin(t) * r * shell });
  }
  const edges: [number, number][] = [];
  const neighbours: number[][] = nodes.map(() => []);
  for (let i = 0; i < NODES; i++) {
    for (let j = i + 1; j < NODES; j++) {
      const d = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y, nodes[i].z - nodes[j].z);
      if (d < LINK_DIST) {
        edges.push([i, j]);
        neighbours[i].push(j);
        neighbours[j].push(i);
      }
    }
  }
  return { nodes, edges, neighbours, rand };
}

export default function NeuralField({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const { nodes, edges, neighbours, rand } = buildGraph();
    const projected = nodes.map(() => ({ x: 0, y: 0, depth: 0, scale: 1 }));
    const pulses = Array.from({ length: PULSES }, () => {
      const from = Math.floor(rand() * NODES);
      const list = neighbours[from];
      return {
        from,
        to: list.length ? list[Math.floor(rand() * list.length)] : from,
        t: rand(),
        speed: 0.5 + rand() * 0.7,
      };
    });

    const pointer = { x: 0, y: 0 };
    const tilt = { x: 0, y: 0 };
    let yaw = 0;
    let dpr = 1;
    let W = 0;
    let H = 0;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = canvas.clientWidth;
      H = canvas.clientHeight;
      canvas.width = Math.round(W * dpr);
      canvas.height = Math.round(H * dpr);
    };
    resize();

    const onMove = (e: PointerEvent) => {
      pointer.x = e.clientX / window.innerWidth - 0.5;
      pointer.y = e.clientY / window.innerHeight - 0.5;
    };

    // Depth-bucketed strokes keep draw calls low while still shading near vs far links.
    const BUCKETS = 5;
    const buckets: number[][] = Array.from({ length: BUCKETS }, () => []);

    let raf = 0;
    let last = performance.now();
    const tick = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      raf = requestAnimationFrame(tick);
      if (document.hidden || canvas.getBoundingClientRect().bottom < 0) return;

      if (!reduce) yaw += dt * 0.06;
      const ease = 1 - Math.exp(-dt * 2.5);
      tilt.x += (pointer.x - tilt.x) * ease;
      tilt.y += (pointer.y - tilt.y) * ease;

      const ry = yaw + tilt.x * 0.5;
      const rx = 0.32 + tilt.y * 0.3;
      const cy = Math.cos(ry);
      const sy = Math.sin(ry);
      const cx = Math.cos(rx);
      const sx = Math.sin(rx);
      const radius = Math.min(W * 0.34, H * 0.46);
      const focal = radius * 3;
      const ox = W * 0.5;
      const oy = H * 0.56;

      for (let i = 0; i < NODES; i++) {
        const n = nodes[i];
        const x1 = n.x * cy + n.z * sy;
        const z1 = -n.x * sy + n.z * cy;
        const y2 = n.y * cx - z1 * sx;
        const z2 = n.y * sx + z1 * cx;
        const scale = focal / (focal - z2 * radius);
        const p = projected[i];
        p.x = ox + x1 * radius * scale;
        p.y = oy + y2 * radius * scale;
        p.depth = (z2 + 1.15) / 2.3;
        p.scale = scale;
      }

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, W, H);
      ctx.globalCompositeOperation = 'lighter';

      for (const b of buckets) b.length = 0;
      for (let e = 0; e < edges.length; e++) {
        const [a, b] = edges[e];
        const d = (projected[a].depth + projected[b].depth) / 2;
        buckets[Math.min(BUCKETS - 1, Math.floor(d * BUCKETS))].push(e);
      }
      ctx.lineWidth = 1;
      for (let k = 0; k < BUCKETS; k++) {
        const list = buckets[k];
        if (!list.length) continue;
        const alpha = 0.02 + (k / (BUCKETS - 1)) ** 1.8 * 0.13;
        ctx.strokeStyle = `rgba(139, 92, 246, ${alpha})`;
        ctx.beginPath();
        for (const e of list) {
          const [a, b] = edges[e];
          ctx.moveTo(projected[a].x, projected[a].y);
          ctx.lineTo(projected[b].x, projected[b].y);
        }
        ctx.stroke();
      }

      for (let i = 0; i < NODES; i++) {
        const p = projected[i];
        const alpha = 0.08 + p.depth ** 1.6 * 0.5;
        ctx.fillStyle = `rgba(196, 181, 253, ${alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 0.5 + p.depth * 1.3, 0, Math.PI * 2);
        ctx.fill();
      }

      // Signals hop along links; on arrival each picks a random onward neighbour.
      for (const pulse of pulses) {
        if (!reduce) pulse.t += dt * pulse.speed;
        if (pulse.t >= 1) {
          pulse.t -= 1;
          const list = neighbours[pulse.to].filter(n => n !== pulse.from);
          pulse.from = pulse.to;
          pulse.to = list.length ? list[Math.floor(rand() * list.length)] : pulse.from;
        }
        const a = projected[pulse.from];
        const b = projected[pulse.to];
        const t = pulse.t;
        const x = a.x + (b.x - a.x) * t;
        const y = a.y + (b.y - a.y) * t;
        const depth = a.depth + (b.depth - a.depth) * t;
        const tail = Math.max(0, t - 0.25);
        const alpha = 0.1 + depth ** 1.5 * 0.7;

        const grad = ctx.createLinearGradient(a.x + (b.x - a.x) * tail, a.y + (b.y - a.y) * tail, x, y);
        grad.addColorStop(0, 'rgba(167, 139, 250, 0)');
        grad.addColorStop(1, `rgba(221, 214, 254, ${alpha})`);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.2 + depth;
        ctx.beginPath();
        ctx.moveTo(a.x + (b.x - a.x) * tail, a.y + (b.y - a.y) * tail);
        ctx.lineTo(x, y);
        ctx.stroke();

        const glow = ctx.createRadialGradient(x, y, 0, x, y, 6 + depth * 6);
        glow.addColorStop(0, `rgba(237, 233, 254, ${alpha})`);
        glow.addColorStop(1, 'rgba(139, 92, 246, 0)');
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(x, y, 6 + depth * 6, 0, Math.PI * 2);
        ctx.fill();
      }
    };
    raf = requestAnimationFrame(tick);

    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('resize', resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className={`neural-field ${className}`} aria-hidden />;
}
