"use client";
import { useState, useEffect } from "react";

export default function useLanguage() {
  const [lang, setLang] = useState<"en" | "ar">("en");

  useEffect(() => {
    const saved = localStorage.getItem("afc-lang");
    if (saved === "en" || saved === "ar") {
      setLang(saved);
    }
  }, []);

  const changeLang = (value: "en" | "ar") => {
    setLang(value);
    localStorage.setItem("afc-lang", value);
    // اتجاه النص
    document.documentElement.dir = value === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = value;
  };

  return { lang, changeLang };
}
