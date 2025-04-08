import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client.ts";
import { FetchResponse } from "../services/api-client.ts";
import platforms from "../data/platforms.ts";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient.get<FetchResponse<Platform>>("/platforms/lists/parents").then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24 hrs
    initialData: { count: 0, results: platforms },
  });

export default usePlatforms;
