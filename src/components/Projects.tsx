import { Image, Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import SectionTitle from "./SectionTitle";
import axios from "axios";
import background from "../assets/stripes.png";

function Projects() {
    const [projects, setProjects] = useState<any[]>([]);
    useEffect(() => {
        axios
            .get(
                `https://wbskev9st1.execute-api.us-east-1.amazonaws.com/dev/bucketportfolio/projects.json`
            )
            .then((res) => {
                setProjects(res.data.projects);
            });
    }, []);

    console.log(projects);

    return (
        <Stack
            minH={"100vh"}
            pb={"2rem"}
            id="projects"
            pt={"10vh"}
            position={"relative"}
        >
            <SectionTitle title="PROJECTS" />
            <Stack
                p={{ base: "2rem 3rem", lg: "2rem 7rem 2rem 7rem" }}
                flexDir={"row"}
                justifyContent={"center"}
                columnGap={"3rem"}
                rowGap={"5rem"}
                wrap={"wrap"}
            >
                {projects.length &&
                    projects
                        .sort((a, b) => b.id - a.id)
                        .map((project) => <ProjectCard data={project} />)}
            </Stack>
            <Image
                src={background}
                w={{ base: "auto", lg: "fit-content" }}
                h={{ base: "fit-content", lg: "auto" }}
                position={"fixed"}
                top={"-250px"}
                left={"-500px"}
                zIndex={-1}
            />
            <Image
                src={background}
                w={{ base: "auto", lg: "fit-content" }}
                h={{ base: "fit-content", lg: "auto" }}
                position={"fixed"}
                bottom={{ base: -40, lg: -10 }}
                right={{ base: -20, lg: -10 }}
                zIndex={-1}
            />
        </Stack>
    );
}

export default Projects;
