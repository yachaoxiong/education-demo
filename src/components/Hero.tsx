"use client";

import Image from "next/image";
import { Award, BookOpenCheck, GraduationCap } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { getCopy } from "@/components/siteCopy";

export default function Hero() {
  const { language } = useLanguage();
  const copy = getCopy(language).hero;
  const trustIcons = [Award, BookOpenCheck, GraduationCap];

  return (
    <section id="top" className="relative overflow-hidden bg-transparent">
      <div className="absolute inset-0">
        <Image
          src="/banner1.png"
          alt="Students studying together"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="relative container-site">
        <div className="grid min-h-[650px] items-center py-10 lg:min-h-[700px] lg:grid-cols-[0.92fr_1.08fr] lg:py-12">
          <div className="max-w-[560px] pt-6 lg:pt-0">
            <div className="inline-flex rounded-full bg-[#eef4ff] px-3 py-1 text-[12px] font-medium text-[#3c63ab]">
              {copy.badge}
            </div>

            <h1 className="mt-6 font-serif text-[34px] font-semibold leading-[1.02] tracking-[-0.04em] text-[#1b2b55] sm:text-[44px] lg:text-[52px]">
              {copy.title1}
              <span className="block">{copy.title2}</span>
            </h1>

            <p className="mt-5 max-w-[470px] text-[15px] leading-7 text-slate-600">
              {copy.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#booking" className="inline-flex h-11 items-center justify-center rounded-md bg-[#2058c8] px-6 text-[14px] font-semibold text-white shadow-sm hover:bg-[#194db5]">
                {copy.primary}
              </a>
              <a href="#programs" className="inline-flex h-11 items-center justify-center rounded-md border border-slate-300 bg-white px-6 text-[14px] font-semibold text-[#243a6b] hover:bg-slate-50">
                {copy.secondary}
              </a>
            </div>

            <div className="mt-12 grid max-w-[520px] gap-4 sm:grid-cols-3">
              {copy.trust.map((item, index) => {
                const Icon = trustIcons[index];
                return (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full border border-[#d7e1f4] text-[#2b5db6]">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-[13px] font-semibold text-[#1e2d54]">{item.title}</p>
                      <p className="mt-1 text-[12px] leading-5 text-slate-500">{item.subtitle}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
