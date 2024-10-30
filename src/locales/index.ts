import en from "./en";
import fr from "./fr";

const locales: Record<"en" | "fr", typeof en | typeof fr> = {
  en,
  fr,
};

export default locales;
