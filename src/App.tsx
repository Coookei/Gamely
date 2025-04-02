import { Button } from "@chakra-ui/react";
import { useColorMode } from "./components/ui/color-mode";
import { useEffect } from "react";

function App() {
  // const { colorMode, toggleColorMode } = useColorMode();
  // useEffect(() => {
  //   if (colorMode === "dark") toggleColorMode();
  // }, [colorMode, toggleColorMode]);

  return (
    <>
      <Button colorPalette="blue">Solid</Button>
      <Button colorPalette="blue" variant="surface">
        Surface
      </Button>

      <Button colorPalette="blue" variant="outline">
        Outline
      </Button>
      <Button colorPalette="blue" variant="ghost">
        Ghost
      </Button>
      <Button colorPalette="blue" variant="plain">
        Plain
      </Button>
    </>
  );
}

export default App;
