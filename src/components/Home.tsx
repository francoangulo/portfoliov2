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

function Home() {
    return (
        <Stack
            h="100vh"
            id="home"
            alignItems={"flex-start"}
            justifyContent={"center"}
            p={"7rem"}
            position={"relative"}
        >
            <Text
                color={"black"}
                fontSize={"4xl"}
                fontWeight={"bold"}
                className="animate__animated animate__bounce"
            >
                Hello 👋 I'm Franco, Full Stack Web Developer
            </Text>
            <Link href="#about" _hover={{ textDecor: "none" }}>
                <Button
                    minW={"7rem"}
                    _hover={{ bg: "purple.300" }}
                    bg={"purple.200"}
                    color={"paramount"}
                    _focus={{ outline: "none" }}
                    fontWeight={"bold"}
                    borderRadius={"full"}
                >
                    About
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
                <Button
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

                <Button
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

                <Button
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
            </Stack>
        </Stack>
    );
}

export default Home;
