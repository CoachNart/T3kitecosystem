"use client";

import { useEffect } from "react";

declare global {
  interface Window { __t3kitScriptsStarted?: boolean }
}

/** Loads the source site's behavior in its original order after native JSX mounts. */
export default function SiteScripts() {
  useEffect(() => {
    if (window.__t3kitScriptsStarted) return;
    window.__t3kitScriptsStarted = true;

    const paths = [
      "/site-scripts/part-1.js",
      "/site-scripts/part-2.js",
      "/site-scripts/part-3.js",
      "/site-scripts/part-4.js",
    ];

    void (async () => {
      for (const path of paths) {
        await new Promise<void>((resolve, reject) => {
          const script = document.createElement("script");
          script.src = path;
          script.async = false;
          script.onload = () => resolve();
          script.onerror = () => reject(new Error(`Failed to load ${path}`));
          document.body.appendChild(script);
        });
      }
    })().catch((error: unknown) => {
      console.error("T3Kit site scripts failed to initialize:", error);
      window.__t3kitScriptsStarted = false;
    });
  }, []);

  return null;
}
