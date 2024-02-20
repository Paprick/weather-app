import styled from "styled-components";
import { theme } from "@config/index";

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    overflow: hidden;
    background-color: ${theme.secondary};
    border-radius: 25px;
    padding: 5px;
    color: ${theme.primary};
    box-sizing: border-box;
`

export const scrollableContent = styled.ul`
    padding: 5px 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: nowrap;
    gap: 1rem;
    overflow-x: auto;
    user-select: none;
    
    scrollbar-color: ${theme.primary} ${theme.secondary}; /*firefox */
    &::-webkit-scrollbar {
        height: 5px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: ${theme.neutral75};
        border-radius: 25px;
    }
    &::-webkit-scrollbar-thumb:hover {
        background-color: ${theme.primary};
    }
    &::-webkit-scrollbar-track {
        background-color: ${theme.secondary};
        border-radius: 25px;
    }
    &:focus-visible {
        outline: 2px solid ${theme.accent}
    }
`

export const WeatherHourContainer = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 5px 0.6rem;
    border-radius: 25px;
    transition: background-color 0.03s linear;
    &:hover {
        background-color: ${theme.neutral};
    }
    &:focus-visible {
        outline: none;
        background-color: ${theme.neutral};
    }
`
export const Label = styled.div`

`
export const IconWrapper = styled.div<{ $isDay: boolean }>`
    border: 2px solid ${(props) => props.$isDay ? '#659dc6' : '#868dfa'};
    opacity: 0.9;
    padding: 2px;
    display: flex;
    border-radius: 50%;
    background: ${theme.neutral75};
`