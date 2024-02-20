import styled from "styled-components"
import { cardTheme } from "@config/theme"

export const CardWrapper = styled.div`
    width: calc(100% - 8px);
    height: calc(100% - 8px);
    overflow: hidden;
    position: absolute;
    display: flex;
    align-items: center;
    border-radius: 50%;
    background-image: ${(props) => 
        props.theme.isNight ? cardTheme.nightBackground:
        props.theme.isRaining ? cardTheme.rainBackground : cardTheme.dayBackground
        };
    opacity: 0.8;
`