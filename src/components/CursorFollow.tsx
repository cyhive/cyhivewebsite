import { useEffect, useRef } from 'react';

const INTERACTIVE = 'a, button, input, textarea, select, [role="button"]';
const RING_SIZE = 36;
const HOVER_PAD = 10;

export default function CursorFollow() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches;
    if (!fine) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    document.documentElement.classList.add('has-cursor-follow');

    const mouse = { x: -100, y: -100 };
    const ring = { x: -100, y: -100, vx: 0, vy: 0, w: RING_SIZE, h: RING_SIZE, r: RING_SIZE / 2 };
    const glow = { x: -100, y: -100 };
    let dotScale = 1;
    let presence = 0;
    let energy = 0;
    let press = 0;
    let visible = false;
    let hoverEl: HTMLElement | null = null;
    let last = performance.now();

    const show = (on: boolean) => {
      visible = on;
      for (const el of [dotRef.current, ringRef.current, glowRef.current]) el?.classList.toggle('is-on', on);
    };

    let raf = 0;
    const tick = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      const follow = (rate: number) => 1 - Math.exp(-dt * rate);

      // Hovering an interactive element: the ring wraps the element and leans toward the cursor.
      let tx = mouse.x;
      let ty = mouse.y;
      let tw = RING_SIZE;
      let th = RING_SIZE;
      let tr = RING_SIZE / 2;
      if (hoverEl && hoverEl.isConnected) {
        const box = hoverEl.getBoundingClientRect();
        const cx = box.left + box.width / 2;
        const cy = box.top + box.height / 2;
        tx = cx + (mouse.x - cx) * 0.18;
        ty = cy + (mouse.y - cy) * 0.18;
        tw = box.width + HOVER_PAD * 2;
        th = box.height + HOVER_PAD * 2;
        const radius = parseFloat(getComputedStyle(hoverEl).borderTopLeftRadius) || 0;
        tr = Math.min(radius + HOVER_PAD, th / 2);
      }

      // Spring toward the target: smooth but slightly weighted, never rubbery.
      if (reduce) {
        ring.x = tx;
        ring.y = ty;
        ring.vx = ring.vy = 0;
      } else {
        const k = 260;
        const c = 2 * Math.sqrt(k) * 0.92;
        ring.vx += ((tx - ring.x) * k - ring.vx * c) * dt;
        ring.vy += ((ty - ring.y) * k - ring.vy * c) * dt;
        ring.x += ring.vx * dt;
        ring.y += ring.vy * dt;
      }
      ring.w += (tw - ring.w) * follow(16);
      ring.h += (th - ring.h) * follow(16);
      ring.r += (tr - ring.r) * follow(16);

      const gdx = (mouse.x - glow.x) * follow(4);
      const gdy = (mouse.y - glow.y) * follow(4);
      glow.x += gdx;
      glow.y += gdy;

      // The glow brightens and swells while the cursor is moving, then eases back to a resting level.
      const glowSpeed = dt > 0 ? Math.hypot(gdx, gdy) / dt : 0;
      const targetEnergy = Math.min(glowSpeed / 900, 1);
      energy += (targetEnergy - energy) * follow(targetEnergy > energy ? 8 : 2.2);
      presence += ((visible ? 1 : 0) - presence) * follow(6);

      dotScale += ((hoverEl ? 0 : 1) - dotScale) * follow(18);
      press += (0 - press) * follow(10);

      // Stretch along the direction of travel when free; stay composed while wrapping an element.
      const speed = Math.hypot(ring.vx, ring.vy);
      const stretch = hoverEl || reduce ? 0 : Math.min(speed / 2600, 0.35);
      const angle = Math.atan2(ring.vy, ring.vx);
      const squeeze = 1 - press * 0.18;

      const ringEl = ringRef.current;
      if (ringEl) {
        ringEl.style.width = `${ring.w}px`;
        ringEl.style.height = `${ring.h}px`;
        ringEl.style.borderRadius = `${ring.r}px`;
        ringEl.style.transform =
          `translate3d(${ring.x - ring.w / 2}px, ${ring.y - ring.h / 2}px, 0) ` +
          `rotate(${angle}rad) scale(${(1 + stretch) * squeeze}, ${(1 - stretch * 0.6) * squeeze}) rotate(${-angle}rad)`;
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0) scale(${dotScale})`;
      }
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${glow.x}px, ${glow.y}px, 0) scale(${0.9 + energy * 0.25})`;
        glowRef.current.style.opacity = String(presence * (0.55 + energy * 0.45));
      }

      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const onMove = (e: PointerEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      if (!visible) {
        ring.x = glow.x = mouse.x;
        ring.y = glow.y = mouse.y;
        show(true);
      }
    };

    const onOver = (e: PointerEvent) => {
      const t = e.target as HTMLElement | null;
      hoverEl = t?.closest<HTMLElement>(INTERACTIVE) ?? null;
      ringRef.current?.classList.toggle('is-hover', !!hoverEl);
    };

    const onDown = () => {
      press = 1;
    };
    const onLeave = () => show(false);
    const onEnter = () => show(true);

    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('pointerover', onOver, { passive: true });
    window.addEventListener('pointerdown', onDown, { passive: true });
    document.documentElement.addEventListener('pointerleave', onLeave);
    document.documentElement.addEventListener('pointerenter', onEnter);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerover', onOver);
      window.removeEventListener('pointerdown', onDown);
      document.documentElement.removeEventListener('pointerleave', onLeave);
      document.documentElement.removeEventListener('pointerenter', onEnter);
      document.documentElement.classList.remove('has-cursor-follow');
    };
  }, []);

  return (
    <>
      <div ref={glowRef} className="cursor-glow" aria-hidden />
      <div ref={ringRef} className="cursor-ring" aria-hidden />
      <div ref={dotRef} className="cursor-dot" aria-hidden />
    </>
  );
}
