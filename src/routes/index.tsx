import { createFileRoute, redirect } from "@tanstack/react-router";

import { getIsAuthenticated } from "@/store/authStore"; // 또는 services/authService.ts

import "@/i18n";

export const Route = createFileRoute("/")({
	component: App,
	beforeLoad: async () => {
		if (!getIsAuthenticated()) {
			throw redirect({
				to: "/login",
			});
		}
	},
});

function App() {
	return <></>;
}
