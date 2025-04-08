import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import genres from "../data/genres.ts";
import APIClient from "../services/api-client.ts";

const apiClient = new APIClient<Genre>("/genres");

ms(1);

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    initialData: genres, // use static data for initial load
  });

export default useGenres;
