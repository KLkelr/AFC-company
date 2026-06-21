"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [lang, setLang] = useState<"en" | "ar">("en");

  const t = {
    en: {
      home: "Home",
      about: "About",
      services: "Services",
      projects: "Projects",
      contact: "Contact",

      learnMore: "Learn More →",
      viewServices: "View All Services →",
      viewProjects: "View All Projects →",
      contactTeam: "Contact Our Team →",

      aboutTitle: "About Us",
      servicesTitle: "Our Services",
      projectsTitle: "Recent Projects",

      ctaTitle: "Ready To Work With Us?",

      heroTitle: "Advanced Future for Business and Construction SPC",
      heroDesc:
        "Building the Future with Excellence, Innovation and Professional Solutions.",

      aboutText:
        "Advanced Future for Business and Construction SPC is a forward-thinking company specializing in construction, infrastructure development and information technology solutions.",

      vision: "Vision",
      mission: "Mission",

      visionText:
        "To become a leading company in construction, infrastructure and information technology.",
      missionText:
        "Delivering reliable services through innovation, quality and operational excellence.",

      ctaDesc:
        "Contact our team today and start your next successful project.",
    },

    ar: {
      home: "الرئيسية",
      about: "من نحن",
      services: "الخدمات",
      projects: "المشاريع",
      contact: "تواصل معنا",

      learnMore: "اقرأ المزيد ←",
      viewServices: "عرض كل الخدمات ←",
      viewProjects: "عرض كل المشاريع ←",
      contactTeam: "تواصل مع فريقنا ←",

      aboutTitle: "من نحن",
      servicesTitle: "خدماتنا",
      projectsTitle: "أحدث المشاريع",

      ctaTitle: "هل أنت مستعد للعمل معنا؟",

      heroTitle: "المستقبل المتقدم للأعمال والإنشاءات ش.م.م",
      heroDesc: "نبني المستقبل بالتميز والابتكار والحلول الاحترافية.",

      aboutText:
        "شركة متخصصة في المقاولات والبنية التحتية وتقنية المعلومات.",

      vision: "الرؤية",
      mission: "الرسالة",

      visionText:
        "أن نكون شركة رائدة في مجال المقاولات والبنية التحتية وتقنية المعلومات.",
      missionText:
        "تقديم خدمات موثوقة عبر الابتكار والجودة والاحترافية.",

      ctaDesc: "تواصل مع فريقنا وابدأ مشروعك القادم بنجاح.",
    },
  };

  const services = [
    {
      title: { en: "General Construction", ar: "المقاولات العامة" },
      desc: {
        en: "Construction solutions for residential and commercial projects.",
        ar: "حلول إنشائية للمشاريع السكنية والتجارية.",
      },
    },
    {
      title: { en: "Design & Build", ar: "التصميم والتنفيذ" },
      desc: {
        en: "Integrated design and construction services.",
        ar: "تصميم وتنفيذ متكامل للمشاريع.",
      },
    },
    {
      title: { en: "Project Management", ar: "إدارة المشاريع" },
      desc: {
        en: "Professional project planning and execution.",
        ar: "إدارة وتنفيذ المشاريع باحترافية.",
      },
    },
  ];

  return (
    <main className="relative min-h-screen bg-black text-white">

      {/* 🌌 BACKGROUND FIX (IMPORTANT) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="bg-glow w-full h-full" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10">

        {/* Navbar */}
        <nav className="sticky top-0 z-50 border-b border-zinc-800 bg-black/70 backdrop-blur">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">

            <Link href="/" className="text-3xl font-bold text-yellow-500">
              AFC
            </Link>

            <ul className="hidden gap-8 text-sm font-medium md:flex">
              <li><Link href="/">{t[lang].home}</Link></li>
              <li><Link href="/about">{t[lang].about}</Link></li>
              <li><Link href="/services">{t[lang].services}</Link></li>
              <li><Link href="/projects">{t[lang].projects}</Link></li>
              <li><Link href="/contact">{t[lang].contact}</Link></li>
            </ul>

            <button
              onClick={() => setLang(lang === "en" ? "ar" : "en")}
              className="border border-yellow-500 px-3 py-1 text-sm text-yellow-500 hover:bg-yellow-500 hover:text-black transition"
            >
              {lang === "en" ? "AR" : "EN"}
            </button>

          </div>
        </nav>

        {/* Hero */}
        <section className="relative flex min-h-screen items-center justify-center text-center px-6">

          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2000')",
            }}
          />

          <div className="absolute inset-0 bg-black/70" />

          <div className="relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold text-yellow-500 mb-6">
              {t[lang].heroTitle}
            </h1>

            <p className="text-gray-200 max-w-3xl mx-auto">
              {t[lang].heroDesc}
            </p>

            <div className="mt-8 flex gap-4 justify-center">
              <Link
                href="/services"
                className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold"
              >
                {t[lang].viewServices}
              </Link>

              <Link
                href="/contact"
                className="border border-yellow-500 text-yellow-500 px-6 py-3 rounded-lg"
              >
                {t[lang].contactTeam}
              </Link>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="relative z-10 bg-black/60 px-8 py-24 text-center">
          <h2 className="text-4xl font-bold text-yellow-500 mb-6">
            {t[lang].aboutTitle}
          </h2>

          <p className="text-gray-300 max-w-4xl mx-auto">
            {t[lang].aboutText}
          </p>

          <Link href="/about" className="text-yellow-500 mt-6 inline-block">
            {t[lang].learnMore}
          </Link>
        </section>

        {/* Vision / Mission */}
        <section className="relative z-10 px-8 py-24">
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">

            <div className="border border-yellow-500/40 bg-black/40 p-8 rounded-xl">
              <h3 className="text-yellow-500 text-2xl mb-4">{t[lang].vision}</h3>
              <p className="text-gray-300">{t[lang].visionText}</p>
            </div>

            <div className="border border-yellow-500/40 bg-black/40 p-8 rounded-xl">
              <h3 className="text-yellow-500 text-2xl mb-4">{t[lang].mission}</h3>
              <p className="text-gray-300">{t[lang].missionText}</p>
            </div>

          </div>
        </section>

        {/* Services */}
        <section className="relative z-10 bg-black/50 px-8 py-24">
          <h2 className="text-4xl text-center text-yellow-500 mb-12">
            {t[lang].servicesTitle}
          </h2>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((s) => (
              <div key={s.title.en} className="border border-zinc-700 bg-black/40 p-6 rounded-xl">
                <h3 className="text-yellow-500 font-bold mb-3">
                  {s.title[lang]}
                </h3>
                <p className="text-gray-300">{s.desc[lang]}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="relative z-10 px-8 py-24 text-center bg-black/70">
          <h2 className="text-4xl text-yellow-500 mb-4">
            {t[lang].ctaTitle}
          </h2>

          <p className="text-gray-300 mb-6">
            {t[lang].ctaDesc}
          </p>

          <Link
            href="/contact"
            className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-bold"
          >
            {t[lang].contactTeam}
          </Link>
        </section>

        {/* Footer */}
        <footer className="border-t border-zinc-800 py-8 text-center text-gray-400">
          © 2026 Advanced Future for Business and Construction SPC
        </footer>

      </div>
    </main>
  );
}