"use client";

import Link from "next/link";
import useLanguage from "../hooks/useLanguage";

export default function Navbar() {
  const { lang, changeLang } = useLanguage();

  const t = {
    en: { home: "Home", about: "About", services: "Services", projects: "Projects", contact: "Contact" },
    ar: { home: "الرئيسية", about: "من نحن", services: "الخدمات", projects: "المشاريع", contact: "تواصل" },
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-zinc-800 bg-black/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">

        <Link href="/" className="text-3xl font-bold text-yellow-500">
          AFC
        </Link>

        <ul className="hidden md:flex gap-8 text-sm">
          <li><Link href="/">{t[lang].home}</Link></li>
          <li><Link href="/about">{t[lang].about}</Link></li>
          <li><Link href="/services">{t[lang].services}</Link></li>
          <li><Link href="/projects">{t[lang].projects}</Link></li>
          <li><Link href="/contact">{t[lang].contact}</Link></li>
        </ul>

        <button
          onClick={() => changeLang(lang === "en" ? "ar" : "en")}
          className="border border-yellow-500 px-3 py-1 text-yellow-500"
        >
          {lang === "en" ? "AR" : "EN"}
        </button>

      </div>
    </nav>
  );
}