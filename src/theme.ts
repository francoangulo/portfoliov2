import { extendTheme } from "@chakra-ui/react";
import "@fontsource/exo";
import "@fontsource/raleway";

const colors = {
    primary: "#fff",
    accent: "#000",
    paramount: "#0F0D17",
};

const fonts = {
    exo: "Exo, sans-serif",
    raleway: "Raleway, sans-serif",
};

const theme = extendTheme({ colors, fonts });

export default theme;
