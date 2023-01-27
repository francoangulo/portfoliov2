import { Stack, Text } from "@chakra-ui/react";
import React from "react";
import { randomPastelColorHex } from "../../constants";

export const ImageTinter = () => {
  return (
    <Stack className="code-piece-wrapper">
      <Text color={"gray.500"} fontWeight="bold" fontSize={"1.2rem"} w="100%">
        This is a piece of CSS code that allows to tint SVG images
      </Text>
      <pre className="code">
        <code>{`Under construction method`}</code>
      </pre>
    </Stack>
  );
};
