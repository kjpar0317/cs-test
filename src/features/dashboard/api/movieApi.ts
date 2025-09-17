import type { PopularMoviesResponse } from "../types/movie";

import apiClient from "@/utils/apiClient";

export const movieApi = {
	getMovieList: async () => {
		const response = await apiClient.get<PopularMoviesResponse>(
			"https://api.themoviedb.org/3/movie/popular?api_key=22478a88b22311a5249584b2c23d6a3d",
		);
		return response;
	},
};
