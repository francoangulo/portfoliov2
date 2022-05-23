import {
    Box,
    Heading,
    IconButton,
    Image,
    Link,
    Stack,
    Tag,
    Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

function ProjectCard({ data }: { data: any }) {
    return (
        <Stack alignItems={"center"} mt="0 !important">
            <Box
                role={"group"}
                p={6}
                maxW={"330px"}
                w={"full"}
                bg={"white"}
                boxShadow={"2xl"}
                rounded={"lg"}
                pos={"relative"}
                zIndex={1}
            >
                <Box
                    rounded={"lg"}
                    mt={-12}
                    pos={"relative"}
                    height={"210px"}
                    _after={{
                        transition: "all .3s ease",
                        content: '""',
                        w: "full",
                        h: "full",
                        pos: "absolute",
                        top: 5,
                        left: 0,
                        backgroundImage: data.img,
                        filter: "blur(15px)",
                        zIndex: -1,
                    }}
                    _groupHover={{
                        _after: {
                            filter: "blur(20px)",
                        },
                    }}
                >
                    <Box role={"group"} w={"fit-content"} h={"fit-content"}>
                        <Image
                            rounded={"lg"}
                            height={210}
                            width={282}
                            objectFit={"cover"}
                            src={data.img}
                        />

                        <Box
                            rounded={"lg"}
                            top={0}
                            position={"absolute"}
                            h={210}
                            w={{ base: "100%", lg: 282 }}
                            bg={"blackAlpha.600"}
                            opacity={0}
                            transition="all .3s"
                            _groupHover={{
                                opacity: "1",
                            }}
                        >
                            <Stack
                                w={"100%"}
                                h={"100%"}
                                zIndex={3}
                                alignItems={"center"}
                                p={"5%"}
                            >
                                <Stack
                                    w={"100%"}
                                    h={"100%"}
                                    justifyContent={"space-evenly"}
                                    alignItems={"center"}
                                    flexDir={"row"}
                                >
                                    <Link href={data.deploy} target={"_blank"}>
                                        <IconButton
                                            bg={"purple.100"}
                                            aria-label="see live"
                                            icon={<FaExternalLinkAlt />}
                                        />
                                    </Link>
                                    <Link
                                        href={data.code}
                                        target={"_blank"}
                                        mt={"0 !important"}
                                    >
                                        <IconButton
                                            bg={"purple.100"}
                                            fontSize={"1.5rem"}
                                            mt={"0 !important"}
                                            aria-label="see code"
                                            icon={<FaGithub />}
                                        />
                                    </Link>
                                </Stack>
                                <Stack
                                    flexDir={"row"}
                                    w={"100%"}
                                    h={"fit-content"}
                                    wrap={"wrap"}
                                    alignItems={"center"}
                                    justifyContent={"center"}
                                    rowGap={"3px"}
                                    columnGap={"3px"}
                                >
                                    {data.techstack.map(
                                        (tech: string, index: number) => (
                                            <Tag
                                                key={`${index}${tech}`}
                                                fontWeight={"bold"}
                                                colorScheme={"whiteAlpha"}
                                                mt={"0 !important"}
                                                size={"sm"}
                                            >
                                                {tech}
                                            </Tag>
                                        )
                                    )}
                                </Stack>
                            </Stack>
                        </Box>
                    </Box>
                </Box>
                <Stack pt={10} align={"center"}>
                    <Heading
                        fontSize={"2xl"}
                        fontFamily={"raleway"}
                        fontWeight={"bold"}
                    >
                        {data.name}
                    </Heading>
                    <Stack
                        direction={"row"}
                        align={"center"}
                        mt={"1rem !important"}
                    >
                        <Text
                            textAlign={"center"}
                            fontSize={{ base: ".9rem", md: "1rem" }}
                        >
                            {data.description}
                        </Text>
                    </Stack>
                </Stack>
            </Box>
        </Stack>
    );
}

export default ProjectCard;
