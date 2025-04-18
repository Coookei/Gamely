import { HStack, Image } from "@chakra-ui/react";
import ColourModeSwitch from "./ColourModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";
import logo from "../assets/logo.webp";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Link to={"/"}>
        <Image src={logo} boxSize="60px" minW="60px" />
      </Link>
      <SearchInput />
      <ColourModeSwitch />
    </HStack>
  );
};

export default NavBar;
