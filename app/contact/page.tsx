"use client";
import { useState } from "react";
import useLanguage from "../hooks/useLanguage";

export default function ContactPage() {
  const { lang } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const t = {
    en: {
      eyebrow: "Get In Touch",
      title:   "Contact Us",
      sub:     "Our team is ready to discuss your next project.",
      name:    "Full Name",
      email:   "Email Address",
      message: "Your Message",
      send:    "Send Message",
      sending: "Sending…",
      success: "Message sent! We'll be in touch shortly.",
      error:   "Something went wrong. Please try again.",
      info:    "Contact Information",
      phone:   "+968 96019196",
      emailAddr: "saradj0m@gmail.com",
      address: "Muscat, Sultanate of Oman",
    },
    ar: {
      eyebrow: "تواصل معنا",
      title:   "اتصل بنا",
      sub:     "فريقنا مستعد لمناقشة مشروعك القادم.",
      name:    "الاسم الكامل",
      email:   "البريد الإلكتروني",
      message: "رسالتك",
      send:    "إرسال الرسالة",
      sending: "جارٍ الإرسال…",
      success: "تم إرسال رسالتك! سنتواصل معك قريباً.",
      error:   "حدث خطأ. يرجى المحاولة مرة أخرى.",
      info:    "بيانات التواصل",
      phone:   "96019196 968+",
      emailAddr: "saradj0m@gmail.com",
      address: "مسقط، سلطنة عُمان",
    },
  };

  const handleSubmit = async () => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      setStatus(data.success ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="bg-black text-white" dir={lang === "ar" ? "rtl" : "ltr"}>

      {/* Hero */}
      <section
        className="parallax-section relative flex min-h-[50vh] items-center justify-center px-8 text-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2400&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-black/80" />
        <div className="relative z-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-yellow-400">{t[lang].eyebrow}</p>
          <h1 className="text-5xl font-extrabold text-yellow-500 md:text-7xl gold-shine">{t[lang].title}</h1>
          <div className="mx-auto mt-4 h-0.5 w-16 bg-yellow-500" />
          <p className="mt-4 text-gray-300">{t[lang].sub}</p>
        </div>
      </section>

      {/* Form + Info */}
      <section
        className="parallax-section relative px-8 py-28"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2400&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-black/87" />
        <div className="relative z-10 mx-auto grid max-w-5xl gap-12 md:grid-cols-2">

          {/* Form */}
          <div className="rounded-2xl border border-zinc-700 bg-black/60 p-8 backdrop-blur-sm">
            <div className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-semibold text-yellow-500">{t[lang].name}</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-3 text-white placeholder-zinc-500 focus:border-yellow-500 focus:outline-none transition"
                  placeholder={lang === "en" ? "John Doe" : "الاسم"}
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-yellow-500">{t[lang].email}</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-3 text-white placeholder-zinc-500 focus:border-yellow-500 focus:outline-none transition"
                  placeholder="email@example.com"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-yellow-500">{t[lang].message}</label>
                <textarea
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-3 text-white placeholder-zinc-500 focus:border-yellow-500 focus:outline-none transition resize-none"
                  placeholder={lang === "en" ? "Tell us about your project…" : "أخبرنا عن مشروعك…"}
                />
              </div>

              {status === "success" && (
                <p className="rounded-lg bg-green-900/40 border border-green-600 px-4 py-3 text-sm text-green-400">
                  {t[lang].success}
                </p>
              )}
              {status === "error" && (
                <p className="rounded-lg bg-red-900/40 border border-red-600 px-4 py-3 text-sm text-red-400">
                  {t[lang].error}
                </p>
              )}

              <button
                onClick={handleSubmit}
                disabled={status === "loading"}
                className="w-full rounded-lg bg-yellow-500 py-3 font-bold text-black transition hover:bg-yellow-400 disabled:opacity-50"
              >
                {status === "loading" ? t[lang].sending : t[lang].send}
              </button>
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center gap-8">
            <h2 className="text-2xl font-bold text-yellow-500">{t[lang].info}</h2>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="text-3xl">📞</span>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest">{lang === "en" ? "Phone" : "الهاتف"}</p>
                  <p className="text-white font-medium">{t[lang].phone}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-3xl">✉️</span>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest">{lang === "en" ? "Email" : "البريد"}</p>
                  <p className="text-white font-medium">{t[lang].emailAddr}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-3xl">📍</span>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest">{lang === "en" ? "Address" : "العنوان"}</p>
                  <p className="text-white font-medium">{t[lang].address}</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <footer className="border-t border-zinc-800 bg-black py-8 text-center text-xs text-gray-500">
        © 2026 Advanced Future for Business and Construction SPC
      </footer>
    </main>
  );
}
