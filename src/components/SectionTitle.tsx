import React from "react";
import { Heading, Text } from "@chakra-ui/react";

function SectionTitle({ title }: { title: string }) {
    return (
        <Heading
            as={"h2"}
            fontFamily={"raleway"}
            fontWeight={"bold"}
            fontSize={"1.5rem"}
            mt={"1rem !important"}
        >
            {title}
        </Heading>
    );
}

export default SectionTitle;
