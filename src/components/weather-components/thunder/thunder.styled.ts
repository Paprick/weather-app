import styled, { keyframes } from "styled-components"

const lightningAnimation = keyframes`
    13%, 15%{
        opacity: 0;
        transform: scaleX(1)
    }
    14% {
        opacity: 1;
        transform: scaleX(1)
    }
    69%, 71%, 73% {
        opacity: 0;
        transform: scaleX(-1)
    }
    70%, 72% {
        opacity: 1;
        transform: scaleX(-1)
    }
`
const maskAnimation = keyframes`

    13%, 15%, 69%, 71%, 73% {
        opacity: 0;
    }
    14%, 70%, 72% {
        opacity: 0.3;
    }

`
export const Lightning = styled.div<{ $top: number, $left: number }>`
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
    opacity: 0;
    filter: drop-shadow(0px 0px 4px #fff);
    animation: ${lightningAnimation} 8s linear infinite;
    top: ${(props) => `${props.$top}%`};
    left: ${(props) => `${props.$left}%`};
    transform: scaleX(1);
`
export const MaskBox = styled.div`
    width: 100%;
    height: 100%;
    background-color: #fff;
    opacity: 0;
    animation: ${maskAnimation} 8s ease-out infinite;
`