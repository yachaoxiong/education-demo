"use client";

import { CalendarDays, Clock3, Mail, Send, Sparkles, User, Phone } from "lucide-react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/components/LanguageProvider";
import { getCopy } from "@/components/siteCopy";

export default function BookingPage() {
  const { language } = useLanguage();
  const copy = getCopy(language).booking;

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="relative h-[420px] w-full overflow-hidden bg-slate-950 lg:h-[480px]">
          <Image
            src="/bookingBg.png"
            alt="Booking consultation banner"
            fill
            priority
            className="object-cover object-center bg-white"
            sizes="100vw"
          />
        </section>

      <section className="bg-white">
        <div className="container-site -mt-16 pb-12 pt-8 lg:-mt-20 lg:pb-16 lg:pt-10">
          <div className="mx-auto w-full max-w-5xl">
            <div className="relative z-10 rounded-[32px] border border-slate-200 bg-white p-6 shadow-soft sm:p-8 lg:p-10">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-navy-50 px-4 py-2 text-sm font-semibold text-navy-700">
                    <Sparkles className="h-4 w-4" />
                    {copy.formTitle}
                  </div>
                  <h2 className="mt-4 text-[28px] font-semibold tracking-tight text-navy-900 sm:text-[34px]">
                    {copy.title}
                  </h2>
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
                    {copy.formDescription}
                  </p>
                </div>
              </div>

              <form className="mt-8 space-y-6">
                <div className="grid gap-5 md:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700"><User className="h-4 w-4 text-navy-600" /> {copy.fields.parentName}</span>
                    <input className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition placeholder:text-slate-400 focus:border-navy-400 focus:bg-white focus:ring-4 focus:ring-navy-100" placeholder={copy.placeholders.parentName} />
                  </label>
                  <label className="block">
                    <span className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700"><User className="h-4 w-4 text-navy-600" /> {copy.fields.studentName}</span>
                    <input className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition placeholder:text-slate-400 focus:border-navy-400 focus:bg-white focus:ring-4 focus:ring-navy-100" placeholder={copy.placeholders.studentName} />
                  </label>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700"><Mail className="h-4 w-4 text-navy-600" /> {copy.fields.email}</span>
                    <input className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition placeholder:text-slate-400 focus:border-navy-400 focus:bg-white focus:ring-4 focus:ring-navy-100" placeholder={copy.placeholders.email} />
                  </label>
                  <label className="block">
                    <span className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700"><Phone className="h-4 w-4 text-navy-600" /> {copy.fields.phone}</span>
                    <input className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition placeholder:text-slate-400 focus:border-navy-400 focus:bg-white focus:ring-4 focus:ring-navy-100" placeholder={copy.placeholders.phone} />
                  </label>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700"><CalendarDays className="h-4 w-4 text-navy-600" /> {copy.fields.gradeLevel}</span>
                    <input className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition placeholder:text-slate-400 focus:border-navy-400 focus:bg-white focus:ring-4 focus:ring-navy-100" placeholder={copy.placeholders.gradeLevel} />
                  </label>
                  <label className="block">
                    <span className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700"><Clock3 className="h-4 w-4 text-navy-600" /> {copy.fields.preferredDate}</span>
                    <input className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition placeholder:text-slate-400 focus:border-navy-400 focus:bg-white focus:ring-4 focus:ring-navy-100" placeholder={copy.placeholders.preferredDate} />
                  </label>
                </div>

                <label className="block">
                  <span className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700"><Sparkles className="h-4 w-4 text-navy-600" /> {copy.fields.moreInfo}</span>
                  <textarea
                    rows={6}
                    className="w-full rounded-[22px] border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition placeholder:text-slate-400 focus:border-navy-400 focus:bg-white focus:ring-4 focus:ring-navy-100"
                    placeholder={copy.placeholders.moreInfo}
                  />
                </label>

                <div className="flex flex-col gap-4 rounded-[24px] border border-slate-200 bg-gradient-to-r from-navy-50 to-slate-50 p-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-800">{copy.readyTitle}</p>
                    <p className="mt-1 text-sm text-slate-500">
                      {copy.readyDescription}
                    </p>
                  </div>
                  <button
                    type="submit"
                    className="inline-flex h-12 cursor-pointer items-center justify-center rounded-full border border-[#1847a8] bg-[#1f56c7] px-8 text-[15px] font-semibold text-white shadow-[0_16px_40px_rgba(31,86,199,0.32)] transition hover:bg-[#1847a8] hover:shadow-[0_18px_48px_rgba(31,86,199,0.38)] focus:outline-none focus:ring-4 focus:ring-[#dceaff]"
                  >
                    {copy.submit}
                    <Send className="ml-2 h-4 w-4 text-white" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
