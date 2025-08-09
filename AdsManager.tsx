"use client";

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

// Declaração de tipo para adsbygoogle (se não estiver em global.d.ts)
declare global {
  interface Window {
    adsbygoogle?: {
      push: (args: unknown[]) => void;
    }[];
  }
}

export default function AdManager() {
  const pathname = usePathname();
  const hasLoaded = useRef(false);

  useEffect(() => {
    if (window.adsbygoogle) {
      if (!hasLoaded.current) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        hasLoaded.current = true;
      } else {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    }
  }, [pathname]);

  return null; // Componente sem renderização visível
}