import type { SupportedLanguages } from "@/constants/common";

import { Store } from "@tanstack/store";

// 언어 상태 타입
interface LanguageState {
	lang: (typeof SupportedLanguages)[number];
}

// 초기 상태
export const languageStore = new Store<LanguageState>({
	lang: "en",
});

export const getLanguage = () => {
	return languageStore.state.lang;
};

export const setLanguage = (lang: (typeof SupportedLanguages)[number]) => {
	languageStore.setState({ lang });
};
