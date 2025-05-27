import { SimpleGrid, Spinner, Text, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useGames from "../hooks/useGames.ts";
import GameCard from "./GameCard.tsx";
import GameCardContainer from "./GameCardContainer.tsx";
import GameCardSkeleton from "./GameCardSkeleton.tsx";

const API_URL = import.meta.env.VITE_API_URL;

const GameGrid = () => {
  if (!API_URL)
    return <Text color="red.500">VITE_API_URL is not set in your environment variables.</Text>;

  const { data, error, isLoading, fetchNextPage, hasNextPage } = useGames();

  const responsiveColumns = { sm: 1, md: 2, lg: 3, xl: 4 };

  const skeletons = [];
  const columnNum = useBreakpointValue(responsiveColumns) || 1;
  if (isLoading) {
    for (let i = 0; i < columnNum * 2; i++) {
      skeletons.push(i);
    }
  }

  if (error) return <Text color="red.500">{error.message}</Text>;

  const fetchedGamesCount =
    data?.pages.reduce((total, page) => total + page.results?.length, 0) || 0;

  return (
    <InfiniteScroll
      dataLength={fetchedGamesCount}
      hasMore={hasNextPage}
      next={() => fetchNextPage()}
      loader={<Spinner />}
    >
      <SimpleGrid columns={responsiveColumns} padding="10px" spacing={6}>
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}

        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results?.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCard game={game} />
              </GameCardContainer>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
    </InfiniteScroll>
  );
};

export default GameGrid;
