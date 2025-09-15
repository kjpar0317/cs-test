import { Store } from "@tanstack/store";

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

export function setIsAuthenticated(
	isAuthenticated: authState["isAuthenticated"],
) {
	authStore.setState((prev) => ({ ...prev, isAuthenticated }));
}
