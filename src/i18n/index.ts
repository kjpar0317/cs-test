import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

import { SupportedLanguages } from "@/constant/common";
import { setLanguage } from "@/store/languageStore";

i18n
	.use(Backend)
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		fallbackLng: "en",
		supportedLngs: SupportedLanguages,
		interpolation: { escapeValue: false },
		backend: { loadPath: "/locales/{{lng}}/{{ns}}.json" },
		ns: ["layout", "dashboard"],
	});

i18n.on("languageChanged", (lng) => {
	setLanguage(lng);
});

export default i18n;
