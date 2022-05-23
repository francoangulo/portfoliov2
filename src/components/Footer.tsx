import { IconButton, Image, Link, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import logo from "../assets/logo.svg";
function Footer() {
    return (
        <Stack
            w={"100%"}
            h={"fit-content"}
            bg={"gray.100"}
            p={{ base: "1rem 3rem", lg: "2rem 7rem 2rem 7rem" }}
            alignItems={"center"}
            justifyContent={"space-between"}
            flexDir={{ base: "column", md: "row" }}
        >
            <Stack alignItems={"center"}>
                <Image
                    src={logo}
                    w={{ base: "10vw", md: "6vw", lg: "4.5vw" }}
                />
                <Text>© Copyright Franco Angulo 2022</Text>
            </Stack>
            <Stack flexDir={"row"}>
                <Link
                    href="https://www.linkedin.com/in/franco-angulo/"
                    target={"_blank"}
                    mt={"0 !important"}
                    _hover={{ textDecor: "none" }}
                >
                    <IconButton
                        icon={<FaLinkedin />}
                        p={"1rem"}
                        fontSize={"2rem"}
                        aria-label="gmail"
                        borderRadius={"full"}
                        bg={"transparent"}
                        color={"black"}
                        _hover={{ bg: "transparent" }}
                        _focus={{ outline: "none" }}
                    />
                </Link>
                <Link
                    href="https://github.com/francoa7"
                    target={"_blank"}
                    mt={"0 !important"}
                    _hover={{ textDecor: "none" }}
                >
                    <IconButton
                        icon={<FaGithub />}
                        p={"1rem"}
                        fontSize={"2rem"}
                        aria-label="gmail"
                        borderRadius={"full"}
                        bg={"transparent"}
                        color={"black"}
                        _hover={{ bg: "transparent" }}
                        _focus={{ outline: "none" }}
                    />
                </Link>
                <Link
                    href="mailto:francoangulo2001@gmail.com"
                    target={"_blank"}
                    mt={"0 !important"}
                    _hover={{ textDecor: "none" }}
                >
                    <IconButton
                        icon={<SiGmail />}
                        p={"1rem"}
                        fontSize={"2rem"}
                        aria-label="gmail"
                        borderRadius={"full"}
                        bg={"transparent"}
                        color={"black"}
                        _hover={{ bg: "transparent" }}
                        _focus={{ outline: "none" }}
                    />
                </Link>
            </Stack>
        </Stack>
    );
}

export default Footer;
