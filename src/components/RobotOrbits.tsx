import { useEffect, useRef } from 'react';
import TechBadge, { TechStrokeDefs, type TechItem } from './TechBadge';

/*
 * Tilted 3D rings orbiting the robot. Each ring is a circle in its own plane, rotated into view and
 * perspective-projected every frame. Anything on the far half of a ring renders behind the robot
 * (z-index below it) and dims; the near half passes in front. The cursor gently tilts the system.
 */

type Ring = {
  radius: number; // fraction of the robot box width
  tilt: number; // how far the ring is opened up from edge-on, radians
  roll: number; // in-plane rotation of the ellipse on screen, radians
  speed: number; // radians per second, sign = direction
  items: TechItem[];
};

const RINGS: Ring[] = [
  {
    radius: 0.34,
    tilt: 0.17,
    roll: -0.22,
    speed: 0.2,
    items: [
      { kind: 'icon', icon: 'neural' },
      { kind: 'code', parts: ['import', 'ai'] },
      { kind: 'icon', icon: 'chip' },
    ],
  },
  {
    radius: 0.45,
    tilt: 0.14,
    roll: 0.16,
    speed: -0.13,
    items: [
      { kind: 'icon', icon: 'code' },
      { kind: 'icon', icon: 'spark' },
      { kind: 'code', parts: ['const', 'model = train()'] },
    ],
  },
  {
    radius: 0.56,
    tilt: 0.11,
    roll: -0.05,
    speed: 0.085,
    items: [
      { kind: 'icon', icon: 'terminal' },
      { kind: 'icon', icon: 'hex' },
      { kind: 'glyph', text: '</>' },
    ],
  },
];

// Orbit centre within the robot box: chest height, so rings frame the head without slicing the laptop.
const CENTER = { x: 0.5, y: 0.45 };
const SAMPLES = 120;

type Projected = { x: number; y: number; depth: number; scale: number };

export default function RobotOrbits() {
  const rootRef = useRef<HTMLDivElement>(null);
  const backRef = useRef<SVGSVGElement>(null);
  const frontRef = useRef<SVGSVGElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const pointer = { x: 0, y: 0 };
    const tiltIn = { x: 0, y: 0 };
    let time = 0;
    let last = performance.now();

    const backPaths = RINGS.map(() => document.createElementNS('http://www.w3.org/2000/svg', 'path'));
    const frontPaths = RINGS.map(() => document.createElementNS('http://www.w3.org/2000/svg', 'path'));
    backPaths.forEach(p => {
      p.setAttribute('class', 'orbit-line orbit-line-back');
      backRef.current?.appendChild(p);
    });
    frontPaths.forEach(p => {
      p.setAttribute('class', 'orbit-line orbit-line-front');
      frontRef.current?.appendChild(p);
    });

    const onMove = (e: PointerEvent) => {
      pointer.x = e.clientX / window.innerWidth - 0.5;
      pointer.y = e.clientY / window.innerHeight - 0.5;
    };
    window.addEventListener('pointermove', onMove, { passive: true });

    // Ring-plane angle -> screen position, depth in [-1, 1] (1 = nearest) and perspective scale.
    const project = (ring: Ring, theta: number, w: number, h: number): Projected => {
      const R = ring.radius * w;
      const tilt = ring.tilt + tiltIn.y * 0.14;
      const yaw = tiltIn.x * 0.35;
      const roll = ring.roll + tiltIn.x * 0.08;

      // Circle in the horizontal plane, opened toward the viewer so the near side sits lower.
      let x = R * Math.cos(theta);
      let y = R * Math.sin(theta) * Math.sin(tilt);
      let z = R * Math.sin(theta) * Math.cos(tilt);
      // Yaw around the vertical axis.
      const x1 = x * Math.cos(yaw) + z * Math.sin(yaw);
      z = -x * Math.sin(yaw) + z * Math.cos(yaw);
      x = x1;
      // Roll on screen.
      const x2 = x * Math.cos(roll) - y * Math.sin(roll);
      y = x * Math.sin(roll) + y * Math.cos(roll);
      x = x2;

      const focal = w * 2.2;
      const scale = focal / (focal - z);
      return {
        x: CENTER.x * w + x * scale,
        y: CENTER.y * h + y * scale,
        depth: z / R,
        scale,
      };
    };

    let raf = 0;
    const tick = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      raf = requestAnimationFrame(tick);

      const root = rootRef.current;
      if (!root || document.hidden) return;
      const w = root.offsetWidth;
      const h = root.offsetHeight;
      if (!w || !h || root.getBoundingClientRect().bottom < 0) return;

      if (!reduce) time += dt;
      const ease = 1 - Math.exp(-dt * 3);
      tiltIn.x += (pointer.x - tiltIn.x) * ease;
      tiltIn.y += (pointer.y - tiltIn.y) * ease;

      let itemIndex = 0;
      RINGS.forEach((ring, r) => {
        // Orbit line, split into far and near halves so it threads behind and in front of the robot.
        let back = '';
        let front = '';
        let prevFront: boolean | null = null;
        for (let s = 0; s <= SAMPLES; s++) {
          const p = project(ring, (s / SAMPLES) * Math.PI * 2, w, h);
          const isFront = p.depth >= 0;
          const pt = `${p.x.toFixed(1)} ${p.y.toFixed(1)}`;
          if (isFront) front += `${prevFront === true ? 'L' : 'M'}${pt}`;
          else back += `${prevFront === false ? 'L' : 'M'}${pt}`;
          prevFront = isFront;
        }
        backPaths[r].setAttribute('d', back);
        frontPaths[r].setAttribute('d', front);

        // Items spaced evenly around the ring.
        ring.items.forEach((_, k) => {
          const el = itemRefs.current[itemIndex++];
          if (!el) return;
          const theta = time * ring.speed + (k / ring.items.length) * Math.PI * 2 + r * 0.9;
          const p = project(ring, theta, w, h);
          const near = (p.depth + 1) / 2;
          const size = p.scale * (0.72 + near * 0.28);
          el.style.transform = `translate3d(${p.x}px, ${p.y}px, 0) translate(-50%, -50%) scale(${size.toFixed(3)})`;
          el.style.opacity = (0.28 + near * 0.72).toFixed(3);
          el.style.filter = near < 0.45 ? `blur(${((0.45 - near) * 4).toFixed(2)}px)` : '';
          el.style.zIndex = p.depth >= 0 ? '3' : '1';
        });
      });
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', onMove);
      backPaths.forEach(p => p.remove());
      frontPaths.forEach(p => p.remove());
    };
  }, []);

  let index = 0;
  return (
    <div ref={rootRef} className="orbit-root" aria-hidden>
      <TechStrokeDefs />
      <svg ref={backRef} className="orbit-lines z-[1]" />
      <svg ref={frontRef} className="orbit-lines z-[3]" />
      {RINGS.flatMap(ring =>
        ring.items.map(item => {
          const i = index++;
          return (
            <div
              key={i}
              ref={el => {
                itemRefs.current[i] = el;
              }}
              className="orbit-item"
            >
              <TechBadge item={item} />
            </div>
          );
        }),
      )}
    </div>
  );
}
