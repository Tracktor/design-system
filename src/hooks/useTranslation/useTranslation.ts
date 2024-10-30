import { useContext } from "react";
import { ThemeContext } from "@/context/Theme/ThemeProvider";
import locales from "@/locales";

/**
 * Hook to get the translations internally
 */
const useTranslation = () => {
  const { language } = useContext(ThemeContext);

  const t = (key: keyof typeof locales.en | keyof typeof locales.fr) => locales[language][key];

  return {
    t,
  };
};

export default useTranslation;
