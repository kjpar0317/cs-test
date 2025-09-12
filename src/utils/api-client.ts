import type { KyInstance } from "ky";
import ky from "ky";

type RequestBody = Record<string, unknown> | unknown | null | undefined;
type HttpMethod = "get" | "post" | "put" | "delete" | "patch";

// API Client configuration
const apiClient = {
	// Base URL for your backend API
	baseURL: ".",

	// Token storage (using localStorage for this example)
	getAccessToken: () => localStorage.getItem("accessToken"),
	getRefreshToken: () => localStorage.getItem("refreshToken"),
	setAccessToken: (token: string) => localStorage.setItem("accessToken", token),
	setRefreshToken: (token: string) =>
		localStorage.setItem("refreshToken", token),
	clearTokens: () => {
		localStorage.removeItem("accessToken");
		localStorage.removeItem("refreshToken");
	},

	// Initialize Ky instance with default headers
	client: ky.create({
		// prefixUrl: "https://your-api-base-url.com",
		timeout: 10000,
		hooks: {
			beforeRequest: [
				(request) => {
					const token = apiClient.getAccessToken();
					if (token) {
						request.headers.set("Authorization", `Bearer ${token}`);
					}
				},
			],
		},
	}) as KyInstance,

	// Refresh token function
	async refreshToken() {
		try {
			const refreshToken = this.getRefreshToken();
			if (!refreshToken) {
				throw new Error("No refresh token available");
			}

			const response: { accessToken: string; refreshToken?: string } =
				await this.client
					.post("auth/refresh", {
						json: { refreshToken },
					})
					.json();

			this.setAccessToken(response.accessToken);
			if (response.refreshToken) {
				this.setRefreshToken(response.refreshToken);
			}

			return response.accessToken;
		} catch (error) {
			this.clearTokens();
			throw error;
		}
	},

	// Main API request function with retry on token expiration
	async request<T = unknown>(
		method: HttpMethod,
		endpoint: string,
		options = {},
	) {
		try {
			const response = await this.client[method](endpoint, {
				...options,
				retry: {
					limit: 1,
					methods: ["get", "post", "put", "delete", "patch"],
					statusCodes: [401],
				},
				hooks: {
					beforeRetry: [
						async ({ request, error }) => {
							// Only attempt token refresh on 401 error
							if (
								error &&
								typeof error === "object" &&
								"response" in error &&
								"response" in error &&
								error.response instanceof Response &&
								error.response?.status === 401
							) {
								await this.refreshToken();
								const newToken = this.getAccessToken();
								if (newToken) {
									request.headers.set("Authorization", `Bearer ${newToken}`);
								}
							}
						},
					],
				},
			});

			return response.json() as T;
		} catch (error: unknown) {
			if (
				error &&
				typeof error === "object" &&
				"response" in error &&
				"response" in error &&
				error.response instanceof Response &&
				error.response.status === 401
			) {
				// Handle unauthorized error after refresh attempt
				this.clearTokens();
				throw new Error("Authentication failed. Please login again.");
			}
			throw error;
		}
	},

	// Convenience methods for common HTTP verbs
	get<T = unknown>(endpoint: string, options = {}) {
		return this.request("get", endpoint, options) as T;
	},
	post<T = unknown>(endpoint: string, data: RequestBody, options = {}) {
		return this.request("post", endpoint, { ...options, json: data }) as T;
	},
	put<T = unknown>(endpoint: string, data: RequestBody, options = {}) {
		return this.request("put", endpoint, { ...options, json: data }) as T;
	},
	delete<T = unknown>(endpoint: string, options = {}) {
		return this.request("delete", endpoint, options) as T;
	},
	patch<T = unknown>(endpoint: string, data: RequestBody, options = {}) {
		return this.request("patch", endpoint, { ...options, json: data }) as T;
	},
};

// Export the client for use in React components
export default apiClient;
