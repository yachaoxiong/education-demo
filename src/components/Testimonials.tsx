"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { getCopy } from "@/components/siteCopy";

const testimonials = [
  { name: "Jessica M.", role: { en: "Parent", zh: "家长" }, quote: { en: "The teachers are amazing. My son's math improved so much and now he actually enjoys learning.", zh: "老师们非常棒，我孩子的数学进步很大，现在他真的喜欢学习了。" } },
  { name: "Ethan L.", role: { en: "High School Student", zh: "高中学生" }, quote: { en: "The personalized feedback and support helped me gain confidence and achieve top grades.", zh: "个性化反馈和支持帮助我建立了信心并取得了优秀成绩。" } },
  { name: "David K.", role: { en: "Parent", zh: "家长" }, quote: { en: "Professional, caring and effective. Highly recommend BrightPath Education.", zh: "专业、贴心且高效，非常推荐 BrightPath Education。" } },
  { name: "Sophia T.", role: { en: "Parent", zh: "家长" }, quote: { en: "We love the structured lessons and the friendly communication. It feels like a true partner in our child's progress.", zh: "我们很喜欢系统化的课程和友好的沟通方式，它让我们感觉像是孩子成长路上的真正伙伴。" } },
];

const VISIBLE_COUNT = 3;
const autoplayMs = 3500;
const loopedTestimonials = [...testimonials, ...testimonials, ...testimonials];
const middleStart = testimonials.length;

export default function Testimonials() {
  const { language } = useLanguage();
  const copy = getCopy(language).testimonials;
  const trackRef = useRef<HTMLDivElement | null>(null);
  const timerRef = useRef<number | null>(null);
  const dragState = useRef({
    isDown: false,
    startX: 0,
  });
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentOffset, setCurrentOffset] = useState(middleStart);
  const [isDragging, setIsDragging] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const total = testimonials.length;
  const normalizedIndex = ((currentOffset - middleStart) % total + total) % total;

  const scrollToIndex = (index: number, smooth = true) => {
    const track = trackRef.current;
    if (!track) return;
  
    const items = Array.from(track.children) as HTMLElement[];
    const target = items[index];
  
    if (!target) return;
  
    track.scrollTo({
      left: target.offsetLeft,
      behavior: smooth ? "smooth" : "auto",
    });
  
    setCurrentOffset(index);
  
    setActiveIndex(
      ((index - middleStart) % total + total) % total
    );
  };

  const goTo = (index: number) => scrollToIndex(middleStart + ((index % total) + total) % total);
  const moveBy = (delta: number) => scrollToIndex(currentOffset + delta);

  useEffect(() => {
    scrollToIndex(currentOffset, false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

  useEffect(() => {
    if (timerRef.current) window.clearInterval(timerRef.current);
    timerRef.current = window.setInterval(() => {
      if (!isDragging) moveBy(1);
    }, autoplayMs);
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentOffset, isDragging]);

  const dots = useMemo(() => Array.from({ length: total }), [total]);

  return (
    <section id="testimonials" className="bg-white py-14 lg:py-16">
      <div className="container-site">
        <div className="text-center">
          <h2 className="animate__animated animate__fadeInUp font-serif text-[24px] font-semibold tracking-[-0.03em] text-[#1d2d55] sm:text-[28px]">{copy.title}</h2>
          <div className="mx-auto mt-2 h-0.5 w-10 bg-[#274fbb]" />
        </div>

        <div className="relative mt-8 overflow-hidden">
          <div
            ref={trackRef}
            className={`flex gap-4 select-none ${isDragging ? "cursor-grabbing" : "cursor-grab"} ${isTransitioning ? "transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]" : "transition-none"}`}
            style={{
              cursor: isDragging ? "grabbing" : "grab",
              transform: `translateX(calc(-${currentOffset} * (100% / ${VISIBLE_COUNT}) - ${currentOffset} * 1rem))`,
            }}
            onTransitionEnd={() => {
              if (currentOffset >= testimonials.length * 2) {
                setIsTransitioning(false);
                const next = currentOffset - testimonials.length;
                setCurrentOffset(next);
                setActiveIndex(((next - middleStart) % total + total) % total);
                requestAnimationFrame(() => setIsTransitioning(true));
              }
              if (currentOffset < testimonials.length) {
                setIsTransitioning(false);
                const next = currentOffset + testimonials.length;
                setCurrentOffset(next);
                setActiveIndex(((next - middleStart) % total + total) % total);
                requestAnimationFrame(() => setIsTransitioning(true));
              }
            }}
            onPointerDown={(event) => {
              dragState.current = {
                isDown: true,
                startX: event.clientX,
              };
              setIsDragging(true);
            }}
            onPointerMove={(event) => {
              if (!dragState.current.isDown) return;
              const delta = event.clientX - dragState.current.startX;
              if (Math.abs(delta) < 24) return;
              setIsTransitioning(false);
              moveBy(delta < 0 ? 1 : -1);
              dragState.current.startX = event.clientX;
            }}
            onPointerUp={() => {
              dragState.current.isDown = false;
              setIsDragging(false);
              setIsTransitioning(true);
            }}
            onPointerCancel={() => {
              dragState.current.isDown = false;
              setIsDragging(false);
              setIsTransitioning(true);
            }}
          >
            {loopedTestimonials.map((item, index) => (
              <article
                key={`${item.name}-${index}`}
                className="min-w-0 shrink-0 basis-full md:basis-1/2 lg:basis-1/3"
              >
                <div className={`h-full rounded-[6px] border border-slate-100 bg-white p-5 shadow-[0_0_0_1px_rgba(30,60,120,0.03)] ${index === currentOffset ? "scale-[1.02] shadow-[0_12px_30px_rgba(39,79,187,0.12)]" : "scale-100"} transition-all duration-700 hover:-translate-y-1 hover:shadow-[0_16px_35px_rgba(39,79,187,0.14)]`}>
                  <div className="flex gap-1 text-[#f2b632]">
                    {Array.from({ length: 5 }).map((_, starIndex) => <Star key={starIndex} className="h-4 w-4 fill-current" />)}
                  </div>
                  <div className="mt-4 flex gap-2">
                    <Quote className="h-4 w-4 shrink-0 text-slate-300" />
                    <p className="text-[13px] leading-6 text-slate-600">{item.quote[language]}</p>
                  </div>
                  <div className="mt-5 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-200 text-[12px] font-semibold text-slate-700">
                      {item.name.split(" ").map((part) => part[0]).join("")}
                    </div>
                    <div>
                      <p className="text-[14px] font-semibold text-[#1d2d55]">{item.name}</p>
                      <p className="text-[12px] text-slate-500">{item.role[language]}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => moveBy(-1)}
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-all duration-300 hover:-translate-y-0.5 hover:scale-110 hover:border-[#274fbb] hover:text-[#274fbb] active:scale-95"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <div className="flex items-center gap-2">
            {dots.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => goTo(index)}
                aria-label={`Go to testimonial ${index + 1}`}
                className={`h-2.5 cursor-pointer rounded-full transition-all ${index === normalizedIndex ? "w-8 bg-[#274fbb]" : "w-2.5 bg-slate-300 hover:bg-slate-400"}`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => moveBy(1)}
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-all duration-300 hover:-translate-y-0.5 hover:scale-110 hover:border-[#274fbb] hover:text-[#274fbb] active:scale-95"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
