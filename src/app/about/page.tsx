"use client";

import { Award, CalendarDays, GraduationCap, HeartHandshake, Landmark, Sparkles, Users2 } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useLanguage } from "@/components/LanguageProvider";

const overviewIcons = [Users2, Landmark, GraduationCap];
const valueIcons = [HeartHandshake, Users2, Sparkles, Award];
const timelineIcons = [Sparkles, GraduationCap, HeartHandshake, CalendarDays];

const aboutCopy = {
  en: {
    eyebrow: "About BrightPath",
    title: "About Us",
    intro:
      "BrightPath Education helps students grow through personalized support, thoughtful teaching, and a clear path toward academic confidence.",
    overview: [
      {
        title: "Team introduction",
        description:
          "Our team includes experienced educators, academic advisors, and caring mentors who work closely with each student and family.",
      },
      {
        title: "School / institution history",
        description:
          "BrightPath was created to provide a more personal and effective learning experience for families seeking real academic growth.",
      },
      {
        title: "Teaching philosophy",
        description:
          "We believe strong results come from clear goals, consistent support, and teaching that adapts to each learner’s needs.",
      },
    ],
    missionTitle: "Our mission",
    missionText:
      "To help every student learn with clarity and confidence, while building the habits and skills they need for long-term success.",
    valuesTitle: "What we value",
    values: [
      "Clear communication with families",
      "Small-group and one-on-one support",
      "Practical study strategies that stick",
      "A caring environment that builds confidence",
    ],
    timelineTitle: "Timeline & milestones",
    timeline: [
      {
        year: "2016",
        title: "Founded with a student-first approach",
        description: "BrightPath begins with a commitment to personalized learning and family partnership.",
      },
      {
        year: "2019",
        title: "Expanded academic support programs",
        description: "We add broader tutoring support, subject coaching, and consultation services.",
      },
      {
        year: "2022",
        title: "Built a stronger bilingual learning community",
        description: "We improve our bilingual communication and expand support for more families.",
      },
      {
        year: "2026",
        title: "Continuing to grow with modern learning needs",
        description: "We keep refining our programs to support students in today’s academic landscape.",
      },
    ],
  },
  zh: {
    eyebrow: "关于 BrightPath",
    title: "关于我们",
    intro:
      "BrightPath Education 通过个性化支持、认真负责的教学与清晰的成长路径，帮助学生建立学业自信。",
    overview: [
      {
        title: "团队介绍",
        description:
          "我们的团队由经验丰富的教师、学业顾问和关怀学生的导师组成，紧密陪伴每一位学生与家庭。",
      },
      {
        title: "学校 / 机构历史",
        description:
          "BrightPath 的创立初衷，是为家庭提供更具个性化、更有效的学习体验，并带来真实可见的学业成长。",
      },
      {
        title: "教学理念",
        description:
          "我们相信，明确目标、持续支持与因材施教，是取得良好成果的关键。",
      },
    ],
    missionTitle: "我们的使命",
    missionText:
      "帮助每一位学生在清晰与自信中学习，同时建立长期成功所需的习惯与能力。",
    valuesTitle: "我们的价值观",
    values: [
      "与家庭保持清晰沟通",
      "小班与一对一支持",
      "可持续、实用的学习策略",
      "温暖且能建立自信的环境",
    ],
    timelineTitle: "时间线 / 里程碑",
    timeline: [
      {
        year: "2016",
        title: "以学生为中心正式创立",
        description: "BrightPath 以个性化学习与家庭协作为核心正式起步。",
      },
      {
        year: "2019",
        title: "拓展学业支持项目",
        description: "增加更多辅导、学科支持与咨询服务。",
      },
      {
        year: "2022",
        title: "建立更强的双语学习社区",
        description: "提升双语沟通能力，并为更多家庭提供支持。",
      },
      {
        year: "2026",
        title: "持续适应现代学习需求",
        description: "持续优化课程体系，帮助学生应对当下的学习环境。",
      },
    ],
  },
} as const;

