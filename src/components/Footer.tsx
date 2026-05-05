"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import { getCopy } from "@/components/siteCopy";

export default function Footer() {
  const { language } = useLanguage();
  const copy = getCopy(language).footer;

  return (
    <footer id="contact" className="bg-[#132e63] text-white">
      <div className="container-site py-10 lg:py-12">
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
              <li><Link href="/#top">About Us</Link></li>
              <li><Link href="/#programs">Programs</Link></li>
              <li><Link href="/booking">Booking</Link></li>
              <li><Link href="/booking">Contact</Link></li>
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
              <p className="flex items-center gap-2"><Phone className="h-4 w-4" /> (413) 333-4607</p>
              <p className="flex items-center gap-2"><Mail className="h-4 w-4" /> info@brightpatheducation.ca</p>
              <p className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4" /> 123 Education Way, Toronto, ON M3M 1M1</p>
            </div>
          </div>

          <div>
            <h3 className="text-[14px] font-semibold">Newsletter</h3>
            <p className="mt-4 text-[13px] leading-6 text-white/72">{copy.subscribe}</p>
            <div className="mt-4 flex gap-2">
              <input className="h-10 flex-1 rounded-md border border-white/15 bg-white px-3 text-[#12316d] outline-none placeholder:text-slate-400" placeholder={copy.email} />
            </div>
            <button className="mt-3 rounded-md bg-[#2058c8] px-4 py-2.5 text-[13px] font-semibold text-white">
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
