import type { SupportedLanguages } from "@/constants/common";

import { useStore } from "@tanstack/react-store";
import { Store } from "@tanstack/store";

// 언어 상태 타입
interface LanguageState {
	lang: (typeof SupportedLanguages)[number];
}

// 초기 상태
export const languageStore = new Store<LanguageState>({
	lang: "en",
});

export default function useLanguage() {
	// useStore 훅을 사용하여 languageStore의 lang 상태를 구독
	const lang = useStore(languageStore, (state) => state.lang);

	function setLanguage(lang: LanguageState["lang"]) {
		// console.log(lang);
		languageStore.setState((prev) => ({ ...prev, lang }));
	}

	return {
		lang,
		setLanguage,
	};
}
