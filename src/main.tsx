import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider, createSystem, defineConfig } from "@chakra-ui/react";
import "./styles/font.css";

const chakraConfig = defineConfig({
  globalCss: {
    body: {
      margin: 0,
      padding: 0,
      backgroundColor: "#596535",
      color: "#FCFBDF",
      fontFamily: "Pretendard-Regular, Roboto, Helvetica, Arial, sans-serif",
    },
  },
  theme: {},
});

const chakraSystem = createSystem(chakraConfig);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider value={chakraSystem}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </StrictMode>
);
