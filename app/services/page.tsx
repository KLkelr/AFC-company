"use client";
import useLanguage from "../hooks/useLanguage";

const services = [
  {
    icon: "🏗️",
    title: { en: "General Construction",        ar: "المقاولات العامة" },
    desc:  { en: "End-to-end construction solutions for residential, commercial and industrial projects.", ar: "تنفيذ مشاريع إنشائية متكاملة للمباني السكنية والتجارية والصناعية." },
  },
  {
    icon: "📐",
    title: { en: "Design & Build",              ar: "التصميم والتنفيذ" },
    desc:  { en: "Integrated architectural design and construction execution under one streamlined process.", ar: "دمج التصميم المعماري مع التنفيذ تحت نظام واحد متكامل." },
  },
  {
    icon: "📋",
    title: { en: "Project Management",          ar: "إدارة المشاريع" },
    desc:  { en: "Professional planning, execution and supervision ensuring timely, high-quality delivery.", ar: "تخطيط وتنفيذ وإشراف احترافي لضمان الجودة والالتزام بالوقت." },
  },
  {
    icon: "🛣️",
    title: { en: "Infrastructure Development",  ar: "تطوير البنية التحتية" },
    desc:  { en: "Large-scale infrastructure solutions including roads, utilities and urban development.", ar: "تنفيذ مشاريع بنية تحتية شاملة من طرق وخدمات وتطوير حضري." },
  },
  {
    icon: "🔧",
    title: { en: "Renovation & Upgrading",      ar: "التجديد والتطوير" },
    desc:  { en: "Modernisation and upgrading of existing structures using advanced engineering techniques.", ar: "تحديث المباني القائمة باستخدام أحدث التقنيات الهندسية." },
  },
  {
    icon: "🚜",
    title: { en: "Earthworks & Excavation",     ar: "الحفر والأعمال الترابية" },
    desc:  { en: "Heavy-duty excavation and site preparation using modern machinery and standards.", ar: "أعمال حفر وتجهيز مواقع باستخدام معدات حديثة ومعايير دقيقة." },
  },
  {
    icon: "💻",
    title: { en: "Information Technology",      ar: "تقنية المعلومات" },
    desc:  { en: "Software development, networking, cybersecurity and digital transformation solutions.", ar: "تطوير البرمجيات والشبكات والأمن السيبراني والتحول الرقمي." },
  },
  {
    icon: "🏢",
    title: { en: "Commercial Fit-Out",          ar: "التجهيز التجاري" },
    desc:  { en: "Turnkey interior fit-out solutions for offices, retail and hospitality spaces.", ar: "حلول تجهيز داخلي متكامل للمكاتب والتجزئة والضيافة." },
  },
];

export default function ServicesPage() {
  const { lang } = useLanguage();

  const t = {
    en: { eyebrow: "What We Offer", title: "Our Services", sub: "Comprehensive solutions across construction, infrastructure and technology." },
    ar: { eyebrow: "ما نقدمه", title: "خدماتنا", sub: "حلول شاملة في البناء والبنية التحتية والتقنية." },
  };

  return (
    <main className="bg-black text-white" dir={lang === "ar" ? "rtl" : "ltr"}>

      {/* Hero */}
      <section
        className="parallax-section relative flex min-h-[55vh] items-center justify-center px-8 text-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2400&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-black/78" />
        <div className="relative z-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-yellow-400">{t[lang].eyebrow}</p>
          <h1 className="text-5xl font-extrabold text-yellow-500 md:text-7xl gold-shine">{t[lang].title}</h1>
          <div className="mx-auto mt-4 h-0.5 w-16 bg-yellow-500" />
          <p className="mt-4 text-gray-300">{t[lang].sub}</p>
        </div>
      </section>

      {/* Services Grid */}
      <section
        className="parallax-section relative px-8 py-28"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2400&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-black/85" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <div key={s.title.en} className="card-glow rounded-xl border border-zinc-700 bg-black/60 p-7 backdrop-blur-sm">
                <div className="mb-4 text-4xl">{s.icon}</div>
                <h2 className="mb-3 text-lg font-bold text-yellow-500">{s.title[lang]}</h2>
                <p className="text-sm leading-relaxed text-gray-400">{s.desc[lang]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-zinc-800 bg-black py-8 text-center text-xs text-gray-500">
        © 2026 Advanced Future for Business and Construction SPC
      </footer>
    </main>
  );
}
