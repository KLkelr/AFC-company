"use client";
import useLanguage from "../hooks/useLanguage";

const projects = [
  {
    img:   "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop",
    title: { en: "Commercial Complex — Muscat",       ar: "مجمع تجاري — مسقط" },
    desc:  { en: "Mixed-use development spanning 12,000 m².", ar: "مشروع متعدد الاستخدامات بمساحة 12,000 م²." },
    tag:   { en: "Commercial", ar: "تجاري" },
  },
  {
    img:   "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800&auto=format&fit=crop",
    title: { en: "Road Infrastructure — Sohar",       ar: "بنية تحتية طرق — صحار" },
    desc:  { en: "15 km highway expansion with modern utilities.", ar: "توسعة طريق سريع 15 كم مع خدمات حديثة." },
    tag:   { en: "Infrastructure", ar: "بنية تحتية" },
  },
  {
    img:   "https://images.unsplash.com/photo-1590650153855-d9e808231d41?q=80&w=800&auto=format&fit=crop",
    title: { en: "Residential Towers — Salalah",      ar: "أبراج سكنية — صلالة" },
    desc:  { en: "Twin 18-storey residential towers.", ar: "برجان سكنيان من 18 طابقاً." },
    tag:   { en: "Residential", ar: "سكني" },
  },
  {
    img:   "https://images.unsplash.com/photo-1512207736890-6ffed8a84e8d?q=80&w=800&auto=format&fit=crop",
    title: { en: "Industrial Facility — Duqm",        ar: "منشأة صناعية — الدقم" },
    desc:  { en: "Heavy-industry warehouse and logistics hub.", ar: "مستودع صناعي ثقيل ومركز لوجستي." },
    tag:   { en: "Industrial", ar: "صناعي" },
  },
  {
    img:   "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=800&auto=format&fit=crop",
    title: { en: "Government Complex — Nizwa",        ar: "مجمع حكومي — نزوى" },
    desc:  { en: "Administrative centre built to GCC standards.", ar: "مركز إداري وفق معايير مجلس التعاون الخليجي." },
    tag:   { en: "Government", ar: "حكومي" },
  },
  {
    img:   "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
    title: { en: "Luxury Villa Estate — Al Seeb",     ar: "فلل فاخرة — السيب" },
    desc:  { en: "Premium residential compound with 40 villas.", ar: "مجمع سكني فاخر يضم 40 فيلا." },
    tag:   { en: "Residential", ar: "سكني" },
  },
];

export default function ProjectsPage() {
  const { lang } = useLanguage();

  const t = {
    en: { eyebrow: "Our Work", title: "Projects", sub: "A selection of our completed and ongoing projects across Oman." },
    ar: { eyebrow: "أعمالنا", title: "المشاريع", sub: "مجموعة مختارة من مشاريعنا المنجزة والجارية في عُمان." },
  };

  return (
    <main className="bg-black text-white" dir={lang === "ar" ? "rtl" : "ltr"}>

      {/* Hero */}
      <section
        className="parallax-section relative flex min-h-[55vh] items-center justify-center px-8 text-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1512207736890-6ffed8a84e8d?q=80&w=2400&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-black/78" />
        <div className="relative z-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-yellow-400">{t[lang].eyebrow}</p>
          <h1 className="text-5xl font-extrabold text-yellow-500 md:text-7xl gold-shine">{t[lang].title}</h1>
          <div className="mx-auto mt-4 h-0.5 w-16 bg-yellow-500" />
          <p className="mt-4 text-gray-300">{t[lang].sub}</p>
        </div>
      </section>

      {/* Projects Grid */}
      <section
        className="parallax-section relative px-8 py-28"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2400&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-black/87" />
        <div className="relative z-10 mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <div key={i} className="card-glow overflow-hidden rounded-xl border border-zinc-700 bg-black/50 backdrop-blur-sm">
              <div className="relative h-52 overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title[lang]}
                  className="h-full w-full object-cover animate-zoomSlow"
                />
                <span className="absolute top-3 left-3 rounded-full bg-yellow-500 px-3 py-0.5 text-xs font-bold text-black">
                  {p.tag[lang]}
                </span>
              </div>
              <div className="p-6">
                <h2 className="mb-2 font-bold text-yellow-500">{p.title[lang]}</h2>
                <p className="text-sm text-gray-400">{p.desc[lang]}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-zinc-800 bg-black py-8 text-center text-xs text-gray-500">
        © 2026 Advanced Future for Business and Construction SPC
      </footer>
    </main>
  );
}
