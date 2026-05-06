"use client";

import { Award, BookOpenCheck, GraduationCap } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import { getCopy } from "@/components/siteCopy";

export default function Hero() {
  const { language } = useLanguage();
  const copy = getCopy(language).hero;
  const trustIcons = [Award, BookOpenCheck, GraduationCap];

  return (
    <section id="top" className="relative isolate overflow-hidden bg-transparent">
      <div className="absolute inset-0 -z-10">
        <video
          className="h-full w-full object-cover object-center"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        >
          <source src="/tu.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="relative container-site">
        <div className="grid min-h-[calc(100svh-76px)] items-center py-10 lg:min-h-[calc(100svh-600px)] lg:grid-cols-[0.92fr_1.08fr] lg:py-12">
          <div className="max-w-[560px] pt-6 lg:pt-0">
            <div className="animate__animated animate__fadeInDown animate__faster inline-flex rounded-full bg-[#eef4ff]/95 px-3 py-1 text-[12px] font-medium text-[#3c63ab] backdrop-blur-sm transition-transform duration-300 hover:-translate-y-0.5 hover:scale-[1.03] active:scale-[0.98]">
              {copy.badge}
            </div>

            <h1 className="animate__animated animate__fadeInUp animate__delay-1s mt-6 font-serif text-[34px] font-semibold leading-[1.02] tracking-[-0.04em] text-[#1b2b55] sm:text-[44px] lg:text-[52px]">
              {copy.title1}
              <span className="block">{copy.title2}</span>
            </h1>

            <p className="animate__animated animate__fadeInUp animate__delay-1s mt-5 max-w-[470px] text-[15px] leading-7 text-slate-600">
              {copy.description}
            </p>

            <div className="animate__animated animate__fadeInUp animate__delay-1s mt-8 flex flex-wrap gap-3">
              <Link href="/booking" className="inline-flex h-11 cursor-pointer items-center justify-center rounded-md bg-[#2058c8] px-6 text-[14px] font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:bg-[#194db5] hover:shadow-[0_14px_30px_rgba(25,77,181,0.25)] active:scale-[0.98]">
                {copy.primary}
              </Link>
              <Link href="#programs" className="inline-flex h-11 cursor-pointer items-center justify-center rounded-md border border-slate-300 bg-white px-6 text-[14px] font-semibold text-[#243a6b] transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:bg-slate-50 hover:shadow-[0_10px_20px_rgba(15,23,42,0.08)] active:scale-[0.98]">
                {copy.secondary}
              </Link>
            </div>

            {/* <div className="mt-12 grid max-w-[520px] gap-4 sm:grid-cols-3">
              {copy.trust.map((item, index) => {
                const Icon = trustIcons[index];
                return (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full border border-[#d7e1f4] bg-white/80 text-[#2b5db6] backdrop-blur-sm">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-[13px] font-semibold text-[#1e2d54]">{item.title}</p>
                      <p className="mt-1 text-[12px] leading-5 text-slate-500">{item.subtitle}</p>
                    </div>
                  </div>
                );
              })}
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
