import styled, { keyframes } from "styled-components";

const cloudAnimation = keyframes`
    0%, 100% {
        transform: translate(0, 0)
    }
    50% {
        transform: translate(0, 5px)
    }
`

export const Cloud = styled.div<{ $animDelay: number }>`
    width: 100%;
    height: 100%;
    position: absolute;
    animation: ${cloudAnimation} 8s ease-in-out infinite;
    animation-delay: ${(props) => `${props.$animDelay}s`};
    z-index: 2; 
`