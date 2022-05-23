import { Box, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import SectionTitle from "./SectionTitle";
import SkillsSet from "./SkillsSet";
import skills from "../assets/skills.svg";
import stripe from "../assets/stripe.png";

function Skills() {
    const front = [
        {
            name: "JavaScript",
            logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
        },
        {
            name: "TypeScript",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png",
        },
        {
            name: "React",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
        },
        {
            name: "Redux",
            logo: "http://assets.stickpng.com/images/5848309bcef1014c0b5e4a9a.png",
        },
        {
            name: "Chakra-ui",
            logo: "https://raw.githubusercontent.com/chakra-ui/chakra-ui/37054f067f41bfd387b92c87de6bff4e43638455/logo/logomark-colored.svg",
        },
    ];
    const back = [
        {
            name: "Node",
            logo: "https://cdn.sanity.io/images/zsu6ap39/production/d8c8025b1695a3f14f849b99afc71d917ef40813-480x480.png",
        },
        {
            name: "Express",
            logo: "https://cdn.sanity.io/images/zsu6ap39/production/43c45ddd385354c0dbcaf4b8a26a514ae71e7035-128x128.svg",
        },
        {
            name: "SQL",
            logo: "https://www.latindevelopers.com/wp-content/uploads/2017/12/sql_icon-200x200.png",
        },
        {
            name: "PostgreSQL",
            logo: "http://assets.stickpng.com/images/584815fdcef1014c0b5e497a.png",
        },
        {
            name: "Sequelize",
            logo: "https://miro.medium.com/max/250/0*rwd6KeolcXgz7zpx.png",
        },
        {
            name: "Prisma",
            logo: "https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/001/287/square_480/prismaHD.png",
        },
    ];
    const tools = [
        {
            name: "Git",
            logo: "http://assets.stickpng.com/images/5847f981cef1014c0b5e48be.png",
        },
        {
            name: "Figma",
            logo: "https://cdn.sanity.io/images/zsu6ap39/production/6551e520e801ab656029527c09265981c06dce33-480x480.png",
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
            <SectionTitle title="SKILLS" />
            <Stack
                w={"100%"}
                h={"100%"}
                p={{ base: "1rem 1.5rem", lg: "1rem 7rem 4rem 7rem" }}
                wrap={"wrap"}
                alignItems={"flex-start"}
                justifyContent={"center"}
                rowGap={"2.5rem"}
                columnGap={"2rem"}
                flexDir={{ base: "row", lg: "column" }}
            >
                <SkillsSet skills={front} type="Frontend" />
                <SkillsSet skills={back} type="Backend" />
                <SkillsSet skills={tools} type="Tools" />
            </Stack>
            {/* <Image
                userSelect={"none"}
                src={skills}
                position={"absolute"}
                zIndex={-1}
                w={"20%"}
                bottom={20}
                right={20}
                opacity={0.5}
            />
            <Image
                userSelect={"none"}
                src={stripe}
                position={"absolute"}
                zIndex={-1}
                w={"fit-content"}
                top={"15%"}
                left={0}
                opacity={0.7}
            /> */}
        </Stack>
    );
}

export default Skills;
