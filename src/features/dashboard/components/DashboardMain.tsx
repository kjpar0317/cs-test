import { useTranslation } from "react-i18next";

import MovieResult from "./MovieResult";

export default function DashboardMain() {
	const { t } = useTranslation("dashboard");

	return (
		<div>
			{t("welcome")}
			<MovieResult />
		</div>
	);
}
