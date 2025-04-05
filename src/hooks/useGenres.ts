import genres from "../data/genres.ts";
// import useData from "./useData";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// use static data rather than querying API as rarely changes
const useGenres = () => ({ data: genres, error: null, isLoading: false }); // useData<Genre>("/genres");

export default useGenres;
