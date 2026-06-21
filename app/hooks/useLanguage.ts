"use client";

import { useEffect, useState } from "react";

export default function useLanguage() {
  const [lang, setLang] = useState<"en" | "ar">("en");

  useEffect(() => {
    const saved = localStorage.getItem("lang");
    if (saved === "en" || saved === "ar") {
      setLang(saved);
    }
  }, []);

  const changeLang = (value: "en" | "ar") => {
    setLang(value);
    localStorage.setItem("lang", value);
  };

  return { lang, changeLang };
}