export default function AboutPage() {
  const { language } = useLanguage();
  const copy = aboutCopy[language];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="bg-[linear-gradient(180deg,#f7faff_0%,#ffffff_100%)] py-20 lg:py-28">
        <div className="container-site">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#2058c8]">
              {copy.eyebrow}
            </p>
            <h1 className="mt-4 font-serif text-[38px] font-semibold tracking-[-0.04em] text-[#1b2b55] sm:text-[48px] lg:text-[58px]">
              {copy.title}
            </h1>
            <p className="mt-5 text-[16px] leading-8 text-slate-600 sm:text-[18px]">
              {copy.intro}
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {copy.overview.map((item, index) => {
              const Icon = overviewIcons[index];
              return (
                <article
                  key={item.title}
                  className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-[0_12px_40px_rgba(18,49,109,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_48px_rgba(18,49,109,0.10)]"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eef4ff] text-[#2058c8]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="text-xl font-semibold text-[#173061]">{item.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                </article>
              );
            })}
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-[32px] bg-[linear-gradient(135deg,#12316d_0%,#1c4aa5_100%)] p-8 text-white shadow-[0_20px_60px_rgba(18,49,109,0.18)] lg:p-12">
              <div className="flex items-center gap-3 text-white/80">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/15 bg-white/10">
                  <GraduationCap className="h-5 w-5" />
                </span>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/75">
                  {copy.missionTitle}
                </p>
              </div>
              <h2 className="mt-5 text-[28px] font-semibold tracking-tight sm:text-[34px]">
                {copy.missionText}
              </h2>
              <p className="mt-4 max-w-2xl text-[15px] leading-7 text-white/78">
                We combine strong academics with a warm, family-centered approach so students feel supported at every step of their learning journey.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  { label: language === "zh" ? "学生成长" : "Student growth", value: "01" },
                  { label: language === "zh" ? "家庭协作" : "Family partnership", value: "02" },
                  { label: language === "zh" ? "长期成果" : "Long-term outcomes", value: "03" },
                ].map((item) => (
                  <div key={item.label} className="rounded-2xl border border-white/10 bg-white/10 p-4">
                    <p className="text-2xl font-semibold">{item.value}</p>
                    <p className="mt-2 text-sm text-white/72">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_12px_40px_rgba(18,49,109,0.06)] lg:p-10">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#eef4ff] text-[#2058c8]">
                  <Award className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-semibold text-[#173061]">{copy.valuesTitle}</h3>
              </div>
              <ul className="mt-5 space-y-4 text-sm leading-6 text-slate-600">
                {copy.values.map((item, index) => {
                  const Icon = valueIcons[index];
                  return (
                    <li key={item} className="flex items-start gap-3 rounded-2xl bg-slate-50 px-4 py-3">
                      <span className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-xl bg-white text-[#2058c8] shadow-sm">
                        <Icon className="h-4 w-4" />
                      </span>
                      <span>{item}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <div className="mt-14 rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_12px_40px_rgba(18,49,109,0.06)] lg:p-10">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#eef4ff] text-[#2058c8]">
                <CalendarDays className="h-5 w-5" />
              </span>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#2058c8]">
                {copy.timelineTitle}
              </p>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {copy.timeline.map((item, index) => {
                const Icon = timelineIcons[index];
                return (
                  <article
                    key={item.year}
                    className="rounded-[24px] border border-slate-100 bg-slate-50 p-6 transition duration-300 hover:border-[#c9daf8] hover:bg-white"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <p className="text-sm font-semibold text-[#2058c8]">{item.year}</p>
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#2058c8] shadow-sm">
                        <Icon className="h-4 w-4" />
                      </span>
                    </div>
                    <h3 className="mt-3 text-lg font-semibold text-[#173061]">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
