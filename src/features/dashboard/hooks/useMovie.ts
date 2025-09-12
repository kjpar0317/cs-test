import type { PopularMoviesResponse } from "@/features/dashboard/types/movie";

import { useQuery } from "@tanstack/react-query";

import apiClient from "@/utils/api-client";

export default function useMovie() {
	const { data: movieData, isLoading: isMovieLoading } = useQuery({
		queryKey: ["movie", "popular"],
		queryFn: async () => {
			const response = await apiClient.get<PopularMoviesResponse>(
				"https://api.themoviedb.org/3/movie/popular?api_key=22478a88b22311a5249584b2c23d6a3d",
			);
			return response;
		},
	});

	return {
		isMovieLoading,
		movieData,
	};
}
