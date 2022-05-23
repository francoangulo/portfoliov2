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
import phone from "../assets/phone2.png";

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
                bg={"whiteAlpha.700"}
                p={{ base: "3rem 1rem", md: "3rem 3rem 0 3rem" }}
            >
                <Stack
                    w={"fit-content"}
                    h={"fit-content"}
                    color={"white"}
                    id="imagecontainer"
                    position={"relative"}
                    alignItems={"center"}
                >
                    <Image
                        display={{ base: "none", md: "flex" }}
                        src={computer}
                        w={{ md: "fit-content", lg: "70vw" }}
                        top={"0"}
                        left={"0"}
                        zIndex={0}
                    />
                    <Image
                        borderRadius={"10px"}
                        boxShadow={"xl"}
                        display={{ base: "flex", md: "none" }}
                        src={phone}
                        h={"80vh"}
                        top={"0"}
                        left={"0"}
                        zIndex={0}
                    />
                    <Stack
                        w={"100%"}
                        h={"100%"}
                        position={"absolute"}
                        color={"white"}
                        p={{ base: "22% 10%", md: "5.8% 15% 10% 15%" }}
                        justifyContent={"space-between"}
                    >
                        <Text
                            userSelect={"none"}
                            flexDir={"row"}
                            fontSize={{ base: "xl", md: "4xl" }}
                            fontWeight={"bold"}
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
                            //     display={{ base: "none", sm: "flex" }}
                        >
                            <Link
                                href="https://www.linkedin.com/in/franco-angulo/"
                                target={"_blank"}
                                _hover={{ textDecor: "none" }}
                            >
                                <IconButton
                                    display={{ base: "flex", md: "none" }}
                                    icon={<FaLinkedin />}
                                    aria-label="linkedin"
                                    className="outlinecomputerfillbottom"
                                    _focus={{ outline: "none" }}
                                    bg={"transparent"}
                                    border={"1px"}
                                    borderColor={"purple.300"}
                                    borderRadius={"full"}
                                    _hover={{ bg: "purple.100" }}
                                />

                                <Button
                                    display={{ base: "none", md: "flex" }}
                                    className="outlinecomputerfillbottom"
                                    _focus={{ outline: "none" }}
                                    leftIcon={<FaLinkedin />}
                                    bg={"transparent"}
                                    border={"1px"}
                                    borderColor={"purple.300"}
                                    borderRadius={"full"}
                                    minW={{ lg: "8rem" }}
                                    _hover={{ bg: "purple.100" }}
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
                                <IconButton
                                    display={{ base: "flex", md: "none" }}
                                    icon={<FaGithub />}
                                    aria-label="linkedin"
                                    className="outlinecomputerfillbottom"
                                    _focus={{ outline: "none" }}
                                    bg={"transparent"}
                                    border={"1px"}
                                    borderColor={"purple.300"}
                                    borderRadius={"full"}
                                    _hover={{ bg: "purple.100" }}
                                />
                                <Button
                                    display={{ base: "none", md: "flex" }}
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
                                <IconButton
                                    display={{ base: "flex", md: "none" }}
                                    icon={<SiGmail />}
                                    aria-label="linkedin"
                                    className="outlinecomputerfillbottom"
                                    _focus={{ outline: "none" }}
                                    bg={"transparent"}
                                    border={"1px"}
                                    borderColor={"purple.300"}
                                    borderRadius={"full"}
                                    _hover={{ bg: "purple.100" }}
                                />
                                <Button
                                    display={{ base: "none", md: "flex" }}
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
