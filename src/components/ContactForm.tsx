import {
    Button,
    FormControl,
    FormHelperText,
    FormLabel,
    Input,
    Stack,
    Textarea,
    useToast,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    name: string;
    email: string;
    message: string;
};

function ContactForm() {
    const toast = useToast();
    const form = useRef<HTMLFormElement | null>(null);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data, e) => {
        e?.preventDefault();
        emailjs
            .sendForm(
                "service_bx6pg7h",
                "template_kypkwac",
                e?.target,
                "6UJlcztlGRa2fzc42"
            )
            .then(() =>
                toast({
                    title: "Email send successfully",
                    position: "bottom",
                    status: "success",
                    isClosable: true,
                })
            )
            .catch((err) =>
                toast({
                    title: `Error: ${err}`,
                    position: "bottom",
                    status: "error",
                    isClosable: true,
                })
            );
    };
    return (
        <Stack
            w={"70%"}
            boxShadow={"lg"}
            p={"2rem"}
            rounded={"lg"}
            bg={"white"}
        >
            <form ref={form} onSubmit={handleSubmit(onSubmit)}>
                <FormControl isRequired>
                    <FormLabel htmlFor="name" fontWeight={"bold"}>
                        Name
                    </FormLabel>
                    <Input
                        _focus={{ border: "2px", borderColor: "purple.400" }}
                        type="text"
                        placeholder={"Your name"}
                        {...register("name", { required: true })}
                    />
                </FormControl>
                <FormControl isRequired mt={"2rem !important"}>
                    <FormLabel htmlFor="email" fontWeight={"bold"}>
                        Email address
                    </FormLabel>
                    <Input
                        _focus={{ border: "2px", borderColor: "purple.400" }}
                        {...register("email", { required: true })}
                        type="email"
                        placeholder={"Your email"}
                    />
                </FormControl>
                <FormControl isRequired mt={"2rem !important"}>
                    <FormLabel htmlFor="message" fontWeight={"bold"}>
                        Your message
                    </FormLabel>
                    <Textarea
                        _focus={{ border: "2px", borderColor: "purple.400" }}
                        {...register("message", { required: true })}
                        placeholder={"Your message"}
                    />
                </FormControl>
                <Button
                    className="solidbuttonfillbottom"
                    type="submit"
                    bg={"purple.200"}
                    borderRadius={"full"}
                    mt={"1rem"}
                    color={"paramount"}
                    _hover={{ bg: "purple.300" }}
                >
                    Send Message
                </Button>
            </form>
        </Stack>
    );
}

export default ContactForm;
