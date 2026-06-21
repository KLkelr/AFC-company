"use client";

import { useState } from "react";

export default function ContactPage() {
  const [lang, setLang] = useState<"en" | "ar">("en");

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const t = {
    en: {
      title: "Contact Us",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send Message",
      sending: "Sending...",
    },
    ar: {
      title: "تواصل معنا",
      name: "الاسم",
      email: "البريد",
      message: "الرسالة",
      send: "إرسال",
      sending: "جاري الإرسال...",
    },
  };

  async function send() {
    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    alert("Sent!");
  }

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

      <div className="max-w-xl mx-auto space-y-4">

        <input
          placeholder={t[lang].name}
          className="w-full p-3 bg-zinc-900 border border-zinc-700"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          placeholder={t[lang].email}
          className="w-full p-3 bg-zinc-900 border border-zinc-700"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <textarea
          placeholder={t[lang].message}
          className="w-full p-3 bg-zinc-900 border border-zinc-700 h-32"
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />

        <button
          onClick={send}
          className="w-full bg-yellow-500 text-black font-bold py-3"
        >
          {t[lang].send}
        </button>

      </div>

    </main>
  );
}