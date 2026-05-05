"use client";

import {
  ArrowRight,
  BadgeCheck,
  BookMarked,
  ChevronRight,
  GraduationCap,
  Languages,
  Rocket,
  School2,
  Sparkles,
  Star,
  Target,
  Trophy,
} from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { getCopy } from "@/components/siteCopy";

const programs = [
  {
    icon: School2,
    highlight: "from-sky-500/10 via-sky-500/5 to-white",
    ring: "group-hover:ring-sky-200",
    badge: "bg-sky-100 text-sky-700",
    title: { en: "Elementary", zh: "小学" },
    subtitle: { en: "SK - Grade 6", zh: "SK - 6年级" },
    bullets: { en: ["Reading foundations", "Core math skills"], zh: ["阅读基础", "核心数学能力"] },
    description: { en: "Build strong foundations in reading, writing, and math.", zh: "打牢阅读、写作与数学基础。" },
    meta: { icon: Target, en: "Foundational learning", zh: "夯实基础" },
  },
  {
    icon: GraduationCap,
    highlight: "from-indigo-500/10 via-indigo-500/5 to-white",
    ring: "group-hover:ring-indigo-200",
    badge: "bg-indigo-100 text-indigo-700",
    title: { en: "High School", zh: "高中" },
    subtitle: { en: "Grade 7 - 12", zh: "7 - 12年级" },
    bullets: { en: ["Homework support", "Exam prep"], zh: ["作业辅导", "考试备考"] },
    description: { en: "Support for homework, grades, and exam prep.", zh: "支持作业、成绩与考试备考。" },
    meta: { icon: Rocket, en: "Academic boost", zh: "学业提升" },
  },
  {
    icon: Sparkles,
    highlight: "from-amber-500/10 via-amber-500/5 to-white",
    ring: "group-hover:ring-amber-200",
    badge: "bg-amber-100 text-amber-700",
    title: { en: "Contests", zh: "竞赛" },
    subtitle: { en: "Problem solving", zh: "解题提升" },
    bullets: { en: ["Strategy training", "Challenge practice"], zh: ["策略训练", "挑战练习"] },
    description: { en: "Prepare for math, science, and writing contests.", zh: "准备数学、科学与写作竞赛。" },
    meta: { icon: Trophy, en: "Competition ready", zh: "竞赛冲刺" },
  },
  {
    icon: Languages,
    highlight: "from-emerald-500/10 via-emerald-500/5 to-white",
    ring: "group-hover:ring-emerald-200",
    badge: "bg-emerald-100 text-emerald-700",
    title: { en: "Language", zh: "语言" },
    subtitle: { en: "English & Mandarin", zh: "英语与中文" },
    bullets: { en: ["Speaking confidence", "Writing fluency"], zh: ["口语自信", "写作流畅"] },
    description: { en: "Improve speaking, reading, and writing skills.", zh: "提升听说读写能力。" },
    meta: { icon: Star, en: "Communication growth", zh: "沟通成长" },
  },
  {
    icon: BookMarked,
    highlight: "from-violet-500/10 via-violet-500/5 to-white",
    ring: "group-hover:ring-violet-200",
    badge: "bg-violet-100 text-violet-700",
    title: { en: "Admissions Consulting", zh: "升学咨询" },
    subtitle: { en: "Planning & applications", zh: "规划与申请" },
    bullets: { en: ["Personalized roadmap", "Application guidance"], zh: ["个性化规划", "申请指导"] },
    description: { en: "Personalized advice for planning and applications.", zh: "为规划与申请提供个性化建议。" },
    meta: { icon: ChevronRight, en: "Next-step strategy", zh: "下一步规划" },
  },
];

export default function Programs() {
  const { language } = useLanguage();
  const copy = getCopy(language).programs;

  return (
    <section id="programs" className="bg-white py-14 lg:py-16">
      <div className="container-site">
        <div className="text-center">
          <h2 className="font-serif text-[24px] font-semibold tracking-[-0.03em] text-[#1d2d55] sm:text-[28px]">{copy.title}</h2>
          <div className="mx-auto mt-2 h-0.5 w-10 bg-[#274fbb]" />
        </div>

        <div className="mt-9 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {programs.map((program, index) => {
            const Icon = program.icon;
            const MetaIcon = program.meta.icon;
            return (
              <article
                key={program.title.en}
                className={`group relative overflow-hidden rounded-[20px] border border-slate-100 bg-gradient-to-b ${program.highlight} px-5 py-8 text-left shadow-[0_10px_30px_rgba(20,40,90,0.06)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_18px_45px_rgba(20,40,90,0.12)] ${program.ring}`}
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#274fbb]/10 blur-2xl" />
                  <div className="absolute bottom-0 left-0 h-20 w-20 rounded-full bg-white/70 blur-2xl" />
                </div>

                <div className="flex items-start justify-between gap-3">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${program.badge} shadow-sm ring-1 ring-white/70 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <ChevronRight className="mt-1 h-4 w-4 text-slate-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#274fbb]" />
                </div>

                <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-[11px] font-semibold text-slate-500 shadow-sm backdrop-blur-sm transition-transform duration-300 group-hover:-translate-y-0.5">
                  <MetaIcon className="h-3.5 w-3.5 text-[#2c61bd]" />
                  {program.meta[language]}
                </div>

                <h3 className="mt-4 text-[17px] font-semibold tracking-[-0.02em] text-[#1f2f58]">{program.title[language]}</h3>
                <p className="mt-1 text-[12px] font-medium uppercase tracking-[0.16em] text-slate-500">{program.subtitle[language]}</p>

                <p className="mt-4 text-[13px] leading-6 text-slate-600">{program.description[language]}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {program.bullets[language].map((bullet) => (
                    <span
                      key={bullet}
                      className="inline-flex items-center gap-1 rounded-full border border-white/70 bg-white/80 px-3 py-1 text-[11px] font-medium text-slate-600 backdrop-blur-sm transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-sm"
                    >
                      <BadgeCheck className="h-3.5 w-3.5 text-[#2c61bd]" />
                      {bullet}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex items-center gap-2 text-[13px] font-semibold text-[#2740a1] transition-transform duration-300 group-hover:translate-x-0.5">
                  <Star className="h-4 w-4 fill-current" />
                  <span>{language === "zh" ? "了解更多" : "Learn more"}</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-7 text-center">
          <a
            href="#contact"
            className="inline-flex items-center rounded-full border border-[#cfd8ea] bg-white px-6 py-2.5 text-[13px] font-semibold text-[#2740a1] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-50 hover:shadow-md"
          >
            {copy.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
