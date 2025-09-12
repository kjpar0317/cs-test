import useMovie from "../hooks/useMovie";

export default function MovieResult() {
	const { movieData } = useMovie();

	return (
		<div>
			{movieData?.results.map((movie) => (
				<div key={movie.id}>
					<img
						src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
						alt={movie.title}
					/>
				</div>
			))}
		</div>
	);
}
