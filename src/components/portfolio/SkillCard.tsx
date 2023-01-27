import { Box, Image, Stack, Tag } from "@chakra-ui/react";

interface Skills {
  name: string;
  logo: string;
}

export const SkillCard = ({ name, logo }: Skills) => {
  return (
    <Stack mt={"0 !important"} justifyContent={"center"} alignItems="center">
      <Box
        mt={"0 !important"}
        borderRadius={"full"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        w={{ base: "65px", lg: "90px" }}
        h={{ base: "65px", lg: "90px" }}
        boxShadow={"lg"}
        bg={"white"}
        _hover={{ boxShadow: "2xl" }}
        transition={"all .3s"}
      >
        <Image
          src={logo}
          alt={"Skill logo"}
          w={{ base: "35px", lg: "50px" }}
          h={"auto"}
          borderRadius={"10%"}
        />
      </Box>
      <Tag colorScheme={"purple"} justifyContent={"center"}>
        {name}
      </Tag>
    </Stack>
  );
};
