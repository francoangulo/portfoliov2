import { IconButton, Link, Stack } from "@chakra-ui/react";
import React from "react";
import ContactForm from "./ContactForm";
import SectionTitle from "./SectionTitle";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Contact() {
  return (
    <Stack id="contact" minH={"100vh"} pt={"10vh"}>
      <SectionTitle title="CONTACT ME" />
      <Stack
        p={{ base: "1rem 2rem", lg: "1rem 7rem 1rem 7rem" }}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Stack
          w={{ base: "100%", lg: "70%" }}
          flexDir={"row"}
          justifyContent={"space-evenly"}
        >
          <Link
            href="https://www.linkedin.com/in/franco-angulo/"
            target={"_blank"}
            mt={"0 !important"}
            _hover={{ textDecor: "none" }}
          >
            <IconButton
              className="solidbuttonfillbottom"
              p={"1rem"}
              fontSize={"2rem"}
              icon={<FaLinkedin />}
              aria-label="linkedin"
              borderRadius={"full"}
              bg={"purple.200"}
              color={"black"}
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
              className="solidbuttonfillbottom"
              fontSize={"2rem"}
              aria-label="github"
              borderRadius={"full"}
              bg={"purple.200"}
              color={"black"}
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
              className="solidbuttonfillbottom"
              borderRadius={"full"}
              bg={"purple.200"}
              color={"black"}
              _focus={{ outline: "none" }}
            />
          </Link>
        </Stack>
        <ContactForm />
      </Stack>
    </Stack>
  );
}

export default Contact;
