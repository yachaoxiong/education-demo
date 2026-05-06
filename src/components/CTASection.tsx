"use client";

import { ArrowRight, CalendarDays } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { getCopy } from "@/components/siteCopy";

export default function CTASection() {
  const { language } = useLanguage();
  const copy = getCopy(language).cta;

  return (
    <section className="py-4">
      <div className="container-site">
        <div className="animate__animated animate__zoomIn rounded-[8px] bg-[linear-gradient(90deg,#1949bd_0%,#1d62d3_55%,#2f7ee8_100%)] px-6 py-6 text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-[0_28px_70px_rgba(16,24,40,0.18)] active:scale-[0.99] lg:px-8">
          <div className="grid items-center gap-6 lg:grid-cols-[auto_1fr_auto]">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#143d9a] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
              <CalendarDays className="h-8 w-8" />
            </div>
            <div>
              <h3 className="font-serif text-[24px] font-semibold tracking-[-0.03em]">{copy.title}</h3>
              <p className="mt-2 max-w-[520px] text-[14px] leading-6 text-white/88">{copy.description}</p>
            </div>
            <a className="inline-flex h-11 cursor-pointer items-center justify-center rounded-md bg-white px-5 text-[14px] font-semibold text-[#1949bd] transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:bg-slate-50 hover:shadow-lg active:scale-[0.98]">
              {copy.button}
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
