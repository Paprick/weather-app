import styled from "styled-components"
import { theme } from "@config/index"

import { fadeInAnimation, fadeOutAnimation } from "./fade-animations.styled"

export const TileContainer = styled.section<{ 
    $isExpanded?: boolean,
    $roundedTopLeft?: boolean
    $roundedTopRight?: boolean
    $roundedBottomRight?: boolean
    $roundedBottomLeft?: boolean
    $zIndex?: number | 'auto' | 'initial' | 'inherit'
}>`
    width: 100%;
    margin: 0;  
    padding: 15px;
    border-radius: 25px 25px 25px 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    overflow: visible;
    position: relative;
    background-color: ${theme.secondary};
    animation: ${({ $isExpanded }) => $isExpanded !== undefined ? ($isExpanded ? fadeOutAnimation : fadeInAnimation) : 'none'} 120ms linear forwards;
    border-top-left-radius: ${({ $roundedTopLeft }) => $roundedTopLeft ? '25px' : '0'};
    border-top-right-radius: ${({ $roundedTopRight }) => $roundedTopRight ? '25px' : '0'};
    border-bottom-right-radius: ${({ $roundedBottomRight }) => $roundedBottomRight ? '25px' : '0'};
    border-bottom-left-radius: ${({ $roundedBottomLeft }) => $roundedBottomLeft ? '25px' : '0'};
    z-index: ${({ $zIndex }) => $zIndex};
`;
TileContainer.defaultProps = {
    $roundedTopLeft: true,
    $roundedTopRight: true,
    $roundedBottomRight: true,
    $roundedBottomLeft: true,
    $zIndex: 'auto',
}