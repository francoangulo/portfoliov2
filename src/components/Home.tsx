import {
    Link,
    Image,
    Stack,
    Text,
    IconButton,
    Box,
    Button,
} from "@chakra-ui/react";
import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Typewriter, useTypewriter, Cursor } from "react-simple-typewriter";
import computer from "../assets/computer.png";

function Home() {
    const { text } = useTypewriter({
        words: [
            "Fullstack Web Developer.",
            "Frontend Web Developer.",
            "Backend Web Developer.",
        ],
        loop: 0,
        typeSpeed: 25,
        deleteSpeed: 25,
        delaySpeed: 3000,
    });

    return (
        <Stack
            minH={"100vh"}
            maxH={"100vh"}
            id="home"
            alignItems={"flex-start"}
            justifyContent={{ base: "flex-start", lg: "center" }}
            p={"7rem"}
            // pl={{ base: "4rem", lg: "9rem" }}
            // pr={{ base: "4rem", lg: "7rem" }}
            position={"relative"}
            mt={"0 !important"}
        >
            <Stack
                w={"100%"}
                h={"100%"}
                position={"absolute"}
                left="0"
                top="0"
                mt="0 !important"
                justifyContent={"center"}
                alignItems={"center"}
                p={"3rem 3rem 0 3rem"}
                bg={"whiteAlpha.700"}
            >
                <Stack
                    w={"fit-content"}
                    h={"fit-content"}
                    color={"white"}
                    id="imagecontainer"
                    position={"relative"}
                >
                    <Image
                        src={computer}
                        w={"fit-content"}
                        top={"0"}
                        left={"0"}
                        zIndex={0}
                    />
                    <Stack
                        w={"100%"}
                        h={"100%"}
                        position={"absolute"}
                        color={"white"}
                        pl={"15%"}
                        pr={"15%"}
                        pt={"5.8%"}
                        pb={"10%"}
                        justifyContent={"space-between"}
                    >
                        <Text
                            userSelect={"none"}
                            flexDir={"row"}
                            fontSize={{ base: "2xl", md: "4xl" }}
                            fontWeight={"bold"}
                            className="animate__animated animate__bounce"
                            textAlign={"start"}
                        >
                            {">"} Hey 👋 I'm Franco, <br />
                            <span style={{ color: "transparent" }}>{"> "}</span>
                            {text}
                            <Cursor />
                        </Text>
                        <Link
                            href="#about"
                            _hover={{ textDecor: "none" }}
                            mt={"0 !important"}
                        >
                            <Button
                                className="solidbuttonfillbottom"
                                minW={"7rem"}
                                _hover={{ bg: "purple.300" }}
                                bg={"purple.200"}
                                color={"paramount"}
                                _focus={{ outline: "none" }}
                                fontWeight={"bold"}
                                borderRadius={"full"}
                            >
                                Know more
                            </Button>
                        </Link>
                        <Stack
                            w={"100%"}
                            flexDir={"row"}
                            justifyContent={"space-evenly"}
                            justifySelf={"flex-end"}
                            alignSelf={"flex-end"}
                            display={{ base: "none", sm: "flex" }}
                        >
                            <Link
                                href="https://www.linkedin.com/in/franco-angulo/"
                                target={"_blank"}
                                _hover={{ textDecor: "none" }}
                            >
                                <Button
                                    className="outlinecomputerfillbottom"
                                    _focus={{ outline: "none" }}
                                    leftIcon={<FaLinkedin />}
                                    bg={"transparent"}
                                    border={"1px"}
                                    borderColor={"purple.300"}
                                    borderRadius={"full"}
                                    minW={{ lg: "8rem" }}
                                    _hover={{ bg: "purple.100" }}
                                    value={"PEDO"}
                                >
                                    LinkedIn
                                </Button>
                            </Link>
                            <Link
                                href="https://github.com/francoa7"
                                target={"_blank"}
                                mt={"0 !important"}
                                _hover={{ textDecor: "none" }}
                            >
                                <Button
                                    className="outlinecomputerfillbottom"
                                    _focus={{ outline: "none" }}
                                    mt={"0 !important"}
                                    leftIcon={<FaGithub />}
                                    bg={"transparent"}
                                    border={"1px"}
                                    borderColor={"purple.300"}
                                    borderRadius={"full"}
                                    minW={"8rem"}
                                    _hover={{ bg: "purple.100" }}
                                >
                                    Github
                                </Button>
                            </Link>
                            <Link
                                href="mailto:francoangulo2001@gmail.com"
                                target={"_blank"}
                                mt={"0 !important"}
                                _hover={{ textDecor: "none" }}
                            >
                                <Button
                                    className="outlinecomputerfillbottom"
                                    _focus={{ outline: "none" }}
                                    mt={"0 !important"}
                                    leftIcon={<SiGmail />}
                                    borderRadius={"full"}
                                    bg={"transparent"}
                                    border={"1px"}
                                    borderColor={"purple.300"}
                                    minW={"8rem"}
                                    _hover={{ bg: "purple.100" }}
                                >
                                    Gmail
                                </Button>
                            </Link>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    );
}

export default Home;
