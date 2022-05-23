import { Link, Stack } from "@chakra-ui/react";
import React from "react";

function Navbar() {
    return (
        <Stack
            w={"100vw"}
            h={"10vh"}
            bg={"whiteAlpha.500"}
            backdropFilter={"auto"}
            backdropBlur={"4px"}
            position={"fixed"}
            top={"0"}
            zIndex={3}
            flexDir={"row"}
            columnGap={"1.5rem"}
            justifyContent={"center"}
            alignItems={"center"}
        >
            <Link
                href="#home"
                fontWeight={"bold"}
                _hover={{ textDecor: "none" }}
                className="hover-underline-animation"
            >
                HOME
            </Link>
            <Link
                mt={"0 !important"}
                href="#about"
                fontWeight={"bold"}
                _hover={{ textDecor: "none" }}
                className="hover-underline-animation"
            >
                ABOUT
            </Link>
            <Link
                mt={"0 !important"}
                href="#projects"
                fontWeight={"bold"}
                _hover={{ textDecor: "none" }}
                className="hover-underline-animation"
            >
                PROJECTS
            </Link>
            <Link
                mt={"0 !important"}
                href="#skills"
                fontWeight={"bold"}
                _hover={{ textDecor: "none" }}
                className="hover-underline-animation"
            >
                SKILLS
            </Link>
            <Link
                mt={"0 !important"}
                href="#contact"
                fontWeight={"bold"}
                _hover={{ textDecor: "none" }}
                className="hover-underline-animation"
            >
                CONTACT
            </Link>
        </Stack>
    );
}

export default Navbar;
