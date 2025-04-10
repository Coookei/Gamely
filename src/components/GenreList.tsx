import {
  Button,
  Card,
  CardBody,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import useGameQueryStore from "../store";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);

  if (error) return null;
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {isLoading &&
          skeletons.map((skeleton) => (
            <ListItem key={skeleton} paddingY="5px">
              <Card>
                <HStack paddingX={3}>
                  <Skeleton boxSize="32px" borderRadius={8}></Skeleton>
                  <CardBody>
                    <SkeletonText fontSize="lg" />
                  </CardBody>
                </HStack>
              </Card>
            </ListItem>
          ))}

        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                objectFit="cover"
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
                onClick={() => setSelectedGenreId(genre.id)}
                fontSize="lg"
                variant="link"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
