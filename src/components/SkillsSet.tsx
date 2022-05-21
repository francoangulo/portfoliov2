import { Box, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import stripe from "../assets/stripe.png";

function SkillsSet({ skills, type }: { skills: any; type: string }) {
    return (
        <Stack
            flexDir={"row"}
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
                flexDir={"row"}
                alignItems={"center"}
            >
                <Stack
                    id="stripe"
                    w={"100%"}
                    h={"5px"}
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

            {/* <Image
                mt={"0 !important"}
                src={stripe}
                position={"absolute"}
                w={"100%"}
                h={"18px"}
                top={"46%"}
                zIndex={-1}
                left={0}
            /> */}
            <Stack
                flexDir={"row"}
                w={"100%"}
                mt={"0 !important"}
                justifyContent={"flex-start"}
                pr={"2.5rem"}
            >
                <Stack
                    w={"15vw"}
                    justifyContent={"center"}
                    alignItems={"flex-start"}
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
                    flexDir={"row"}
                    justifyContent={"flex-start"}
                    columnGap={"3rem"}
                    mt={"0 !important"}
                    pr={"3rem"}
                    wrap={"wrap"}
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
