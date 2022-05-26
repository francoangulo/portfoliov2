import { Box, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import SectionTitle from "./SectionTitle";
import SkillsSet from "./SkillsSet";
import javascript from "../assets/skills/javascript.png";
import typescript from "../assets/skills/typescript.png";
import react from "../assets/skills/react.png";
import redux from "../assets/skills/redux.png";
import chakra from "../assets/skills/chakra.svg";
import node from "../assets/skills/node.png";
import express from "../assets/skills/express.svg";
import sql from "../assets/skills/sql.png";
import postgresql from "../assets/skills/postgresql.png";
import sequelize from "../assets/skills/sequelize.png";
import prisma from "../assets/skills/prisma.png";
import git from "../assets/skills/git.png";
import figma from "../assets/skills/figma.png";

function Skills() {
    const front = [
        {
            name: "JavaScript",
            logo: javascript,
        },
        {
            name: "TypeScript",
            logo: typescript,
        },
        {
            name: "React",
            logo: react,
        },
        {
            name: "Redux",
            logo: redux,
        },
        {
            name: "Chakra-ui",
            logo: chakra,
        },
    ];
    const back = [
        {
            name: "Node",
            logo: node,
        },
        {
            name: "Express",
            logo: express,
        },
        {
            name: "SQL",
            logo: sql,
        },
        {
            name: "PostgreSQL",
            logo: postgresql,
        },
        {
            name: "Sequelize",
            logo: sequelize,
        },
        {
            name: "Prisma",
            logo: prisma,
        },
    ];
    const tools = [
        {
            name: "Git",
            logo: git,
        },
        {
            name: "Figma",
            logo: figma,
        },
    ];

    return (
        <Stack
            minH={"100vh"}
            bg={"gray.100"}
            id="skills"
            pt={"10vh"}
            mt={"0 !important"}
            boxShadow={"lg"}
            alignItems={"center"}
            position={"relative"}
            zIndex={0}
            pb={{ base: "2rem" }}
        >
            <SectionTitle title="MY SKILLS" />
            <Stack
                w={"100%"}
                h={"100%"}
                p={{ base: "1rem 1.5rem", lg: "1rem 7rem 4rem 7rem" }}
                wrap={"wrap"}
                alignItems={"flex-start"}
                justifyContent={"center"}
                rowGap={"2.5rem"}
                columnGap={{ base: "2rem", sm: "10vw" }}
                flexDir={{ base: "row", lg: "column" }}
            >
                <SkillsSet skills={front} type="Frontend" />
                <SkillsSet skills={back} type="Backend" />
                <SkillsSet skills={tools} type="Tools" />
            </Stack>
        </Stack>
    );
}

export default Skills;
