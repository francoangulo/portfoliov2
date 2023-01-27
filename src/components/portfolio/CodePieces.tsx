import { Stack, Text } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { CodePieceCard } from "./CodePieceCard";
import SectionTitle from "./SectionTitle";
import { randomColorHex, randomPastelColorHex } from "../../constants";

export const CodePieces = () => {
  return (
    <Stack
      id="code-pieces"
      minH={"100vh"}
      mt={"0 !important"}
      pt={"10vh"}
      bg={"gray.50"}
      alignItems="center"
      rowGap={"24px"}
    >
      <SectionTitle title="CODE PIECES" />
      <Text color={"gray.500"}>
        // This section is for some pieces of code I found useful and
        interesting. Check them out!
      </Text>

      <Link to="codes/home">
        <Text
          mt="10px"
          bg={"purple.100"}
          w="fit-content"
          p="5px 30px"
          borderRadius={"10px"}
        >
          Visit <ArrowForwardIcon />
        </Text>
      </Link>
      <Stack
        mt="0 !important"
        display={"flex"}
        flexDir="row"
        justifyContent={"center"}
        h="100%"
        flex={1}
        alignItems="center"
        pb="20%"
        columnGap={"20px"}
      >
        <CodePieceCard
          path="/codes/random-color-generator"
          title="Random Color Generator"
          description="This piece of code allows to generate a random color in HEX format"
          type={"colorDot"}
          colorHex={randomColorHex}
        />
        <CodePieceCard
          path="/codes/random-pastel-color-generator"
          title="Random Pastel Color Generator"
          description="This piece of code allows to generate a random pastel color in HEX format"
          type={"colorDot"}
          colorHex={randomPastelColorHex}
        />
        <CodePieceCard
          path="/codes/css-image-tinter"
          title="CSS Image Tinter"
          description="This piece of CSS allows to tint a SVG image"
          type="icon"
        />
      </Stack>
    </Stack>
  );
};
