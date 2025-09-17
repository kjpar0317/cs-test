export const movieKeys = {
	all: [{ scope: "movie" }] as const,
	lists: () => [...movieKeys.all, "list"] as const,
};
