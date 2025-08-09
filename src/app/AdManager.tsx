"use client";

import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react'; // Importação correta de useRef

// Declaração de tipo para adsbygoogle (opcional, já coberto por global.d.ts)
declare global {
  interface Window {
    adsbygoogle?: {
      push: (args: {} | unknown[]) => void; // Alinhado com global.d.ts
    }[];
  }
}

export default function AdManager() {
  const pathname = usePathname();
  const hasLoaded = useRef(false);

  useEffect(() => {
    if (window.adsbygoogle) {
      if (!hasLoaded.current) {
        (window.adsbygoogle = window.adsbygoogle || []).push({}); // Recarrega os anúncios
        hasLoaded.current = true;
      } else {
        (window.adsbygoogle = window.adsbygoogle || []).push({}); // Recarrega os anúncios
      }
    }
  }, [pathname]);

  return null; // Componente sem renderização visível
}