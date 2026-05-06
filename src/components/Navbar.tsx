"use client";

import { BookOpen, ChevronDown, Languages, Menu, X } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import { getCopy } from "@/components/siteCopy";
import { useEffect, useMemo, useRef, useState } from "react";

const navLabels = {
  en: {
    about: "About Us",
    programs: "Programs",
    booking: "Booking",
    contact: "Contact",
  },
  zh: {
    about: "关于我们",
    programs: "课程",
    booking: "预约",
    contact: "联系",
  },
} as const;

const languageOptions = [
  { key: "en", label: "English" },
  { key: "zh", label: "中文" },
] as const;

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const languageMenuRef = useRef<HTMLDivElement>(null);
  const { language, setLanguage } = useLanguage();
  const copy = getCopy(language);
  const labels = navLabels[language];
  const navItems = useMemo(
    () => [
      { key: "about", href: "/about", hasDropdown: false },
      { key: "programs", hasDropdown: true },
      { key: "booking", href: "/booking", hasDropdown: false },
      { key: "contact", href: "/booking", hasDropdown: false },
    ],
    [],
  );

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      if (languageMenuRef.current && !languageMenuRef.current.contains(event.target as Node)) {
        setLanguageMenuOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setLanguageMenuOpen(false);
      }
    };

    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/95 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/90">
      <div className="container-site flex h-[72px] items-center justify-between gap-4 lg:h-[76px]">
        <Link href="/" className="flex items-center gap-2 text-[#15356c] dark:text-slate-100">
          <span className="flex h-10 w-10 items-center justify-center rounded-md text-[#15356c] dark:text-slate-100">
            <BookOpen className="h-6 w-6" />
          </span>
          <span className="leading-none">
            <span className="block text-[18px] font-semibold tracking-[-0.03em] text-[#14346d] dark:text-slate-100">BrightPath</span>
            <span className="-mt-0.5 block text-[11px] font-medium text-[#8ca0c7] dark:text-slate-400">Education</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-2 lg:flex">
          {navItems.map((item) => (
            <div key={item.key} className="group relative">
              {item.href ? (
                <Link href={item.href} className="flex items-center gap-1 rounded-full px-3 py-2 text-[13px] font-medium text-slate-700 hover:text-[#14346d]">
                  {labels[item.key as keyof typeof labels]}
                </Link>
              ) : item.hasDropdown ? (
                <button
                  type="button"
                  className="flex items-center gap-1 rounded-full px-3 py-2 text-[13px] font-medium text-slate-700 hover:text-[#14346d]"
                >
                  {labels[item.key as keyof typeof labels]}
                  <ChevronDown className="h-3.5 w-3.5" />
                </button>
              ) : null}
            </div>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <div ref={languageMenuRef} className="relative">
            <button
              type="button"
              onClick={() => setLanguageMenuOpen((value) => !value)}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-[13px] font-medium text-slate-700 shadow-sm transition hover:border-[#8db4ff] hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-[#9cbcff] focus:ring-offset-2 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
              aria-label="Select language"
              aria-haspopup="menu"
              aria-expanded={languageMenuOpen}
            >
              <Languages className="h-4 w-4 text-[#1f56c7] dark:text-[#8fb1ff]" />
              <span>{languageOptions.find((option) => option.key === language)?.shortLabel}</span>
              <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${languageMenuOpen ? "rotate-180" : ""}`} />
            </button>

            <div
              role="menu"
              className={`absolute right-0 top-[calc(100%+8px)] z-20 min-w-[140px] origin-top-right overflow-hidden rounded-xl border border-slate-200 bg-white p-1 shadow-lg transition-all duration-150 dark:border-slate-700 dark:bg-slate-900 ${
                languageMenuOpen ? "pointer-events-auto scale-100 translate-y-0 opacity-100" : "pointer-events-none scale-95 -translate-y-1 opacity-0"
              }`}
            >
              {languageOptions.map((option) => {
                const active = language === option.key;
                return (
                  <button
                    key={option.key}
                    type="button"
                    role="menuitemradio"
                    aria-checked={active}
                    onClick={() => {
                      setLanguage(option.key as "en" | "zh");
                      setLanguageMenuOpen(false);
                    }}
                    className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-[13px] transition ${
                      active ? "bg-[#eff5ff] text-[#1f56c7] dark:bg-slate-800 dark:text-slate-100" : "text-slate-600 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800"
                    }`}
                  >
                    <span>{option.label}</span>
                    {active && <span className="h-1.5 w-1.5 rounded-full bg-[#1f56c7]" />}
                  </button>
                );
              })}
            </div>
          </div>
          <Link href="/booking" className="rounded-full bg-[#1f56c7] px-4 py-2.5 text-[13px] font-semibold text-white shadow-sm transition hover:bg-[#1b4caf] hover:shadow-md dark:bg-[#4f7cff] dark:hover:bg-[#3e69f5]">
            {copy.hero.primary}
          </Link>
        </div>

        <button
          onClick={() => {
            setMobileOpen((value) => !value);
            setLanguageMenuOpen(false);
          }}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 lg:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white lg:hidden dark:border-slate-800 dark:bg-slate-950">
          <div className="container-site space-y-3 py-4">
            {navItems.map((item) =>
              item.href ? (
                <Link key={item.key} href={item.href} className="block rounded-2xl px-4 py-3 text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800/80">
                  {labels[item.key as keyof typeof labels]}
                </Link>
              ) : item.hasDropdown ? (
                <a key={item.key} href="#" className="block rounded-2xl px-4 py-3 text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800/80">
                  {labels[item.key as keyof typeof labels]}
                </a>
              ) : null,
            )}
            <div ref={languageMenuRef} className="relative">
              <button
                type="button"
                onClick={() => setLanguageMenuOpen((value) => !value)}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-[13px] font-medium text-slate-700 shadow-sm transition hover:border-[#8db4ff] hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-[#9cbcff] focus:ring-offset-2 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
                aria-label="Select language"
                aria-haspopup="menu"
                aria-expanded={languageMenuOpen}
              >
                <Languages className="h-4 w-4 text-[#1f56c7] dark:text-[#8fb1ff]" />
                <span>{languageOptions.find((option) => option.key === language)?.shortLabel}</span>
                <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${languageMenuOpen ? "rotate-180" : ""}`} />
              </button>

              <div
                role="menu"
                className={`absolute right-0 top-[calc(100%+8px)] z-20 min-w-[140px] origin-top-right overflow-hidden rounded-xl border border-slate-200 bg-white p-1 shadow-lg transition-all duration-150 dark:border-slate-700 dark:bg-slate-900 ${
                  languageMenuOpen ? "pointer-events-auto scale-100 translate-y-0 opacity-100" : "pointer-events-none scale-95 -translate-y-1 opacity-0"
                }`}
              >
                {languageOptions.map((option) => {
                  const active = language === option.key;
                  return (
                    <button
                      key={option.key}
                      type="button"
                      role="menuitemradio"
                      aria-checked={active}
                      onClick={() => {
                        setLanguage(option.key as "en" | "zh");
                        setLanguageMenuOpen(false);
                        setMobileOpen(false);
                      }}
                      className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-[13px] transition ${
                        active ? "bg-[#eff5ff] text-[#1f56c7] dark:bg-slate-800 dark:text-slate-100" : "text-slate-600 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800"
                      }`}
                    >
                      <span>{option.label}</span>
                      {active && <span className="h-1.5 w-1.5 rounded-full bg-[#1f56c7]" />}
                    </button>
                  );
                })}
              </div>
            </div>
            <Link href="/booking" className="block rounded-2xl bg-[#1f56c7] px-4 py-3 text-center font-semibold text-white">
              {copy.hero.primary}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
