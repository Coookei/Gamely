import { SimpleGrid, Text, useBreakpointValue } from "@chakra-ui/react";
import GameCard from "./GameCard.tsx";
import GameCardContainer from "./GameCardContainer.tsx";
import GameCardSkeleton from "./GameCardSkeleton.tsx";
import { GameQuery } from "../App.tsx";
import useGames from "../hooks/useGames.ts";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);

  const responsiveColumns = { sm: 1, md: 2, lg: 3, xl: 4 };

  const skeletons = [];
  const columnNum = useBreakpointValue(responsiveColumns) || 1;
  if (isLoading) {
    for (let i = 0; i < columnNum * 2; i++) {
      skeletons.push(i);
    }
  }

  if (error) return <Text>{error.message}</Text>;

  return (
    <SimpleGrid columns={responsiveColumns} padding="10px" spacing={6}>
      {isLoading &&
        skeletons.map((skeleton) => (
          <GameCardContainer key={skeleton}>
            <GameCardSkeleton />
          </GameCardContainer>
        ))}

      {data?.results?.map((game) => (
        <GameCardContainer key={game.id}>
          <GameCard game={game}></GameCard>
        </GameCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
