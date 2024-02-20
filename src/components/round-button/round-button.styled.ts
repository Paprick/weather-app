import styled from "styled-components"
import { theme } from "@config/theme"

export const ButtonWrapper = styled.div`
    width: 100%;
    border-radius: 25px 25px 0 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 100ms linear;
    &.active {
        background-color: ${theme.secondary};
    }
`
export const RotatingWrapper = styled.div`
    transition: transform 100ms linear;
    ${ButtonWrapper}.active & {
        transform : rotate(30deg);
    }
`
export const ButtonHover = styled.button` 
    margin: 0;
    padding: 5px;
    border: 0;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    color: ${theme.primary};
    background-color: ${theme.neutral};
    transition: background-color 100ms linear;
    cursor: pointer;
    
    ${ButtonWrapper}.active & {
        background-color: ${theme.secondary};
    }
    &:focus-visible {
        box-shadow: 0 0 0 2px ${theme.accent};
        background-color: ${theme.secondary};
        outline: none;
    }
    @media (hover: hover) { // Prevent stay hover on touch devices
        &:hover {
            background-color: ${theme.secondary};
        }
    }
`