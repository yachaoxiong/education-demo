"use client";

import { BookOpen, ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import { getCopy } from "@/components/siteCopy";
import { useMemo, useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const copy = getCopy(language);
  const navItems = useMemo(
    () => [
      { label: language === "zh" ? "关于我们" : "About", hasDropdown: true },
      { label: language === "zh" ? "课程" : "Programs", hasDropdown: true },
      { label: language === "zh" ? "预约" : "Booking", href: "/booking", hasDropdown: false },
      { label: language === "zh" ? "联系" : "Contact", href: "/booking", hasDropdown: false },
    ],
    [language],
  );

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/95 backdrop-blur-md">
      <div className="container-site flex h-[72px] items-center justify-between gap-4 lg:h-[76px]">
        <Link href="/" className="flex items-center gap-2 text-[#15356c]">
          <span className="flex h-10 w-10 items-center justify-center rounded-md text-[#15356c]">
            <BookOpen className="h-6 w-6" />
          </span>
          <span className="leading-none">
            <span className="block text-[18px] font-semibold tracking-[-0.03em] text-[#14346d]">BrightPath</span>
            <span className="-mt-0.5 block text-[11px] font-medium text-[#8ca0c7]">Education</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-2 lg:flex">
          {navItems.map((item) => (
            <div key={item.label} className="group relative">
              {item.href ? (
                <Link href={item.href} className="flex items-center gap-1 rounded-full px-3 py-2 text-[13px] font-medium text-slate-700 hover:text-[#14346d]">
                  {item.label}
                </Link>
              ) : (
                <a href="#" className="flex items-center gap-1 rounded-full px-3 py-2 text-[13px] font-medium text-slate-700 hover:text-[#14346d]">
                  {item.label}
                  {item.hasDropdown && <ChevronDown className="h-3.5 w-3.5" />}
                </a>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <div className="flex items-center gap-2 text-[13px] font-semibold text-slate-600">
            <button type="button" onClick={() => setLanguage("en")} className={`rounded-full px-3 py-1.5 ${language === "en" ? "bg-[#1f56c7] text-white" : "text-slate-700"}`}>EN</button>
            <button type="button" onClick={() => setLanguage("zh")} className={`rounded-full px-3 py-1.5 ${language === "zh" ? "bg-[#1f56c7] text-white" : "text-slate-700"}`}>中文</button>
          </div>
          <Link href="/booking" className="rounded-md bg-[#1f56c7] px-4 py-2.5 text-[13px] font-semibold text-white shadow-sm hover:bg-[#1b4caf]">
            {copy.hero.primary}
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen((value) => !value)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 lg:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <div className="container-site space-y-3 py-4">
            {navItems.map((item) =>
              item.href ? (
                <Link key={item.label} href={item.href} className="block rounded-2xl px-4 py-3 text-slate-700 hover:bg-slate-50">
                  {item.label}
                </Link>
              ) : (
                <a key={item.label} href="#" className="block rounded-2xl px-4 py-3 text-slate-700 hover:bg-slate-50">
                  {item.label}
                </a>
              ),
            )}
            <Link href="/booking" className="block rounded-2xl bg-[#1f56c7] px-4 py-3 text-center font-semibold text-white">
              {copy.hero.primary}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
