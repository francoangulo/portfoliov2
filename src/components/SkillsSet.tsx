import { Box, Image, Stack, Tag, Text } from "@chakra-ui/react";
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
                pt={{ base: "2rem", lg: "1rem" }}
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
                    top={"52%"}
                />

                <Stack
                    id="ball"
                    bg={"purple.200"}
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
                justifyContent={{ lg: "flex-start" }}
                alignItems={"center"}
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
                    alignItems={{ base: "center", lg: "flex-start" }}
                    columnGap={"3rem"}
                    mt={"0 !important"}
                    pr={{ base: "0", lg: "3rem" }}
                    wrap={{ base: "nowrap", lg: "wrap" }}
                    rowGap={"2rem"}
                >
                    {skills.map((tool: any, index: number) => (
                        <Stack
                            key={`${index}${tool.name}`}
                            mt={"0 !important"}
                            w={"fit-content"}
                            h={"fit-content"}
                            alignItems={{ base: "center" }}
                        >
                            <Box
                                mt={"0 !important"}
                                borderRadius={"full"}
                                justifyContent={"center"}
                                alignItems={"center"}
                                display={"flex"}
                                w={{ base: "65px", lg: "90px" }}
                                h={{ base: "65px", lg: "90px" }}
                                boxShadow={"lg"}
                                bg={"white"}
                                _hover={{ boxShadow: "2xl" }}
                                transition={"all .3s"}
                            >
                                <Image
                                    src={tool.logo}
                                    w={{ base: "35px", lg: "50px" }}
                                    borderRadius={"10%"}
                                />
                            </Box>
                            <Tag colorScheme={"purple"}>{tool.name}</Tag>
                        </Stack>
                    ))}
                </Stack>
            </Stack>
        </Stack>
    );
}

export default SkillsSet;
