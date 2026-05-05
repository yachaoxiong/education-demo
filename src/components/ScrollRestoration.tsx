"use client";

import { useLayoutEffect } from "react";

export default function ScrollRestoration() {
  useLayoutEffect(() => {
    const { history } = window;
    const previous = history.scrollRestoration;
    let raf1 = 0;
    let raf2 = 0;

    history.scrollRestoration = "manual";

    const forceTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    };

    const onPageShow = (event: PageTransitionEvent) => {
      if (event.persisted) {
        forceTop();
      }
    };

    forceTop();
    raf1 = window.requestAnimationFrame(forceTop);
    raf2 = window.requestAnimationFrame(() => {
      window.requestAnimationFrame(forceTop);
    });
    window.addEventListener("pageshow", onPageShow);

    return () => {
      history.scrollRestoration = previous;
      window.removeEventListener("pageshow", onPageShow);
      window.cancelAnimationFrame(raf1);
      window.cancelAnimationFrame(raf2);
    };
  }, []);

  return null;
}
