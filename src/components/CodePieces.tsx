import { Stack, Text } from "@chakra-ui/react";
import React from "react";
import SectionTitle from "./SectionTitle";

export const CodePieces = () => {
  return (
    <Stack
      id="contact"
      minH={"100vh"}
      mt={"0 !important"}
      pt={"10vh"}
      bg={"gray.50"}
    >
      <SectionTitle title="CODE PIECES" />
    </Stack>
  );
};
