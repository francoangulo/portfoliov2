import { Stack, Text } from "@chakra-ui/react";
import { randomColorHex } from "../../constants";
export const RandomColor = () => {
  return (
    <Stack className="code-piece-wrapper">
      <Text color={"gray.500"} fontWeight="bold" fontSize={"1.2rem"} w="100%">
        This function returns a random color string in Hex format.
        <Text display={"flex"} alignItems="center" columnGap={".5rem"}>
          Example:
          <Stack
            w={"20px"}
            h="20px"
            borderRadius={"50%"}
            backgroundColor={randomColorHex}
            ml={"10px"}
          />
          {randomColorHex}
        </Text>
      </Text>
      <pre className="code">
        <code>
          {`export const getRandomColor = () =>
            \`#\${Math.floor(Math.random() * 16777215)
            .toString(16)
            .padStart(6, 0)};\``}
        </code>
      </pre>
    </Stack>
  );
};
