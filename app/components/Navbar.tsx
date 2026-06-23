"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import useLanguage from "../hooks/useLanguage";

export default function Navbar() {
  const { lang, changeLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const t = {
    en: { home: "Home", about: "About", services: "Services", projects: "Projects", contact: "Contact" },
    ar: { home: "الرئيسية", about: "من نحن", services: "الخدمات", projects: "المشاريع", contact: "تواصل" },
  };

  const links = [
    { href: "/",         label: t[lang].home },
    { href: "/about",    label: t[lang].about },
    { href: "/services", label: t[lang].services },
    { href: "/projects", label: t[lang].projects },
    { href: "/contact",  label: t[lang].contact },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 border-b border-zinc-800 transition-all duration-300 ${
        scrolled ? "bg-black/95 shadow-[0_4px_30px_rgba(234,179,8,0.08)]" : "bg-black/75 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-3xl font-extrabold text-yellow-500 tracking-tight group-hover:text-yellow-400 transition">
            AFC
          </span>
          <span className="hidden sm:block text-xs text-zinc-500 leading-tight max-w-[120px]">
            Advanced Future for Business & Construction
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 text-sm font-medium">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="nav-link hover:text-yellow-500 transition">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right: Lang + Mobile Menu */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => changeLang(lang === "en" ? "ar" : "en")}
            className="border border-yellow-500 px-3 py-1 text-xs font-bold text-yellow-500 hover:bg-yellow-500 hover:text-black transition rounded"
          >
            {lang === "en" ? "AR" : "EN"}
          </button>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block h-0.5 w-5 bg-yellow-500 transition-all ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
            <span className={`block h-0.5 w-5 bg-yellow-500 transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-yellow-500 transition-all ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-zinc-800 bg-black/95 px-6 py-4">
          <ul className="flex flex-col gap-4 text-sm font-medium">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="block text-gray-300 hover:text-yellow-500 transition"
                  onClick={() => setMenuOpen(false)}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
