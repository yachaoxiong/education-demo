"use client";

import { Award, GraduationCap, Star, University } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { getCopy } from "@/components/siteCopy";

const icons = [Award, GraduationCap, Star, University];

export default function Stats() {
  const { language } = useLanguage();
  const stats = getCopy(language).stats;

  return (
    <section className="pb-10 pt-6">
      <div className="container-site">
        <div className="grid gap-6 border-t border-slate-100 pt-8 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = icons[index];
            return (
              <div key={stat.title} className="flex items-center gap-3 text-center sm:text-left">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#dfe7f4] text-[#2b5db6]">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[16px] font-semibold text-[#1d2d55]">{stat.value}</p>
                  <p className="text-[13px] text-slate-600">{stat.title}</p>
                  <p className="text-[11px] text-slate-500">{stat.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
