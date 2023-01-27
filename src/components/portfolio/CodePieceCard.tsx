import { Image, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface CodePiece {
  title: string;
  description: string;
  path: string;
  type?: string;
  colorHex?: string;
}

export const CodePieceCard = ({
  title,
  description,
  path,
  type,
  colorHex,
}: CodePiece) => {
  return (
    <Stack
      mt={"0 !important"}
      display={"flex"}
      flexDir="column"
      bg="gray.100"
      w="fit-content"
      borderRadius={20}
      p={"20px"}
      maxW="200px"
      h={"fit-content"}
      fontFamily="exo"
      minH={"180px"}
    >
      <Link to={path}>
        <Text>{title}</Text>
        <Text fontSize={"13px"} color={"gray.600"}>
          {description}
        </Text>
        {type === "colorDot" && (
          <Stack
            m="auto !important"
            mt={"10px !important"}
            w={"20px"}
            h="20px"
            borderRadius={"50%"}
            backgroundColor={colorHex}
            ml={"10px"}
          />
        )}
        {type === "icon" && (
          <Image
            src="/src/assets/skills.svg"
            m="auto !important"
            mt={"10px !important"}
            w={"30px"}
            h="30px"
            borderRadius={"50%"}
            backgroundColor={colorHex}
            ml={"10px"}
            className="tinted-image"
          />
        )}
      </Link>
    </Stack>
  );
};
