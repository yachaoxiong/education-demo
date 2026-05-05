"use client";

import { ArrowRight, Brain, Compass, FileCheck2, ShieldCheck, Target } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { getCopy } from "@/components/siteCopy";

const items = [
  {
    icon: Brain,
    title: "Experienced Teachers",
    subtitle: "经验丰富的教师",
    description: "Our teachers are passionate educators with proven teaching experience.",
    accent: "from-[#2b5fb8] to-[#4f8dff]",
  },
  {
    icon: Target,
    title: "Personalized Approach",
    subtitle: "个性化方案",
    description: "We tailor learning plans to each student's strengths and goals.",
    accent: "from-[#9f63ff] to-[#6c8cff]",
  },
  {
    icon: Compass,
    title: "Proven Results",
    subtitle: "成果可靠",
    description: "Students achieve higher grades and get into top universities.",
    accent: "from-[#14b8a6] to-[#4ade80]",
  },
  {
    icon: ShieldCheck,
    title: "Supportive Environment",
    subtitle: "支持性环境",
    description: "Small class sizes and caring support help students thrive.",
    accent: "from-[#f59e0b] to-[#fb7185]",
  },
  {
    icon: FileCheck2,
    title: "Comprehensive Programs",
    subtitle: "全面课程体系",
    description: "A wide range of programs from academics to test prep.",
    accent: "from-[#0f766e] to-[#2563eb]",
  },
];

export default function WhyChooseUs() {
  const { language } = useLanguage();
  const copy = getCopy(language).why;

  return (
    <section className="overflow-hidden bg-[#f7f9ff] py-16 lg:py-20">
      <div className="container-site">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-[#dbe7ff] bg-[#f7f9ff] px-4 py-1 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#2b5fb8] shadow-[0_10px_30px_rgba(43,95,184,0.06)]">
            Why families trust us
          </span>
          <h2 className="mt-4 font-serif text-[28px] font-semibold tracking-[-0.04em] text-[#1d2d55] sm:text-[34px] lg:text-[40px]">
            {copy.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[14px] leading-7 text-slate-600 sm:text-[15px]">
            A more focused, more supportive learning experience designed to help every student build confidence and achieve measurable progress.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="group relative overflow-hidden rounded-[24px] border border-white/70 bg-white p-5 shadow-[0_18px_50px_rgba(16,24,40,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(16,24,40,0.14)]"
              >
                <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${item.accent}`} />
                <div className="flex items-start justify-between gap-3">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${item.accent} text-white shadow-lg shadow-slate-200/70`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-[12px] font-semibold text-slate-300">0{index + 1}</span>
                </div>

                <h3 className="mt-5 text-[16px] font-semibold text-[#16254a]">{item.title}</h3>
                <p className="mt-1 text-[12px] font-medium text-[#6b7a99]">{item.subtitle}</p>
                <p className="mt-3 text-[13px] leading-6 text-slate-600">{item.description}</p>

                <div className="mt-5 flex items-center gap-2 text-[12px] font-semibold text-[#2b5fb8] opacity-80 transition group-hover:opacity-100">
                  <span>Learn more</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
