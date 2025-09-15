// import { useNavigate } from "@tanstack/react-router";
import { useStore } from "@tanstack/react-store";
import { Store } from "@tanstack/store";

import apiClient from "@/utils/api-client";

// 언어 상태 타입
interface authState {
	isAuthenticated: boolean;
}

// 초기 상태
export const authStore = new Store<authState>({
	isAuthenticated: false,
});

// 이 함수는 훅이 아니므로 어디서든 호출 가능
export function getIsAuthenticated() {
	return authStore.state.isAuthenticated;
}

export default function useAuth() {
	// const navigate = useNavigate();
	const isAuthenticated = useStore(authStore, (state) => state.isAuthenticated);

	function setIsAuthenticated(isAuthenticated: authState["isAuthenticated"]) {
		// console.log(lang);
		authStore.setState((prev) => ({ ...prev, isAuthenticated }));
	}

	function login(token: string, redirectPath = "/dashboard") {
		apiClient.setAccessToken(token);
		setIsAuthenticated(true);
		// // 로그인 후 지정된 경로로 이동
		// navigate({ to: redirectPath });
	}

	function logout(redirectPath = "/login") {
		apiClient.clearTokens();
		setIsAuthenticated(false);
		// // 로그아웃 후 지정된 경로로 이동
		// navigate({ to: redirectPath });
	}

	return {
		isAuthenticated,
		login,
		logout,
	};
}
