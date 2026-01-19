import { useContext } from "react";
import { ThemeContext } from "@/context/Theme/ThemeProvider";
import locales from "@/locales";

type Locale = keyof typeof locales;
type TranslationKey = keyof typeof locales.en;

const DEFAULT_LOCALE: Locale = "en";

const isSupportedLocale = (lang: string): lang is Locale => lang in locales;

const useTranslation = () => {
  const { language } = useContext(ThemeContext);

  // Choose the appropriate locale, defaulting to English if unsupported
  const locale = isSupportedLocale(language) ? locales[language] : locales[DEFAULT_LOCALE];

  const t = (key: TranslationKey): string => locale[key] ?? locales[DEFAULT_LOCALE][key] ?? key;

  return { t };
};

export default useTranslation;
