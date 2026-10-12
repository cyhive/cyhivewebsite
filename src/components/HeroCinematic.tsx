import { type CSSProperties, useEffect, useRef, useState } from 'react';
// Frame-based look-around, switched off in favour of the drawn eyes below.
// import { FACE_ANCHOR, POSE_REACH, lookFrames, lookPoses, restLookIndex } from '../assets/hero-frames';
import robotEyeless from '../assets/robot-eyeless.webp';
import visorMask from '../assets/robot-visor-mask.png';
import { navigate } from '../hooks/useHashRoute';
import NeuralField from './NeuralField';
import RobotOrbits from './RobotOrbits';
import TechBadge, { TechStrokeDefs, type TechItem } from './TechBadge';
import { OutlineButton, PrimaryButton } from './ui';

const TRACK_VH = 240;

/*
 * Drawn face for the eyeless robot, in the robot image's own pixels (1672x880). Positions and sizes
 * were measured from the reference frame with eyes, mapped visor-to-visor onto this image.
 */
const ROBOT_W = 1672;
const ROBOT_H = 880;
const FACE_CENTRE = { x: 835, y: 290 };
// Both eyes are identical circles, level and mirrored about the visor centre, with the nose between them.
const EYES = [
  { cx: 776.25, cy: 281, rx: 27.5, ry: 27.5 },
  { cx: 893.75, cy: 281, rx: 27.5, ry: 27.5 },
];
const NOSE = { cx: 835, cy: 330.5, rx: 9.5, ry: 9.5 };
// How far the face slides across the visor at a full look, in image pixels. Checked against the visor
// shape so the eyes and their glow never reach the rim, even in the curved corners.
const EYE_REACH = { x: 18, up: 22, down: 12 };
// Neural globe background + orbit rings around the robot. Kept intact, switched off for now.
const SHOW_TECH_SCENE = false;

// Signals on the floor grid: `col` runs toward the viewer along a depth line, `row` runs sideways
// along a cross line. Durations and delays are staggered so they never sync up.
const FLOOR_PULSES: { col?: number; row?: number; dur: number; delay: number; reverse?: boolean }[] = [
  { col: -3, dur: 2.4, delay: 0 },
  { col: 2, dur: 2.9, delay: 1.1 },
  { col: -1, dur: 3.3, delay: 2.3 },
  { col: 4, dur: 2.6, delay: 0.6 },
  { col: -5, dur: 3.1, delay: 1.7 },
  { col: 1, dur: 2.7, delay: 3.4 },
  { col: -7, dur: 3.5, delay: 2.9 },
  { col: 6, dur: 3.0, delay: 1.9 },
  { row: 2, dur: 3.6, delay: 0.4 },
  { row: 3, dur: 4.2, delay: 2.0, reverse: true },
  { row: 4, dur: 3.9, delay: 1.2 },
  { row: 5, dur: 4.4, delay: 3.1, reverse: true },
];

// Coding badges floating either side of the headline. Positions are viewport percentages; each
// bobs up and down only, with its own amplitude and period so they drift out of step.
const HERO_FLOATS: { item: TechItem; pos: CSSProperties; amp: number; dur: number; delay: number }[] = [
  { item: { kind: 'glyph', text: '</>' }, pos: { left: '14%', top: '22%' }, amp: 16, dur: 5.2, delay: 0 },
  { item: { kind: 'code', parts: ['const', 'future = build()'] }, pos: { left: '5%', top: '46%' }, amp: 12, dur: 6.4, delay: 1.2 },
  { item: { kind: 'icon', icon: 'terminal' }, pos: { left: '16%', top: '70%' }, amp: 18, dur: 4.8, delay: 0.6 },
  { item: { kind: 'icon', icon: 'chip' }, pos: { right: '15%', top: '20%' }, amp: 14, dur: 5.6, delay: 0.9 },
  { item: { kind: 'code', parts: ['git', 'push origin main'] }, pos: { right: '5%', top: '44%' }, amp: 12, dur: 6.8, delay: 0.3 },
  { item: { kind: 'glyph', text: '{ }' }, pos: { right: '14%', top: '68%' }, amp: 16, dur: 5.0, delay: 1.6 },
];

