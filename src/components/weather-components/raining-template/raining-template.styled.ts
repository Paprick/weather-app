import styled, { keyframes } from "styled-components"

const rainFall = keyframes`
    0%  {
        transform: rotate(90deg) translate(0, 0);
    }
    100% {
        transform: rotate(90deg) translate(100%, 0);
    }
`
export const Droplet = styled.div<{ $rd: number, $top: number, $spacing: number, $animDur?: number }>`
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
    transform: rotate(90deg);
    opacity: 1;
    animation: ${rainFall} ${(props) => `${props.$animDur}s` || '0.8s'} linear infinite;
    animation-delay: ${(props) => `calc(15s/ ${props.$rd})`};
    top: ${(props) => `${props.$top}%`};
    left: ${(props) => `${props.$spacing}%`};
`