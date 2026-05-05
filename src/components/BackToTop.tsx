"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 400);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      className="fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#274fbb] text-white shadow-[0_14px_35px_rgba(39,79,187,0.28)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#1f3f95] focus:outline-none focus:ring-2 focus:ring-[#274fbb]/30 focus:ring-offset-2"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}
