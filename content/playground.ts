import type { ImageRef } from "./types";

/** Rectangle in the tile's Figma pixel space (x, y, width, height). */
export type TileRect = [x: number, y: number, width: number, height: number];

export type PlaygroundTile = {
  id: string;
  background: string;
  /** Figma frame size; tiles scale proportionally from this */
  size: { width: number; height: number };
  image: ImageRef;
  /** Looping muted clip that fills the tile; `image` is its poster */
  video?: string;
  /** Where the device mockup sits inside the tile. Omit to fill the whole tile. */
  device?: TileRect;
  /** Background-coloured patches from the design that hide mockup edge artifacts */
  patches?: TileRect[];
  /** Spans two grid columns on wider screens */
  wide?: boolean;
};

const TALL = { width: 326, height: 456 };

export const playgroundTiles: PlaygroundTile[] = [
  {
    id: "accounts",
    background: "#FFDCDC",
    size: TALL,
    image: {
      src: "/images/playground/accounts.png",
      alt: "Banking app accounts screen showing a zero balance and an Add money button",
      width: 482,
      height: 1000,
    },
    device: [67.5, 30.5, 191, 395],
    patches: [
      [257, 198, 2, 84],
      [258, 177, 1, 21],
    ],
  },
  {
    id: "qibla",
    background: "#FBFBFA",
    size: TALL,
    image: {
      src: "/images/playground/qibla.png",
      alt: "Qibla compass screen showing the user is facing the Qibla",
      width: 480,
      height: 1000,
    },
    device: [68, 30.5, 190, 395],
    patches: [
      [256, 198, 4, 80],
      [256, 196, 2, 2],
      [257, 175, 1, 21],
    ],
  },
  {
    id: "request",
    background: "#CBC7FF",
    size: TALL,
    image: {
      src: "/images/playground/request.png",
      alt: "Money request screen with an amount, message and Send Request button",
      width: 382,
      height: 790,
    },
    device: [67.5, 30.5, 191, 395],
    patches: [
      [256, 198, 3, 84],
      [257, 172, 3, 22],
      [256, 193, 3, 5],
    ],
  },
  {
    id: "running",
    background: "#E2FFB3",
    size: TALL,
    image: {
      src: "/images/playground/running.png",
      alt: "Running workout tracker screen showing distance and workout details",
      width: 494,
      height: 1000,
    },
    device: [65.5, 30.5, 195, 395],
    patches: [
      [258, 197, 3, 85],
      [259, 176, 2, 20],
      [259, 195, 2, 6],
    ],
  },
  {
    id: "dashboard",
    background: "#FCE6AE",
    size: { width: 676, height: 456 },
    wide: true,
    image: {
      src: "/images/playground/dashboard.png",
      alt: "Web dashboard on a laptop showing a user's organization memberships",
      width: 1600,
      height: 1023,
    },
    device: [33, 33, 610, 390],
  },
  {
    id: "bank-transfer",
    background: "#ECFFFC",
    size: TALL,
    image: {
      src: "/images/playground/bank-transfer.png",
      alt: "Pay with bank transfer screen listing the steps and a Continue to pay button",
      width: 491,
      height: 1000,
    },
    device: [66, 30.5, 194, 395],
    patches: [
      [258, 198, 3, 84],
      [259, 172, 3, 22],
      [258, 193, 3, 5],
    ],
  },
  {
    id: "savings-home",
    background: "#B8B3FF",
    size: TALL,
    image: {
      src: "/images/playground/savings-home.jpg",
      alt: "Savings app walkthrough: setting up Auto saver from the home screen",
      width: 652,
      height: 912,
    },
    video: "/videos/playground/savings-home.mp4",
  },
];
