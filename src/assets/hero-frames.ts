// Robot look-around frames. Each entry is [frame number, nose dx, nose dy] measured in
// source pixels (1280x720) relative to the rest pose, where +x is screen-right and +y is down.
const LOOK_POSES: [number, number, number][] = [
  [1, 0.0, 0.0],
  [2, 28.6, -1.9],
  [3, 35.6, -2.5],
  [4, 40.7, -2.8],
  [5, 43.0, -2.9],
  [6, 45.1, 0.2],
  [7, 45.7, 3.0],
  [8, 48.9, 15.5],
  [9, 49.7, 17.7],
  [10, 51.6, 24.2],
  [11, 53.3, 33.0],
  [12, 54.6, 37.3],
  [13, 54.1, 42.7],
  [14, 49.2, 44.0],
  [15, 45.3, 44.8],
  [16, 26.8, 47.0],
  [17, 19.2, 47.7],
  [18, 11.1, 48.1],
  [19, -6.0, 48.8],
  [20, -20.9, 49.0],
  [21, -24.5, 49.2],
  [22, -39.6, 49.4],
  [23, -43.5, 49.3],
  [24, -47.5, 48.9],
  [25, -51.1, 47.0],
  [26, -52.1, 40.4],
  [27, -52.7, 37.4],
  [28, -53.0, 31.2],
  [29, -53.2, 27.7],
  [30, -53.1, 20.8],
  [31, -53.0, 17.7],
  [32, -52.9, 12.9],
  [33, -51.3, 11.2],
  [34, -48.9, 11.2],
  [35, -34.7, 11.6],
  [36, -27.7, 11.7],
  [37, -12.6, 11.9],
  [38, 9.6, 53.6],
  [39, 8.9, 50.6],
  [40, 6.8, 39.0],
  [41, 6.3, 34.9],
  [42, 5.4, 30.8],
  [43, 3.9, 22.1],
  [44, 2.9, 14.4],
  [45, 2.3, 11.2],
  [46, 1.1, 5.2],
  [47, 3.8, -0.3],
  [48, 6.5, -0.5],
  [49, 13.3, -0.7],
  [50, 17.2, -1.0],
];

const urls = import.meta.glob<string>('./hero-frames/bot-*.webp', {
  eager: true,
  query: '?url',
  import: 'default',
});

const urlFor = (n: number) => urls[`./hero-frames/bot-${String(n).padStart(2, '0')}.webp`];

export const lookFrames = LOOK_POSES.map(([n]) => urlFor(n));
export const lookPoses = LOOK_POSES.map(([, x, y]) => ({ x, y }));
export const restLookIndex = 0;

// Reach of the head turn in pose space. This clip barely looks above the rest pose.
export const POSE_REACH = { x: 54, up: 3, down: 50 };

// Where the face sits inside the frame image, as fractions of its width and height.
export const FACE_ANCHOR = { x: 0.5, y: 0.27 };
