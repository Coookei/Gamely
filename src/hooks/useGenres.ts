import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import genres from "../data/genres.ts";
import APIClient from "../services/api-client.ts";
import { Genre } from "../entities/Genre.ts";

const apiClient = new APIClient<Genre>("/genres");

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    initialData: genres, // use static data for initial load
  });

export default useGenres;
