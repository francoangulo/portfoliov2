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
import logo from "../assets/logo.svg";

function Home() {
    const { text } = useTypewriter({
        words: [
            "Fullstack Web Developer",
            "Frontend Web Developer",
            "Backend Web Developer",
        ],
        loop: 0,
        typeSpeed: 40,
        deleteSpeed: 30,
    });

    return (
        <Stack
            minH={"100vh"}
            maxH={"100vh"}
            id="home"
            alignItems={"flex-start"}
            justifyContent={{ base: "flex-start", lg: "center" }}
            p={"7rem"}
            pl={{ base: "4rem", lg: "9rem" }}
            pr={{ base: "4rem", lg: "7rem" }}
            position={"relative"}
            mt={"0 !important"}
        >
            <Text
                userSelect={"none"}
                flexDir={"row"}
                color={"black"}
                fontSize={"4xl"}
                fontWeight={"bold"}
                className="animate__animated animate__bounce"
                textAlign={"start"}
                h={{ base: "4.5em" }}
            >
                Hey 👋 I'm Franco, <br />
                {text}
                <Cursor />
            </Text>

            <Link
                href="#about"
                _hover={{ textDecor: "none" }}
                mt={"1rem !important"}
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
                position={"absolute"}
                bottom={5}
                left={"5%"}
                w={"fit-content"}
                flexDir={"row"}
                columnGap={"3rem"}
            >
                <Link
                    href="https://www.linkedin.com/in/franco-angulo/"
                    target={"_blank"}
                    _hover={{ textDecor: "none" }}
                >
                    <Button
                        display={{ base: "none", lg: "flex" }}
                        className="outlinebuttonfillbottom"
                        _focus={{ outline: "none" }}
                        leftIcon={<FaLinkedin />}
                        bg={"transparent"}
                        border={"1px"}
                        borderColor={"purple.300"}
                        borderRadius={"full"}
                        color={"paramount"}
                        minW={"8rem"}
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
                    <Button
                        display={{ base: "none", lg: "flex" }}
                        className="outlinebuttonfillbottom"
                        _focus={{ outline: "none" }}
                        mt={"0 !important"}
                        leftIcon={<FaGithub />}
                        bg={"transparent"}
                        border={"1px"}
                        borderColor={"purple.300"}
                        borderRadius={"full"}
                        color={"paramount"}
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
                        display={{ base: "none", lg: "flex" }}
                        className="outlinebuttonfillbottom"
                        _focus={{ outline: "none" }}
                        mt={"0 !important"}
                        leftIcon={<SiGmail />}
                        borderRadius={"full"}
                        bg={"transparent"}
                        border={"1px"}
                        borderColor={"purple.300"}
                        color={"paramount"}
                        minW={"8rem"}
                        _hover={{ bg: "purple.100" }}
                    >
                        Gmail
                    </Button>
                </Link>
            </Stack>
        </Stack>
    );
}

export default Home;