function clamp(n: number, a = 0, b = 1) {
  return Math.max(a, Math.min(b, n));
}
function range(p: number, a: number, b: number) {
  if (b === a) return p >= b ? 1 : 0;
  return clamp((p - a) / (b - a));
}
function easeInOut(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}
function easeOut(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

export default function HeroCinematic() {
  const trackRef = useRef<HTMLElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const robotRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);
  const floatsRef = useRef<HTMLDivElement>(null);
  const [unpinned, setUnpinned] = useState(false);
  const [entered, setEntered] = useState(false);
  const [robotReady, setRobotReady] = useState(false);
  const holdRef = useRef<HTMLDivElement>(null);
  const sizerRef = useRef<HTMLImageElement>(null);
  // const layerRefs = useRef<(HTMLImageElement | null)[]>([]);
  const faceRef = useRef<SVGGElement>(null);
  const eyeRefs = useRef<(SVGGElement | null)[]>([]);

  useEffect(() => {
    document.documentElement.classList.remove('hero-full', 'intro-lock');
    document.body.style.overflow = '';
    // Two frames so the hidden start state is painted before the transition kicks in.
    let raf = requestAnimationFrame(() => {
      raf = requestAnimationFrame(() => setEntered(true));
    });
    if (sizerRef.current?.complete) setRobotReady(true);
    return () => cancelAnimationFrame(raf);
  }, []);

  // useEffect(() => {
  //   lookFrames.forEach(src => {
  //     const img = new Image();
  //     img.src = src;
  //   });
  // }, []);

  useEffect(() => {
    const pointer = { x: 0, y: 0 };
    const look = { x: 0, y: 0 };
    const vel = { x: 0, y: 0 };
    /* Frame blending (switched off):
    const count = lookFrames.length;
    const weights = new Float32Array(count);
    const opacities = new Float32Array(count);
    const lastOpacities = new Float32Array(count);
    const lastZ = new Int16Array(count);
    lastOpacities[restLookIndex] = 1;
    // Blend width in pose pixels: wide enough to bridge gaps between frames, narrow enough to avoid ghosting.
    const SIGMA = 3.2;
    const MAX_LAYERS = 3;
    */
    let armed = false;
    let last = performance.now();
    // Blinks: a quick close-open every few seconds, at a slightly random rhythm.
    let nextBlink = last + 2500 + Math.random() * 2500;

    const faceBox = () => {
      const img = sizerRef.current;
      if (!img) return null;
      const rect = img.getBoundingClientRect();
      const nw = img.naturalWidth || 16;
      const nh = img.naturalHeight || 9;
      const scale = Math.min(rect.width / nw, rect.height / nh);
      const width = nw * scale;
      const height = nh * scale;
      return {
        x: rect.left + (rect.width - width) / 2 + (width * FACE_CENTRE.x) / ROBOT_W,
        y: rect.top + (rect.height - height) + (height * FACE_CENTRE.y) / ROBOT_H,
      };
    };

    const onMove = (e: PointerEvent) => {
      armed = true;
      pointer.x = e.clientX;
      pointer.y = e.clientY;
    };

    const onLeave = () => {
      armed = false;
    };

    /* Frame blending (switched off):
    const order: number[] = [];
    const zIndex = new Int16Array(count);

    // Weight every frame by how close its pose is to the target, then stack the strongest few so
    // they composite to an exact weighted mix: the heaviest sits opaque at the bottom and each layer
    // above gets alpha = w / (running total), which keeps brightness constant during crossfades.
    const blend = (px: number, py: number) => {
      let best = Infinity;
      for (let i = 0; i < count; i++) {
        const dx = lookPoses[i].x - px;
        const dy = lookPoses[i].y - py;
        weights[i] = dx * dx + dy * dy;
        if (weights[i] < best) best = weights[i];
      }
      order.length = 0;
      for (let i = 0; i < count; i++) {
        weights[i] = Math.exp(-(weights[i] - best) / (2 * SIGMA * SIGMA));
        if (weights[i] > 0.02) order.push(i);
      }
      order.sort((a, b) => weights[b] - weights[a]);
      if (order.length > MAX_LAYERS) order.length = MAX_LAYERS;

      opacities.fill(0);
      zIndex.fill(0);
      let total = 0;
      for (let k = 0; k < order.length; k++) {
        const i = order[k];
        total += weights[i];
        opacities[i] = k === 0 ? 1 : weights[i] / total;
        zIndex[i] = MAX_LAYERS - (order.length - 1 - k);
      }
    };

    const paint = () => {
      const layers = layerRefs.current;
      for (let i = 0; i < count; i++) {
        const el = layers[i];
        if (!el) continue;
        const next = opacities[i];
        if (Math.abs(next - lastOpacities[i]) >= 0.004 || (next === 0) !== (lastOpacities[i] === 0)) {
          lastOpacities[i] = next;
          el.style.opacity = String(next);
        }
        if (zIndex[i] !== lastZ[i]) {
          lastZ[i] = zIndex[i];
          el.style.zIndex = String(zIndex[i]);
        }
      }
    };
    */

    window.addEventListener('pointermove', onMove, { passive: true });
    document.documentElement.addEventListener('pointerleave', onLeave);

    let raf = 0;
    const tick = (now: number) => {
      const dt = Math.min(0.032, (now - last) / 1000);
      last = now;

      let tx = 0;
      let ty = 0;
      const face = armed ? faceBox() : null;
      if (face) {
        const radius = Math.min(window.innerWidth, window.innerHeight) * 0.28;
        tx = (pointer.x - face.x) / radius;
        ty = (pointer.y - face.y) / radius;
        const mag = Math.hypot(tx, ty);
        if (mag > 1) {
          tx /= mag;
          ty /= mag;
        }
      }

      // Critically damped spring: the head accelerates toward the cursor and settles without overshoot.
      const k = 90;
      const c = 2 * Math.sqrt(k);
      vel.x += ((tx - look.x) * k - vel.x * c) * dt;
      vel.y += ((ty - look.y) * k - vel.y * c) * dt;
      look.x += vel.x * dt;
      look.y += vel.y * dt;

      // blend(look.x * POSE_REACH.x, look.y * (look.y < 0 ? POSE_REACH.up : POSE_REACH.down));
      // paint();

      // Eyes and nose glide across the visor toward the cursor; the eyes blink now and then.
      const fx = look.x * EYE_REACH.x;
      const fy = look.y * (look.y < 0 ? EYE_REACH.up : EYE_REACH.down);
      faceRef.current?.setAttribute('transform', `translate(${fx.toFixed(2)} ${fy.toFixed(2)})`);
      const sinceBlink = now - nextBlink;
      let lid = 1;
      if (sinceBlink > 0) {
        const t = sinceBlink / 180;
        if (t >= 1) nextBlink = now + 2800 + Math.random() * 3200;
        else lid = Math.max(0.08, Math.abs(1 - 2 * t));
      }
      eyeRefs.current.forEach((el, i) => {
        const e = EYES[i];
        el?.setAttribute('transform', `translate(${e.cx} ${e.cy}) scale(1 ${lid.toFixed(3)}) translate(${-e.cx} ${-e.cy})`);
      });

      if (holdRef.current) {
        holdRef.current.style.transform = `translate(${look.x * 8}px, ${look.y * 6}px)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', onMove);
      document.documentElement.removeEventListener('pointerleave', onLeave);
    };
  }, []);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let raf = 0;
    let target = 0;
    let shown = -1;
    let last = performance.now();

    const readTarget = () => {
      const el = trackRef.current;
      if (!el) return;
      const start = el.offsetTop;
      const end = Math.max(1, el.offsetHeight - window.innerHeight);
      target = reduce ? 1 : clamp((window.scrollY - start) / end);
      setUnpinned(target >= 0.999);
    };

    const apply = (p: number) => {
      const vh = window.innerHeight;

      // 1. CYHIVE and the robot drift up together (robot faster, for depth) and fade out.
      const exit = easeInOut(range(p, 0, 0.44));
      const introFade = 1 - easeInOut(range(p, 0.18, 0.46));
      if (introRef.current) {
        introRef.current.style.opacity = String(introFade);
        introRef.current.style.pointerEvents = introFade > 0.08 ? 'auto' : 'none';
      }
      if (headingRef.current) {
        headingRef.current.style.transform = `translate3d(0, ${-exit * vh * 0.42}px, 0) scale(${1 - exit * 0.08})`;
      }
      if (robotRef.current) {
        robotRef.current.style.transform = `translate3d(0, ${-exit * vh * 0.7}px, 0) scale(${1 - exit * 0.06})`;
      }

      // 2. Once they have mostly cleared, the headline rises in, then the copy and buttons.
      const titleT = easeOut(range(p, 0.38, 0.64));
      const copyT = easeOut(range(p, 0.54, 0.8));
      if (titleRef.current) {
        titleRef.current.style.opacity = String(titleT);
        titleRef.current.style.transform = `translate3d(0, ${(1 - titleT) * 90}px, 0)`;
        titleRef.current.style.filter = titleT < 1 ? `blur(${(1 - titleT) * 8}px)` : '';
      }
      if (floatsRef.current) {
        // Kept very faint so the badges read as background texture behind the headline.
        floatsRef.current.style.opacity = String(titleT * 0.25);
      }
      if (copyRef.current) {
        copyRef.current.style.opacity = String(copyT);
        copyRef.current.style.transform = `translate3d(0, ${(1 - copyT) * 50}px, 0)`;
        copyRef.current.style.pointerEvents = copyT > 0.55 ? 'auto' : 'none';
      }
    };

    // Ease the displayed progress toward the scroll position so wheel steps glide instead of jump.
    const tick = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      shown = shown < 0 ? target : shown + (target - shown) * (1 - Math.exp(-dt * 8));
      if (Math.abs(target - shown) < 0.0005) shown = target;
      apply(shown);
      raf = shown === target ? 0 : requestAnimationFrame(tick);
    };

    const onScroll = () => {
      readTarget();
      if (!raf) {
        last = performance.now();
        raf = requestAnimationFrame(tick);
      }
    };

    readTarget();
    raf = requestAnimationFrame(tick);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <section id="home" ref={trackRef} className="relative bg-black" style={{ height: `${TRACK_VH}vh` }}>
      <div
        className={`overflow-hidden bg-black ${
          unpinned ? 'absolute right-0 bottom-0 left-0 h-[100svh]' : 'fixed inset-0 z-30 h-[100svh]'
        }`}
      >
        <div className="hero-grid-back z-0" aria-hidden />
        {SHOW_TECH_SCENE && <NeuralField className="z-0" />}

        <div ref={introRef} className="absolute inset-0 z-[1] flex flex-col items-center">
          <div className="hero-floor" aria-hidden>
            <div className="hero-floor-plane">
              {FLOOR_PULSES.map((p, i) => (
                <span
                  key={i}
                  className={`floor-pulse ${p.col !== undefined ? 'floor-pulse-v' : 'floor-pulse-h'} ${
                    p.reverse ? 'reverse' : ''
                  }`}
                  style={
                    {
                      '--col': p.col,
                      '--row': p.row,
                      '--dur': `${p.dur}s`,
                      '--delay': `${p.delay}s`,
                    } as CSSProperties
                  }
                />
              ))}
            </div>
          </div>
          <div className={`relative z-[1] pt-[18vh] md:pt-[16vh] ${entered ? 'hero-in' : 'hero-from-top'}`}>
            <div ref={headingRef}>
              <p data-text="CYHIVE" className="text-flow-glow font-wordmark text-[clamp(2.8rem,14vw,12rem)] leading-none font-normal tracking-[0.04em] text-white">
                <span className="text-flow">CYHIVE</span>
              </p>
            </div>
          </div>

          <div
            className={`relative z-[2] -mt-[16vh] flex min-h-0 w-full flex-1 items-end justify-center pb-[4vh] md:pb-[2vh] ${
              entered && robotReady ? 'hero-in hero-robot-in' : 'hero-from-bottom'
            }`}
          >
            <div ref={robotRef} className="relative origin-bottom will-change-transform">
              {SHOW_TECH_SCENE && <RobotOrbits />}
              {/* <div className="robot-halo" aria-hidden>
                <div className="halo-wash" />
                <div className="halo-frame" />
                <div className="halo-ring" />
              </div> */}
              <div ref={holdRef} className="relative z-[2] will-change-transform">
                <img
                  ref={sizerRef}
                  src={robotEyeless}
                  onLoad={() => setRobotReady(true)}
                  alt=""
                  className="h-full max-h-[84svh] w-auto max-w-[min(1280px,100vw)] object-contain object-bottom select-none"
                  draggable={false}
                />
{/* Frame layers (switched off):
                {lookFrames.map((src, i) => (
                  <img
                    key={src}
                    ref={el => {
                      layerRefs.current[i] = el;
                    }}
                    src={src}
                    alt=""
                    className="pointer-events-none absolute inset-0 h-full w-full object-contain object-bottom select-none"
                    style={{ opacity: i === restLookIndex ? 1 : 0 }}
                    draggable={false}
                  />
                ))}
                */}
                <svg
                  viewBox={`0 0 ${ROBOT_W} ${ROBOT_H}`}
                  preserveAspectRatio="xMidYMax meet"
                  className="pointer-events-none absolute inset-0 h-full w-full"
                  aria-hidden
                >
                  <defs>
                    <mask id="robot-visor" maskUnits="userSpaceOnUse" x="0" y="0" width={ROBOT_W} height={ROBOT_H}>
                      <image href={visorMask} x="0" y="0" width={ROBOT_W} height={ROBOT_H} />
                    </mask>
                    <radialGradient id="robot-eye-fill" cx="50%" cy="45%" r="60%">
                      <stop offset="0" stopColor="#fbeefa" />
                      <stop offset="0.75" stopColor="#f6dff2" />
                      <stop offset="1" stopColor="#efd0ef" />
                    </radialGradient>
                    <filter id="robot-eye-glow" x="-100%" y="-100%" width="300%" height="300%">
                      <feGaussianBlur stdDeviation="9" />
                    </filter>
                  </defs>
                  <g mask="url(#robot-visor)">
                    <g ref={faceRef}>
                      {/* Glow the eyes cast on the visor glass. */}
                      <g filter="url(#robot-eye-glow)" fill="#8b5cf6" opacity="0.75">
                        {EYES.map((e, i) => (
                          <ellipse key={i} cx={e.cx} cy={e.cy} rx={e.rx + 4} ry={e.ry + 4} />
                        ))}
                        <ellipse cx={NOSE.cx} cy={NOSE.cy} rx={NOSE.rx + 3} ry={NOSE.ry + 3} />
                      </g>
                      {EYES.map((e, i) => (
                        <g
                          key={i}
                          ref={el => {
                            eyeRefs.current[i] = el;
                          }}
                        >
                          <ellipse cx={e.cx} cy={e.cy} rx={e.rx} ry={e.ry} fill="url(#robot-eye-fill)" />
                        </g>
                      ))}
                      <ellipse cx={NOSE.cx} cy={NOSE.cy} rx={NOSE.rx} ry={NOSE.ry} fill="url(#robot-eye-fill)" />
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div
          ref={floatsRef}
          className="pointer-events-none absolute inset-0 z-[2] hidden lg:block"
          style={{ opacity: 0 }}
          aria-hidden
        >
          <TechStrokeDefs />
          {HERO_FLOATS.map((f, i) => (
            <div
              key={i}
              className="hero-float"
              style={
                {
                  ...f.pos,
                  '--amp': `${f.amp}px`,
                  '--dur': `${f.dur}s`,
                  '--delay': `${f.delay}s`,
                } as CSSProperties
              }
            >
              <TechBadge item={f.item} />
            </div>
          ))}
        </div>

        <div className="pointer-events-none absolute inset-0 z-[2] flex flex-col items-center justify-start px-6 pt-[16vh] text-center md:pt-[14vh]">
          <div ref={titleRef} className="will-change-transform" style={{ opacity: 0 }}>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet/25 bg-violet/12 px-3 py-1.5">
              <span className="size-1.5 rounded-full bg-violet" />
              <span className="text-[11px] font-medium text-violet-light sm:text-xs">
                Technology Education & IT Services
              </span>
            </div>
            <h1 className="font-display max-w-5xl text-[clamp(2.2rem,6vw,5rem)] leading-[1.08] font-bold text-white">
              Empowering
              <br />
              <span className="text-gradient-violet">Tomorrow's</span>
              <br />
              Tech Leaders
            </h1>
          </div>
          <div
            ref={copyRef}
            className="mt-6 flex max-w-xl flex-col items-center gap-5 will-change-transform"
            style={{ opacity: 0, pointerEvents: 'none' }}
          >
            <p className="text-[clamp(0.9rem,1.4vw,1.1rem)] leading-7 text-muted">
              Build industry-ready skills through expert-led training, hands-on projects, and innovative learning
              experiences designed for your future in technology.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <PrimaryButton onClick={() => navigate('#/courses')}>Explore Courses</PrimaryButton>
              <OutlineButton onClick={() => navigate('#/contact')}>Get in Touch</OutlineButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
