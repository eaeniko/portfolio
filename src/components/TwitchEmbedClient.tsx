"use client";

import React, { useEffect, useRef } from "react";

type Props = {
  channel: string;
  parents?: string[];
  layout?: "video" | "video-with-chat" | "collection";
  autoplay?: boolean;
  muted?: boolean;
};

export default function TwitchEmbedClient({
  channel,
  parents = ["localhost", "eaeniko.vercel.app", "www.eaeniko.vercel.app"],
  layout = "video-with-chat",
  autoplay = true,
  muted = false,
}: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let embedInstance: any;
  let mo: MutationObserver | null = null;
  let retryHandle: number | null = null;

    const initEmbed = () => {
      if (!containerRef.current) return;
      const Twitch = (window as any).Twitch;
      if (!Twitch || !Twitch.Embed) return;

      // Ensure the container has an id (Twitch.Embed accepts element id or element)
      if (!containerRef.current.id) containerRef.current.id = `twitch-embed-${channel}`;

      try {
        // Clear previous content
        containerRef.current.innerHTML = "";
        embedInstance = new Twitch.Embed(containerRef.current.id, {
          width: "100%",
          height: "100%",
          channel,
          parent: parents,
          layout,
          autoplay,
          muted,
          allowfullscreen: true,
          theme: "dark",
        });
        // Force styles to avoid Twitch thinking the chat is obscured
        const applyStyles = () => {
          try {
            if (!containerRef.current) return;
            containerRef.current.style.position = "relative";
            containerRef.current.style.zIndex = "2147483647";
            containerRef.current.style.overflow = "visible";

            // apply to any iframes added by the embed
            const iframes = containerRef.current.querySelectorAll("iframe");
            iframes.forEach((f) => {
              const el = f as HTMLElement;
              el.style.position = "relative";
              el.style.zIndex = "2147483647";
              el.style.pointerEvents = "auto";
              el.style.background = "transparent";
              // ensure width/height 100%
              (f as HTMLIFrameElement).style.width = "100%";
              (f as HTMLIFrameElement).style.height = "100%";
            });
          } catch (e) {
            // ignore
          }
        };

        // Observe mutations to apply styles when twitch injects nodes
        if (containerRef.current) {
          mo = new MutationObserver(() => applyStyles());
          mo.observe(containerRef.current, { childList: true, subtree: true });
        }

        // retry a few times in case embed loads slowly
        let attempts = 0;
        const retry = () => {
          applyStyles();
          attempts += 1;
          if (attempts < 8) retryHandle = window.setTimeout(retry, 500);
        };
        retry();
      } catch (err) {
        // Ignore initialization errors (will surface in console)
        // but keep the element available for retry if needed
        // console.error(err);
      }
    };

    // Load script if necessary
    if ((window as any).Twitch && (window as any).Twitch.Embed) {
      initEmbed();
    } else {
      const existing = document.querySelector('script[src="https://embed.twitch.tv/embed/v1.js"]');
      if (existing) {
        existing.addEventListener("load", initEmbed);
      } else {
        const s = document.createElement("script");
        s.src = "https://embed.twitch.tv/embed/v1.js";
        s.async = true;
        s.addEventListener("load", initEmbed);
        document.body.appendChild(s);
      }
    }

    return () => {
      try {
        if (embedInstance && typeof embedInstance.remove === "function") embedInstance.remove();
        if (containerRef.current) containerRef.current.innerHTML = "";
        if (mo) {
          try { mo.disconnect(); } catch (e) {}
          mo = null;
        }
        if (retryHandle) {
          clearTimeout(retryHandle);
          retryHandle = null;
        }
      } catch (e) {
        // ignore
      }
    };
  }, [channel, JSON.stringify(parents), layout, autoplay, muted]);

  return <div ref={containerRef} style={{ width: "100%", height: "100%" }} />;
}
