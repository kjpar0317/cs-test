import { useQuery } from "@tanstack/react-query";

import { movieApi } from "@/features/dashboard/api/movieApi";
import { movieKeys } from "../constants/queryKeys";

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
