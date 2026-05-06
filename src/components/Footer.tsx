"use client";

import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import { getCopy } from "@/components/siteCopy";

export default function Footer() {
  const { language } = useLanguage();
  const copy = getCopy(language).footer;

  return (
    <footer id="contact" className="relative isolate overflow-visible bg-[var(--foreground)] text-white pt-[122px] min-h-[420px]">
      <div className="pointer-events-none absolute left-0 top-0 z-[1] w-full overflow-visible leading-none" aria-hidden="true">
        <svg viewBox="0 0 1440 220" className="block h-[138px] w-full -translate-y-px" preserveAspectRatio="none">
          <path
            fill="#ffffff"
            d="M0,110C72,56,144,34,216,40C288,46,360,90,432,102C504,114,576,102,648,82C720,62,792,32,864,42C936,52,1008,104,1080,116C1152,128,1224,102,1296,72C1368,42,1416,28,1440,24V0H0Z"
          />
        </svg>
      </div>
      <div className="absolute inset-0 z-[0] bg-[linear-gradient(180deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0)_34%)]" />
      <div className="relative z-10 container-site py-14 lg:py-18">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.7fr_0.7fr_1fr_1.1fr]">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-md border border-white/20">
                <span className="text-sm font-semibold">BP</span>
              </div>
              <div>
                <p className="text-[18px] font-semibold leading-none">BrightPath</p>
                <p className="text-[11px] text-white/70">Education</p>
              </div>
            </div>
            <p className="mt-4 max-w-[260px] text-[13px] leading-6 text-white/72">{copy.intro}</p>
            <div className="mt-5 flex gap-3 text-white/80">
              <span className="text-[13px] font-medium">Facebook</span>
              <span className="text-[13px] font-medium">Instagram</span>
              <span className="text-[13px] font-medium">LinkedIn</span>
            </div>
          </div>

          <div>
            <h3 className="text-[14px] font-semibold">{copy.nav}</h3>
            <ul className="mt-4 space-y-3 text-[13px] text-white/72">
              <li><Link className="cursor-pointer transition hover:text-white" href="/about">About Us</Link></li>
              <li><Link className="cursor-pointer transition hover:text-white" href="/#programs">Programs</Link></li>
              <li><Link className="cursor-pointer transition hover:text-white" href="/booking">Booking</Link></li>
              <li><Link className="cursor-pointer transition hover:text-white" href="/booking">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[14px] font-semibold">{copy.programs}</h3>
            <ul className="mt-4 space-y-3 text-[13px] text-white/72">
              <li>SK - Grade 6</li>
              <li>High School</li>
              <li>Contests</li>
              <li>Language</li>
              <li>Admissions Consulting</li>
            </ul>
          </div>

          <div>
            <h3 className="text-[14px] font-semibold">{copy.contact}</h3>
            <div className="mt-4 space-y-3 text-[13px] text-white/72">
              <p className="flex items-center gap-2"><Phone className="h-4 w-4" /> 705-796-4276</p>
              <p className="flex items-center gap-2"><Mail className="h-4 w-4" /> info@brightpatheducation.ca</p>
            </div>
          </div>

          <div>
            <h3 className="text-[14px] font-semibold">Newsletter</h3>
            <p className="mt-4 text-[13px] leading-6 text-white/72">{copy.subscribe}</p>
            <div className="mt-4 flex gap-2">
              <input className="h-10 flex-1 rounded-md border border-white/15 bg-white px-3 text-[#12316d] outline-none placeholder:text-slate-400" placeholder={copy.email} />
            </div>
            <button className="mt-3 cursor-pointer rounded-md bg-[#2058c8] px-4 py-2.5 text-[13px] font-semibold text-white">
              {copy.subscribeButton}
            </button>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-5 text-[12px] text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>{copy.copyright}</p>
          <div className="flex gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Use</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
