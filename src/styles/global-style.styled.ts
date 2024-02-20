import { createGlobalStyle } from "styled-components";
import { theme } from "@config/theme";

export const GlobalStyles = createGlobalStyle`
    body, html {
        margin: 0px;
        padding: 0px;
        font-size: 16px;
        @media (max-width: 992px) {
            font-size: 14px;
        }
        
        @media (max-width: 768px) {
            font-size: 12px;
        }
        
        @media (max-width: 380px) {
            font-size: 10px;
        }
    }
    body {
        color: ${theme.primary};
        background-color: ${theme.neutral}
    }
    #root {
        font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    }
`