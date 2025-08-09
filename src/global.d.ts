// src/global.d.ts
declare global {
  interface Window {
    adsbygoogle?: {
      push: (args: unknown[]) => void;
    }[];
  }
}
