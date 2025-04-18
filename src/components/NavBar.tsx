import { HStack } from "@chakra-ui/react";
import ColourModeSwitch from "./ColourModeSwitch";
import SearchInput from "./SearchInput";
import Logo from "./Logo";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Logo />
      <SearchInput />
      <ColourModeSwitch />
    </HStack>
  );
};

export default NavBar;
