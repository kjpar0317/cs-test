import { getLanguage, setLanguage } from "@/stores/languageStore";
import { useTranslation } from "react-i18next";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

export default function LanguageSwitcher() {
	const { i18n } = useTranslation();

	// useEffect(() => {
	// 	const handleLanguageChange = (newLang: string) => {
	// 		// 미리 가져온 setLanguage 함수를 이벤트 핸들러 안에서 사용
	// 		// console.log("i18n 언어 변경 감지:", newLang);
	// 		setLanguage(newLang);
	// 	};

	// 	i18n.on("languageChanged", handleLanguageChange);

	// 	// 컴포넌트가 언마운트될 때 이벤트 리스너를 정리
	// 	return () => {
	// 		i18n.off("languageChanged", handleLanguageChange);
	// 	};
	// }, [i18n, setLanguage]); // 의존성 배열에 i18n과 setLanguage를 포함

	const changeLanguage = (newLang: string) => {
		i18n.changeLanguage(newLang);
		setLanguage(newLang);
	};

	return (
		// <Select onValueChange={changeLanguage} defaultValue={lang}>
		//   <SelectTrigger className="w-[180px]">
		//     <SelectValue placeholder="Select Language" />
		//   </SelectTrigger>
		//   <SelectContent>
		//     <SelectItem value="en">English</SelectItem>
		//     <SelectItem value="ko">한국어</SelectItem>
		//     <SelectItem value="ja">日本語</SelectItem>
		//   </SelectContent>
		// </Select>
		<select
			onChange={(e) => changeLanguage(e.target.value)}
			defaultValue={getLanguage()}
		>
			<option value="en">English</option>
			<option value="ko">한국어</option>
		</select>
	);
}
