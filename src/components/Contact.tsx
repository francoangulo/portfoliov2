import { Stack } from "@chakra-ui/react";
import React from "react";
import ContactForm from "./ContactForm";
import SectionTitle from "./SectionTitle";

function Contact() {
    return (
        <Stack id="contact" minH={"100vh"} pt={"10vh"}>
            <SectionTitle title="CONTACT ME" />
            <Stack p={"2rem 7rem 4rem 7rem"} alignItems={"center"}>
                <ContactForm />
            </Stack>
        </Stack>
    );
}

export default Contact;
