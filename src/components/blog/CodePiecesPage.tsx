import { Stack, Text } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { Navigation } from "./Navigation";

export const CodePiecesPage = () => {
  return (
    <Stack
      mt="0 !important"
      w="100%"
      h="100vh"
      display={"flex"}
      flexDirection="row"
    >
      <Navigation />
      <Stack mt="0 !important" w="80%" h="100vh">
        <Outlet />
      </Stack>
    </Stack>
  );
};
