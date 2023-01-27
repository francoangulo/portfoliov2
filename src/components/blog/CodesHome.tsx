import { Stack, Text } from "@chakra-ui/react";
export const CodesHome = () => {
  return (
    <Stack
      mt="0 !important"
      display={"flex"}
      justifyContent="center"
      alignItems={"center"}
      h="100%"
      p={16}
    >
      <Text
        justifyContent={"center"}
        display="flex"
        flexDirection={"row"}
        textAlign="center"
        paddingBottom={"40%"}
        color={"gray.500"}
        fontWeight="bold"
        fontSize={"1.2rem"}
      >
        Welcome to my codes section! Here you can finde some pieces of code that
        I found interesting and useful while working in some of my projects.
        Take a look!
      </Text>
    </Stack>
  );
};
