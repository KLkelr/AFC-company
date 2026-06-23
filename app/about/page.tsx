"use client";
import useLanguage from "../hooks/useLanguage";

export default function AboutPage() {
  const { lang } = useLanguage();

  const t = {
    en: {
      eyebrow: "Our Story",
      title:   "About Us",
      desc1:   "Advanced Future for Business and Construction SPC is a leading construction and infrastructure company delivering large-scale engineering solutions across Oman and the region.",
      desc2:   "We specialise in building modern, efficient and sustainable structures with a strong focus on quality, safety and precision engineering.",
      desc3:   "Our portfolio includes commercial complexes, residential developments and infrastructure projects executed to international standards.",
      vision:  "Vision",
      visionText: "To become a regional leader in construction and infrastructure development, recognised for innovation and excellence.",
      mission: "Mission",
      missionText: "Deliver high-quality, reliable and innovative construction solutions that exceed client expectations.",
      values:  "Our Values",
      valList: [
        { title: "Quality",      desc: "We never compromise on materials, workmanship or safety standards." },
        { title: "Innovation",   desc: "We adopt the latest engineering technologies to deliver smarter solutions." },
        { title: "Integrity",    desc: "Transparent, honest partnerships with every client and stakeholder." },
        { title: "Excellence",   desc: "Every project is an opportunity to raise the bar." },
      ],
    },
    ar: {
      eyebrow: "قصتنا",
      title:   "من نحن",
      desc1:   "شركة المستقبل المتقدم للأعمال والإنشاءات ش.م.م شركة رائدة في مجال البناء وتطوير البنية التحتية في سلطنة عُمان والمنطقة.",
      desc2:   "نختص في تنفيذ مشاريع حديثة وفعّالة ومستدامة مع التركيز على الجودة والسلامة والدقة الهندسية.",
      desc3:   "يشمل سجلنا المجمعات التجارية والمشاريع السكنية والبنية التحتية وفق أعلى المعايير الدولية.",
      vision:  "الرؤية",
      visionText: "أن نصبح شركة رائدة إقليمياً في البناء والبنية التحتية.",
      mission: "الرسالة",
      missionText: "تقديم حلول إنشائية مبتكرة وعالية الجودة تفوق توقعات العملاء.",
      values:  "قيمنا",
      valList: [
        { title: "الجودة",      desc: "لا نساوم أبداً على المواد أو الحرفية أو معايير السلامة." },
        { title: "الابتكار",   desc: "نتبنى أحدث تقنيات الهندسة لتقديم حلول أكثر ذكاءً." },
        { title: "النزاهة",    desc: "شراكات شفافة وصادقة مع كل عميل وصاحب مصلحة." },
        { title: "التميز",     desc: "كل مشروع فرصة لرفع مستوى الأداء." },
      ],
    },
  };

  return (
    <main className="bg-black text-white" dir={lang === "ar" ? "rtl" : "ltr"}>

      {/* Hero */}
      <section
        className="parallax-section relative flex min-h-[60vh] items-center justify-center px-8 text-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2400&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-black/75" />
        <div className="relative z-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-yellow-400">{t[lang].eyebrow}</p>
          <h1 className="text-5xl font-extrabold text-yellow-500 md:text-7xl gold-shine">{t[lang].title}</h1>
          <div className="mx-auto mt-4 h-0.5 w-16 bg-yellow-500" />
        </div>
      </section>

      {/* Description */}
      <section
        className="parallax-section relative px-8 py-24 text-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1590650153855-d9e808231d41?q=80&w=2400&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-black/82" />
        <div className="relative z-10 mx-auto max-w-4xl space-y-6 text-lg leading-relaxed text-gray-300">
          <p>{t[lang].desc1}</p>
          <p>{t[lang].desc2}</p>
          <p>{t[lang].desc3}</p>
        </div>
      </section>

      {/* Vision / Mission */}
      <section
        className="parallax-section relative px-8 py-24"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1512207736890-6ffed8a84e8d?q=80&w=2400&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-black/83" />
        <div className="relative z-10 mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          <div className="card-glow rounded-2xl border border-yellow-500/40 bg-black/50 p-10 backdrop-blur-sm">
            <div className="mb-3 text-3xl">🔭</div>
            <h2 className="mb-4 text-2xl font-bold text-yellow-500">{t[lang].vision}</h2>
            <p className="text-gray-300 leading-relaxed">{t[lang].visionText}</p>
          </div>
          <div className="card-glow rounded-2xl border border-yellow-500/40 bg-black/50 p-10 backdrop-blur-sm">
            <div className="mb-3 text-3xl">🎯</div>
            <h2 className="mb-4 text-2xl font-bold text-yellow-500">{t[lang].mission}</h2>
            <p className="text-gray-300 leading-relaxed">{t[lang].missionText}</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section
        className="parallax-section relative px-8 py-24"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2400&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-black/83" />
        <div className="relative z-10 mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-4xl font-bold text-yellow-500">{t[lang].values}</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {t[lang].valList.map((v) => (
              <div key={v.title} className="card-glow rounded-xl border border-zinc-700 bg-black/50 p-6 text-center backdrop-blur-sm">
                <h3 className="mb-3 text-lg font-bold text-yellow-500">{v.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{v.desc}</p>
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
