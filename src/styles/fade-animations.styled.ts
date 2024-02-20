import { keyframes } from "styled-components"

export const fadeInAnimation = keyframes`
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
`
export const fadeOutAnimation = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`