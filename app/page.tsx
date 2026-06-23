"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";
import useLanguage from "./hooks/useLanguage";

// ══════════════════════════════════════════════
// صور Unsplash — أكثر دراماتيكية وأقل إضاءة
// ══════════════════════════════════════════════
const SECTION_IMAGES = {
  hero:     "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2400&auto=format&fit=crop",
  about:    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2400&auto=format&fit=crop",
  vision:   "https://images.unsplash.com/photo-1590650153855-d9e808231d41?q=80&w=2400&auto=format&fit=crop",
  services: "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2400&auto=format&fit=crop",
  stats:    "https://images.unsplash.com/photo-1512207736890-6ffed8a84e8d?q=80&w=2400&auto=format&fit=crop",
  cta:      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2400&auto=format&fit=crop",
};

// ══════════════════════════════════════════════
// جسيمات ذهبية — تغطي الصفحة كلها عند الـ scroll
// ══════════════════════════════════════════════
function GoldParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;

    // حجم الـ canvas = حجم الصفحة كاملة
    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const PARTICLE_COUNT = 160;
    type Particle = {
      x: number; y: number;
      vx: number; vy: number;
      size: number; opacity: number;
      pulse: number; pulseSpeed: number;
    };

    const particles: Particle[] = Array.from({ length: PARTICLE_COUNT }, () => ({
      x:          Math.random() * canvas.width,
      y:          Math.random() * canvas.height,
      vx:         (Math.random() - 0.5) * 0.35,
      vy:         -Math.random() * 0.45 - 0.1,
      size:       Math.random() * 2.5 + 0.5,
      opacity:    Math.random() * 0.55 + 0.15,
      pulse:      Math.random() * Math.PI * 2,
      pulseSpeed: Math.random() * 0.02 + 0.008,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x     += p.vx;
        p.y     += p.vy;
        p.pulse += p.pulseSpeed;

        if (p.y < -10)               { p.y = canvas.height + 10; p.x = Math.random() * canvas.width; }
        if (p.x < -10)               { p.x = canvas.width + 10; }
        if (p.x > canvas.width + 10) { p.x = -10; }

        const alpha = p.opacity * (0.6 + 0.4 * Math.sin(p.pulse));
        const glow  = p.size * 3;

        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, glow);
        grad.addColorStop(0,   `rgba(234,179,8,${alpha})`);
        grad.addColorStop(0.4, `rgba(234,179,8,${alpha * 0.35})`);
        grad.addColorStop(1,   `rgba(234,179,8,0)`);

        ctx.beginPath();
        ctx.arc(p.x, p.y, glow, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 0.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,220,50,${alpha})`;
        ctx.fill();
      });

      // خطوط ربط
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx   = particles[i].x - particles[j].x;
          const dy   = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(234,179,8,${0.07 * (1 - dist / 110)})`;
            ctx.lineWidth   = 0.5;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: 5, pointerEvents: "none" }}
    />
  );
}

// ══════════════════════════════════════════════
const services = [
  { title: { en: "General Construction",       ar: "المقاولات العامة"        }, desc: { en: "End-to-end construction solutions for residential, commercial and industrial projects.", ar: "تنفيذ مشاريع إنشائية متكاملة للمباني السكنية والتجارية والصناعية." }, icon: "🏗️" },
  { title: { en: "Design & Build",             ar: "التصميم والتنفيذ"        }, desc: { en: "Integrated architectural design and construction execution under one streamlined process.", ar: "دمج التصميم المعماري مع التنفيذ تحت نظام واحد متكامل." }, icon: "📐" },
  { title: { en: "Project Management",         ar: "إدارة المشاريع"          }, desc: { en: "Professional planning, execution and supervision ensuring timely, high-quality delivery.", ar: "تخطيط وتنفيذ وإشراف احترافي لضمان الجودة والالتزام بالوقت." }, icon: "📋" },
  { title: { en: "Infrastructure Development", ar: "تطوير البنية التحتية"    }, desc: { en: "Large-scale infrastructure including roads, utilities and urban development.", ar: "مشاريع بنية تحتية شاملة من طرق وخدمات وتطوير حضري." }, icon: "🛣️" },
  { title: { en: "Renovation & Upgrading",     ar: "التجديد والتطوير"        }, desc: { en: "Modernisation and upgrading of existing structures using advanced engineering.", ar: "تحديث المباني القائمة باستخدام أحدث التقنيات الهندسية." }, icon: "🔧" },
  { title: { en: "Earthworks & Excavation",    ar: "الحفر والأعمال الترابية" }, desc: { en: "Heavy-duty excavation and site preparation using modern machinery and standards.", ar: "أعمال حفر وتجهيز مواقع باستخدام معدات حديثة ومعايير دقيقة." }, icon: "🚜" },
];

