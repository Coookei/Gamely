import { Box, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.webp";

const Logo = () => {
  return (
    <Box boxSize="60px" minW={"60px"}>
      <Link to={"/"}>
        <Image src={logo} />
      </Link>
    </Box>
  );
};

export default Logo;
