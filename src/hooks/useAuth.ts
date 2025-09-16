// import { useNavigate } from "@tanstack/react-router";
import apiClient from "@/utils/api-client";

import { setIsAuthenticated } from "@/stores/authStore";

export default function useAuth() {
	function login(token: string) {
		apiClient.setAccessToken(token);
		setIsAuthenticated(true);
		// // 로그인 후 지정된 경로로 이동
		// navigate({ to: redirectPath });
	}

	function logout() {
		apiClient.clearTokens();
		setIsAuthenticated(false);
		// // 로그아웃 후 지정된 경로로 이동
		// navigate({ to: redirectPath });
	}

	return {
		login,
		logout,
	};
}