const stats = [
  { number: "100+", label: { en: "Projects Completed", ar: "مشروع منجز"  } },
  { number: "50+",  label: { en: "Happy Clients",      ar: "عميل راضٍ"   } },
  { number: "15+",  label: { en: "Expert Engineers",   ar: "مهندس متخصص" } },
  { number: "10+",  label: { en: "Years Experience",   ar: "سنة خبرة"     } },
];

export default function Home() {
  const { lang } = useLanguage();

  const t = {
    en: {
      heroTag:      "Building Tomorrow, Today",
      heroTitle:    "Advanced Future for Business and Construction",
      heroSub:      "Excellence in Construction, Infrastructure & Information Technology across Oman and the region.",
      viewServices: "Our Services",
      contactTeam:  "Get In Touch",
      aboutTitle:   "Who We Are",
      aboutText:    "Advanced Future for Business and Construction SPC is a forward-thinking company delivering large-scale construction, infrastructure development and information technology solutions across Oman and the wider region.",
      learnMore:    "Learn More About Us →",
      vision:       "Vision",
      visionText:   "To become a leading company in construction, infrastructure and information technology, recognised for innovation and excellence.",
      mission:      "Mission",
      missionText:  "Delivering reliable, high-quality services through innovation, precision engineering and operational excellence.",
      servicesTitle:"Our Services",
      viewAll:      "View All Services →",
      ctaTitle:     "Ready To Build Something Great?",
      ctaDesc:      "Contact our team today and start your next successful project.",
      ctaBtn:       "Contact Our Team →",
    },
    ar: {
      heroTag:      "نبني الغد، اليوم",
      heroTitle:    "المستقبل المتقدم للأعمال والإنشاءات",
      heroSub:      "التميز في البناء والبنية التحتية وتقنية المعلومات في عُمان والمنطقة.",
      viewServices: "خدماتنا",
      contactTeam:  "تواصل معنا",
      aboutTitle:   "من نحن",
      aboutText:    "شركة المستقبل المتقدم للأعمال والإنشاءات ش.م.م شركة رائدة في تنفيذ مشاريع البناء الكبرى وتطوير البنية التحتية وحلول تقنية المعلومات في سلطنة عُمان والمنطقة.",
      learnMore:    "← اعرف أكثر عنا",
      vision:       "الرؤية",
      visionText:   "أن نكون شركة رائدة إقليمياً في البناء والبنية التحتية وتقنية المعلومات، معروفة بالابتكار والتميز.",
      mission:      "الرسالة",
      missionText:  "تقديم خدمات موثوقة وعالية الجودة عبر الابتكار والدقة الهندسية والاحترافية في التنفيذ.",
      servicesTitle:"خدماتنا",
      viewAll:      "← عرض كل الخدمات",
      ctaTitle:     "مستعد لبناء مشروعك؟",
      ctaDesc:      "تواصل مع فريقنا اليوم وابدأ مشروعك القادم بنجاح.",
      ctaBtn:       "← تواصل مع فريقنا",
    },
  };

  return (
    <main className="bg-black text-white" dir={lang === "ar" ? "rtl" : "ltr"}>

      {/* ✨ الجسيمات الذهبية — fixed تغطي الصفحة كلها */}
      <GoldParticles />

      {/* ═══════════════════════════════ HERO ══ */}
      <section
        className="parallax-section relative flex min-h-screen flex-col items-center justify-center px-6 text-center overflow-hidden"
        style={{ backgroundImage: `url('${SECTION_IMAGES.hero}')` }}
      >
        <div className="absolute inset-0 bg-black/72" />
        <div className="relative z-10 max-w-5xl fade-in-up">
          <p className="mb-5 inline-block rounded-full border border-yellow-500/40 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-yellow-400">
            {t[lang].heroTag}
          </p>
          <h1 className="text-5xl font-extrabold leading-tight text-white md:text-7xl gold-shine">
            <span className="text-yellow-500">AFC</span>
            <br />
            <span className="text-3xl md:text-4xl font-bold text-gray-100">{t[lang].heroTitle}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-300 fade-in-up-delay-1">
            {t[lang].heroSub}
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4 fade-in-up-delay-2">
            <Link href="/services" className="rounded-lg bg-yellow-500 px-8 py-4 font-semibold text-black transition hover:scale-105 hover:bg-yellow-400 shadow-lg shadow-yellow-500/20">
              {t[lang].viewServices}
            </Link>
            <Link href="/contact" className="rounded-lg border border-yellow-500 px-8 py-4 text-yellow-500 transition hover:bg-yellow-500 hover:text-black">
              {t[lang].contactTeam}
            </Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <span className="text-xs text-gray-400 uppercase tracking-widest">Scroll</span>
          <div className="h-8 w-0.5 bg-gradient-to-b from-yellow-500 to-transparent" />
        </div>
      </section>

      {/* ═══════════════════════════════ ABOUT ══ */}
      <section
        className="parallax-section relative px-8 py-32 text-center"
        style={{ backgroundImage: `url('${SECTION_IMAGES.about}')` }}
      >
        <div className="absolute inset-0 bg-black/78" />
        <div className="relative z-10 mx-auto max-w-4xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-yellow-500">
            {lang === "en" ? "Our Story" : "قصتنا"}
          </p>
          <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">{t[lang].aboutTitle}</h2>
          <div className="mx-auto mb-6 h-0.5 w-16 bg-yellow-500" />
          <p className="text-lg leading-relaxed text-gray-300">{t[lang].aboutText}</p>
          <Link href="/about" className="mt-8 inline-block font-semibold text-yellow-500 hover:text-yellow-400 transition">
            {t[lang].learnMore}
          </Link>
        </div>
      </section>

      {/* ═══════════════════════════ VISION / MISSION ══ */}
      <section
        className="parallax-section relative px-8 py-32"
        style={{ backgroundImage: `url('${SECTION_IMAGES.vision}')` }}
      >
        <div className="absolute inset-0 bg-black/82" />
        <div className="relative z-10 mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          <div className="card-glow rounded-2xl border border-yellow-500/30 bg-black/50 p-10 backdrop-blur-sm">
            <div className="mb-4 text-3xl">🔭</div>
            <h3 className="mb-4 text-2xl font-bold text-yellow-500">{t[lang].vision}</h3>
            <p className="leading-relaxed text-gray-300">{t[lang].visionText}</p>
          </div>
          <div className="card-glow rounded-2xl border border-yellow-500/30 bg-black/50 p-10 backdrop-blur-sm">
            <div className="mb-4 text-3xl">🎯</div>
            <h3 className="mb-4 text-2xl font-bold text-yellow-500">{t[lang].mission}</h3>
            <p className="leading-relaxed text-gray-300">{t[lang].missionText}</p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════ SERVICES ══ */}
      <section
        className="parallax-section relative px-8 py-32"
        style={{ backgroundImage: `url('${SECTION_IMAGES.services}')` }}
      >
        <div className="absolute inset-0 bg-black/83" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <p className="mb-3 text-center text-xs font-semibold uppercase tracking-widest text-yellow-500">
            {lang === "en" ? "What We Do" : "ما نقدمه"}
          </p>
          <h2 className="mb-4 text-center text-4xl font-bold text-white md:text-5xl">{t[lang].servicesTitle}</h2>
          <div className="mx-auto mb-12 h-0.5 w-16 bg-yellow-500" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.title.en} className="card-glow rounded-xl border border-zinc-700 bg-black/50 p-7 backdrop-blur-sm">
                <div className="mb-4 text-3xl">{s.icon}</div>
                <h3 className="mb-3 text-xl font-bold text-yellow-500">{s.title[lang]}</h3>
                <p className="text-sm leading-relaxed text-gray-400">{s.desc[lang]}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/services" className="font-semibold text-yellow-500 hover:text-yellow-400 transition">
              {t[lang].viewAll}
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════ STATS ══ */}
      <section
        className="parallax-section relative px-8 py-28"
        style={{ backgroundImage: `url('${SECTION_IMAGES.stats}')` }}
      >
        <div className="absolute inset-0 bg-black/85" />
        <div className="relative z-10 mx-auto grid max-w-6xl gap-10 text-center md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.number} className="group">
              <h3 className="stat-number text-6xl font-extrabold text-yellow-500 group-hover:scale-110 transition-transform">
                {s.number}
              </h3>
              <p className="mt-3 font-medium text-gray-300">{s.label[lang]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════ CTA ══ */}
      <section
        className="parallax-section relative px-8 py-36 text-center"
        style={{ backgroundImage: `url('${SECTION_IMAGES.cta}')` }}
      >
        <div className="absolute inset-0 bg-black/78" />
        <div className="relative z-10 mx-auto max-w-3xl">
          <h2 className="mb-4 text-4xl font-bold text-yellow-500 md:text-5xl gold-shine">{t[lang].ctaTitle}</h2>
          <div className="mx-auto mb-6 h-0.5 w-16 bg-yellow-500" />
          <p className="mb-10 text-lg text-gray-300">{t[lang].ctaDesc}</p>
          <Link href="/contact" className="inline-block rounded-lg bg-yellow-500 px-12 py-4 text-lg font-bold text-black transition hover:scale-105 hover:bg-yellow-400 shadow-xl shadow-yellow-500/25">
            {t[lang].ctaBtn}
          </Link>
        </div>
      </section>

      {/* ═══════════════════════════════ FOOTER ══ */}
      <footer className="border-t border-zinc-800 bg-black py-10 text-center">
        <p className="mb-1 text-sm font-bold text-yellow-500">AFC</p>
        <p className="text-xs text-gray-500">
          © 2026 Advanced Future for Business and Construction SPC. All rights reserved.
        </p>
      </footer>

    </main>
  );
}