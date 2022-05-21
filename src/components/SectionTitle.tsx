import React from "react";
import { Text } from "@chakra-ui/react";

function SectionTitle({ title }: { title: string }) {
    return (
        <Text fontWeight={"bold"} fontSize={"1.5rem"} mt={"1rem !important"}>
            {title}
        </Text>
    );
}

export default SectionTitle;
