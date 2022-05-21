import { Image, Stack, Text, Link, Button } from "@chakra-ui/react";
import React from "react";
import profile from "../assets/profile.png";
import resume from "../assets/FrancoAngulo.pdf";
import SectionTitle from "./SectionTitle";

function About() {
    return (
        <Stack
            pt={"10vh"}
            mt="0 !important"
            id="about"
            minH={"100vh"}
            maxH={"100vh"}
            bg="gray.100"
            alignItems={"center"}
            // justifyContent={"center"}
            boxShadow={"lg"}
        >
            <SectionTitle title="ABOUT ME" />

            <Stack
                w={"100%"}
                h={"100%"}
                p={"2rem 7rem 4rem 7rem"}
                mt="0 !important"
            >
                <Stack flexDir={"row"} h={"100%"}>
                    <Stack
                        w={"30%"}
                        minH={"100%"}
                        id="aboutPicCont"
                        justifyContent={"center"}
                        userSelect={"none"}
                    >
                        <Image
                            src={profile}
                            h={"100%"}
                            objectFit={"cover"}
                            bg="purple.200"
                            borderRadius={"20%"}
                        />
                    </Stack>
                    <Stack
                        w={"70%"}
                        id="aboutDescCont"
                        alignItems={"center"}
                        mt="0 !important"
                        rowGap={"2rem"}
                        minH={"100%"}
                    >
                        <Text
                            w={"70%"}
                            fontSize={"1.2rem"}
                            textAlign={"justify"}
                        >
                            The world of programming fascinates me. I always
                            seek to learn and I love the idea of being able to
                            live from what I am passionate about. This is why I
                            trained as a Full Stack Developer. Always
                            responsible, well predisposed and committed to my
                            tasks. Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Nulla maiores labore corrupti
                            fugiat sed magnam ea soluta id repudiandae eius est
                            aliquid, ipsa, a consequuntur eligendi harum quod
                            impedit reprehenderit! Maiores libero nobis in
                            natus, qui minima totam consequuntur nisi ipsa harum
                            non provident amet quasi, molestiae, ea tempore
                            eaque aliquid
                        </Text>
                        <Stack
                            flexDir={"row"}
                            w={"70%"}
                            justifyContent={"space-evenly"}
                            userSelect={"none"}
                        >
                            <Link
                                _hover={{ textDecor: "none" }}
                                href={resume}
                                target={"_blank"}
                            >
                                <Button
                                    _hover={{ bg: "purple.300" }}
                                    bg={"purple.200"}
                                    color={"paramount"}
                                    _focus={{ outline: "none" }}
                                    fontWeight={"bold"}
                                    borderRadius={"full"}
                                >
                                    View Resume
                                </Button>
                            </Link>
                            <Link
                                mt={"0 !important"}
                                _hover={{ textDecor: "none" }}
                                href={
                                    "https://certificates.soyhenry.com/cert?id=950acd16-3b5c-4676-b92e-aecb575a0cf3"
                                }
                                target={"_blank"}
                            >
                                <Button
                                    borderRadius={"full"}
                                    _focus={{ outline: "none" }}
                                    fontWeight={"bold"}
                                    bg={"transparent"}
                                    border={"1px"}
                                    borderColor={"purple.300"}
                                    color={"paramount"}
                                    _hover={{ bg: "purple.100" }}
                                >
                                    View Certificate
                                </Button>
                            </Link>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    );
}

export default About;
