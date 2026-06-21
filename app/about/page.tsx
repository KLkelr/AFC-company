"use client";

import { useState } from "react";

export default function AboutPage() {
  const [lang, setLang] = useState<"en" | "ar">("en");

  const t = {
    en: {
      title: "About Us",

      desc1:
        "Advanced Future for Business and Construction SPC is a leading construction and infrastructure company delivering large-scale engineering solutions across Oman and the region.",

      desc2:
        "We specialize in building modern, efficient, and sustainable structures with a strong focus on quality, safety, and precision engineering.",

      desc3:
        "Our portfolio includes commercial complexes, residential developments, and infrastructure projects executed with international standards.",

      vision: "Vision",
      visionText:
        "To become a regional leader in construction and infrastructure development, recognized for innovation and excellence.",

      mission: "Mission",
      missionText:
        "Deliver high-quality, reliable, and innovative construction solutions that exceed client expectations.",
    },

    ar: {
      title: "من نحن",
      desc1:
        "شركة المستقبل المتقدم للأعمال والإنشاءات ش.م.م شركة رائدة في مجال البناء وتطوير البنية التحتية في سلطنة عمان والمنطقة.",

      desc2:
        "نختص في تنفيذ مشاريع حديثة وفعالة ومستدامة مع التركيز على الجودة والسلامة والدقة الهندسية.",

      desc3:
        "يشمل عملنا المجمعات التجارية والمشاريع السكنية والبنية التحتية وفق أعلى المعايير العالمية.",

      vision: "الرؤية",
      visionText:
        "أن نصبح شركة رائدة إقليمياً في مجال البناء وتطوير البنية التحتية.",

      mission: "الرسالة",
      missionText:
        "تقديم حلول إنشائية مبتكرة وعالية الجودة تفوق توقعات العملاء.",
    },
  };

  return (
    <main className="min-h-screen bg-black text-white px-8 py-24">

      {/* Language Toggle */}
      <div className="flex justify-center mb-10">
        <button
          onClick={() => setLang(lang === "en" ? "ar" : "en")}
          className="border border-yellow-500 px-4 py-2 text-yellow-500 hover:bg-yellow-500 hover:text-black transition"
        >
          {lang === "en" ? "AR" : "EN"}
        </button>
      </div>

      <h1 className="text-5xl font-bold text-yellow-500 text-center mb-10">
        {t[lang].title}
      </h1>

      <div className="max-w-4xl mx-auto text-center text-gray-300 space-y-6">
        <p>{t[lang].desc1}</p>
        <p>{t[lang].desc2}</p>
        <p>{t[lang].desc3}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-16 max-w-5xl mx-auto">

        <div className="border border-yellow-500/40 p-6 rounded-xl">
          <h2 className="text-yellow-500 text-2xl font-bold mb-3">
            {t[lang].vision}
          </h2>
          <p className="text-gray-300">{t[lang].visionText}</p>
        </div>

        <div className="border border-yellow-500/40 p-6 rounded-xl">
          <h2 className="text-yellow-500 text-2xl font-bold mb-3">
            {t[lang].mission}
          </h2>
          <p className="text-gray-300">{t[lang].missionText}</p>
        </div>

      </div>

    </main>
  );
}