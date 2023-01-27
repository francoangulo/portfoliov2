import { Box, Stack, Text } from "@chakra-ui/react";
import { randomPastelColorHex } from "../../constants";
export const RandomPastelColor = () => {
  return (
    <Stack className="code-piece-wrapper">
      <Text color={"gray.500"} fontWeight="bold" fontSize={"1.2rem"} w="100%">
        This function returns a random pastel color string in Hex format.
        <Text display={"flex"} alignItems="center" columnGap={".5rem"}>
          Example:
          <Stack
            w={"20px"}
            h="20px"
            borderRadius={"50%"}
            backgroundColor={randomPastelColorHex}
            ml={"10px"}
          />
          {randomPastelColorHex}
        </Text>
      </Text>
      <pre className="code">
        <code>
          {`export const getRandomPastelColor = () => {
  const h = Math.floor(Math.random() * 360);
  const s = 100;
  const l = 87.5;

  const hDecimal = l / 100;
  const a = (s * Math.min(hDecimal, 1 - hDecimal)) / 100;
  const f = (n) => {
    const k = (n + h / 30) % 12;
    const color = hDecimal - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);

    // Convert to Hex and prefix with "0" if required
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, "0");
  };
  return \`#\${f(0)}\${f(8)}\${f(4)}\`;
};`}
        </code>
      </pre>
    </Stack>
  );
};
