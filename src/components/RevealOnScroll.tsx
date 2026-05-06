"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealOnScrollProps = {
  children: ReactNode;
  className?: string;
  animationClassName?: string;
  delayMs?: number;
  threshold?: number;
};

export default function RevealOnScroll({
  children,
  className = "",
  animationClassName = "animate__fadeInUp",
  delayMs = 0,
  threshold = 0.18,
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          window.setTimeout(() => setIsVisible(true), delayMs);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [delayMs, threshold]);

  return (
    <div
      ref={ref}
      className={`${className} ${isVisible ? `animate__animated ${animationClassName}` : "opacity-0"}`}
      style={{ animationDelay: `${delayMs}ms` }}
    >
      {children}
    </div>
  );
}
