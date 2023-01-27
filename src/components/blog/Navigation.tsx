import { Box, Stack, Text } from "@chakra-ui/react";
import { IoMdArrowBack } from "react-icons/io";
import { NavLink } from "react-router-dom";

export const Navigation = () => {
  return (
    <Stack
      mt="0 !important"
      w={"25%"}
      h="100%"
      bg={"gray.100"}
      boxSizing="border-box"
      display={"flex"}
      flexDirection="column"
      p={"16px"}
      flexShrink={0}
    >
      <Box display={"flex"} flexDirection="row" mb={5} p="4px">
        <NavLink to={"/"} className="go-back-button">
          <IoMdArrowBack size={25} />
          <Text>Back</Text>
        </NavLink>
      </Box>

      <NavLink
        className={({ isActive }) => (isActive ? "nav nav-active" : "nav")}
        to="/codes/home"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "nav nav-active" : "nav")}
        to="/codes/random-color-generator"
      >
        Random Color Generator
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "nav nav-active" : "nav")}
        to="/codes/random-pastel-color-generator"
      >
        Random Pastel Color Generator
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "nav nav-active" : "nav")}
        to="/codes/css-image-tinter"
      >
        CSS Image Tinter
      </NavLink>
    </Stack>
  );
};
