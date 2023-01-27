import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CodePiecesPage } from "./components/blog/CodePiecesPage";
import { RandomColor } from "./components/blog/RandomColor";
import { CodesHome } from "./components/blog/CodesHome";
import { RandomPastelColor } from "./components/blog/RandomPastelColor";
import { ImageTinter } from "./components/blog/ImageTinter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/codes",
    element: <CodePiecesPage />,
    children: [
      {
        path: "home",
        element: <CodesHome />,
      },
      {
        path: "random-color-generator",
        element: <RandomColor />,
      },
      {
        path: "random-pastel-color-generator",
        element: <RandomPastelColor />,
      },
      {
        path: "css-image-tinter",
        element: <ImageTinter />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
