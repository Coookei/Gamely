import { Button, Grid, GridItem, Show } from "@chakra-ui/react";
import { useColorMode } from "./components/ui/color-mode";
import { useEffect } from "react";

function App() {
  // const { colorMode, toggleColorMode } = useColorMode();
  // useEffect(() => {
  //   if (colorMode === "dark") toggleColorMode();
  // }, [colorMode, toggleColorMode]);

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area="nav" bg="coral">
          Nav
        </GridItem>

        <GridItem
          area="aside"
          bg="gold"
          display={{ base: "none", lg: "block" }}
        >
          Aside
        </GridItem>

        <GridItem area="main" bg="dodgerblue">
          Main
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
