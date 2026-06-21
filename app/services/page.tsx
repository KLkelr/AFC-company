"use client";

import { useState } from "react";

export default function ServicesPage() {
  const [lang, setLang] = useState<"en" | "ar">("en");

  const t = {
    en: {
      title: "Our Services",

      items: [
        {
          title: "General Construction",
          desc: "End-to-end construction solutions for residential, commercial, and industrial projects.",
        },
        {
          title: "Design & Build",
          desc: "Integrated architectural design and construction execution under one streamlined process.",
        },
        {
          title: "Project Management",
          desc: "Professional planning, execution, and supervision ensuring timely and high-quality delivery.",
        },
        {
          title: "Infrastructure Development",
          desc: "Large-scale infrastructure solutions including roads, utilities, and urban development.",
        },
        {
          title: "Renovation & Upgrading",
          desc: "Modernization and upgrading of existing structures with advanced engineering techniques.",
        },
        {
          title: "Earthworks & Excavation",
          desc: "Heavy-duty excavation and site preparation using modern machinery and standards.",
        },
      ],
    },

    ar: {
      title: "خدماتنا",

      items: [
        {
          title: "المقاولات العامة",
          desc: "تنفيذ مشاريع إنشائية متكاملة للمباني السكنية والتجارية والصناعية.",
        },
        {
          title: "التصميم والتنفيذ",
          desc: "دمج التصميم المعماري مع التنفيذ تحت نظام واحد متكامل.",
        },
        {
          title: "إدارة المشاريع",
          desc: "تخطيط وتنفيذ وإشراف احترافي لضمان الجودة والالتزام بالوقت.",
        },
        {
          title: "تطوير البنية التحتية",
          desc: "تنفيذ مشاريع البنية التحتية مثل الطرق والخدمات والمناطق العمرانية.",
        },
        {
          title: "التجديد والتطوير",
          desc: "تحديث المباني القديمة باستخدام أحدث التقنيات الهندسية.",
        },
        {
          title: "الحفر والأعمال الترابية",
          desc: "أعمال حفر وتجهيز مواقع باستخدام معدات حديثة ومعايير دقيقة.",
        },
      ],
    },
  };

  return (
    <main className="min-h-screen bg-black text-white px-8 py-24">

      <div className="flex justify-center mb-10">
        <button
          onClick={() => setLang(lang === "en" ? "ar" : "en")}
          className="border border-yellow-500 px-4 py-2 text-yellow-500"
        >
          {lang === "en" ? "AR" : "EN"}
        </button>
      </div>

      <h1 className="text-5xl font-bold text-yellow-500 text-center mb-12">
        {t[lang].title}
      </h1>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {t[lang].items.map((s, i) => (
          <div key={i} className="border border-zinc-700 p-6 rounded-xl hover:border-yellow-500 transition">
            <h2 className="text-yellow-500 font-bold text-xl mb-3">
              {s.title}
            </h2>
            <p className="text-gray-400 text-sm">{s.desc}</p>
          </div>
        ))}
      </div>

    </main>
  );
}