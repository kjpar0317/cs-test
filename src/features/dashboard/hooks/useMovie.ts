import { useQuery } from "@tanstack/react-query";

import { movieApi } from "@/features/dashboard/api/movie-api";
import { movieKeys } from "../constants/query-keys";

export default function useMovie() {
	const { data: movieData, isLoading: isMovieLoading } = useQuery({
		queryKey: movieKeys.lists(),
		queryFn: async () => movieApi.getMovieList(),
	});

	return {
		isMovieLoading,
		movieData,
	};
}
