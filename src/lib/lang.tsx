import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Lang = "en" | "ar";

type LangContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
};

const LangContext = createContext<LangContextValue | null>(null);

const getInitialLang = (): Lang => {
  if (typeof window === "undefined") return "en";
  const stored = window.localStorage.getItem("lang");
  return stored === "ar" ? "ar" : "en";
};

export const LangProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLang] = useState<Lang>(getInitialLang);

  const toggleLang = () => setLang((prev) => (prev === "en" ? "ar" : "en"));

  useEffect(() => {
    window.localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.setAttribute("data-lang", lang);
  }, [lang]);

  const value = useMemo<LangContextValue>(
    () => ({ lang, setLang, toggleLang }),
    [lang]
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
};

export const useLang = () => {
  const ctx = useContext(LangContext);
  if (!ctx) {
    throw new Error("useLang must be used within LangProvider");
  }
  return ctx;
};
