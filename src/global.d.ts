// src/global.d.ts
declare global {
  interface Window {
    adsbygoogle?: {
      push: (arg: {} | unknown[]) => void; // push aceita um objeto vazio ou array
    }[];
  }
}
