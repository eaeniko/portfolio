// src/global.d.ts
declare global {
  interface Window {
    adsbygoogle?: {
      push: (args: {} | unknown[]) => void; // Ajustado para aceitar {} ou unknown[]
    }[];
  }
}
