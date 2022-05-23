import { Box, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import stripe from "../assets/stripe.png";

function SkillsSet({ skills, type }: { skills: any; type: string }) {
    return (
        <Stack
            id="skillset"
            flexDir={{ base: "column", lg: "row" }}
            w={"fit-content"}
            h={"fit-content"}
            position={"relative"}
            mt={"0 !important"}
        >
            <Stack
                pt={"1rem"}
                zIndex={-1}
                w={"100%"}
                h={"100%"}
                position={"absolute"}
                flexDir={{ base: "column", lg: "row" }}
                alignItems={"center"}
            >
                <Stack
                    id="stripe"
                    w={{ base: "5px", lg: "100%" }}
                    h={{ base: "100%", lg: "5px" }}
                    bg={"purple.200"}
                    //   position={"absolute"}
                    top={"52%"}
                />

                <Stack
                    id="ball"
                    bg={"purple.200"}
                    //   position={"absolute"}
                    top={"46%"}
                    right={0}
                    w={"20px"}
                    h={"20px"}
                    borderRadius={"full"}
                    mt={"0 !important"}
                />
            </Stack>

            <Stack
                flexDir={{ base: "column", lg: "row" }}
                w={"100%"}
                mt={"0 !important"}
                justifyContent={"flex-start"}
                pr={{ base: "0", lg: "2.5rem" }}
                pb={{ base: "2.5rem", lg: "0" }}
            >
                <Stack
                    w={{ base: "100%", lg: "15vw" }}
                    justifyContent={"center"}
                    alignItems={{ base: "center", lg: "flex-start" }}
                    mt={"0 !important"}
                >
                    <Text
                        mt={"0 !important"}
                        fontWeight={"bold"}
                        textTransform={"uppercase"}
                    >
                        {type}
                    </Text>
                </Stack>
                <Stack
                    w={"fit-content"}
                    flexDir={{ base: "column", lg: "row" }}
                    justifyContent={"flex-start"}
                    columnGap={"3rem"}
                    mt={"0 !important"}
                    pr={{ base: "0", lg: "3rem" }}
                    wrap={{ base: "nowrap", lg: "wrap" }}
                    rowGap={"2rem"}
                >
                    {skills.map((tool: any) => (
                        <Stack
                            mt={"0 !important"}
                            w={"fit-content"}
                            h={"fit-content"}
                        >
                            <Box
                                mt={"0 !important"}
                                borderRadius={"full"}
                                justifyContent={"center"}
                                alignItems={"center"}
                                display={"flex"}
                                w={"90px"}
                                h={"90px"}
                                boxShadow={"lg"}
                                bg={"white"}
                                _hover={{ boxShadow: "2xl" }}
                                transition={"all .3s"}
                            >
                                <Image
                                    src={tool.logo}
                                    w={"50px"}
                                    borderRadius={"10%"}
                                />
                            </Box>
                            <Text>{tool.name}</Text>
                        </Stack>
                    ))}
                </Stack>
            </Stack>
        </Stack>
    );
}

export default SkillsSet;
