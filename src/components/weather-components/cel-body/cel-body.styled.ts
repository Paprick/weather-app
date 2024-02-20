import styled, { css, keyframes } from "styled-components";
import { cardTheme } from "@config/theme";

const raysAnimation = keyframes`
    0%{
        transform: rotate(0deg)
    }
    100% {
        transform: rotate(360deg)
    }
`
const moonGlow =  keyframes`
    0%, 100% {
        filter: drop-shadow(0px 0px 5px ${cardTheme.moon})
    }
    50% {
        filter: drop-shadow(0px 0px 20px ${cardTheme.moon})
    }
`

export const CelBody = styled.div`
    position: absolute;
    ${(props) =>
        props.theme.isNight &&
        css`
            animation: ${moonGlow} 8s ease-in-out infinite; 
        `};
    //display: none;
`
export const RayBox = styled.div`
    position: absolute;
    top: -60%;
    left: 0px;
    right: 0;
	bottom:0;
    width: 100%;
    height: 100%;
    animation: ${raysAnimation} 60s linear infinite;
`
export const Ray = styled.div<{ $rotate?: number, $top?: number, $left?: number, $bottom?: number, $right?: number }>`
    top: ${(props) => props.$top && `${props.$top}%`};
    left: ${(props) => props.$left && `${props.$left}%`};
    bottom: ${(props) => props.$bottom && `${props.$bottom}%`};
    right: ${(props) => props.$right && `${props.$right}%`};
    transform: ${(props) => `rotate(${props.$rotate}deg) `};
    position: absolute;
    height:34%;
    width:10%;
    background: linear-gradient(180deg, rgba(255,228,132,0) 15%, rgba(255,228,132,0.7) 90%);
`