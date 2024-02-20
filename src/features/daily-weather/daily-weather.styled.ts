import styled from "styled-components";
import { theme } from "@config/index";

export const Wrapper = styled.div`
    overflow: hidden;
    width: 100%;
    background-color: ${theme.secondary};
    border-radius: 25px;
    padding: 1rem;
    color: ${theme.primary};
    box-sizing: border-box;
`

export const ListedContent = styled.ul`
    padding: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.4rem;
    overflow-x: auto;
    text-align: center;

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
`

export const WeatherHourContainer = styled.li`
    width: 100%;
    padding: 2px 0;
    display: grid;
    grid-template-columns: 1fr 3fr 1fr 3fr 2fr;
    grid-template-rows: auto;
    justify-items: center;
    align-items: center;
    gap: 5px;
    border-radius: 25px;
    transition: background-color 0.03s linear;
    &:hover {
        background-color: ${theme.neutral};
    }
`
export const CenteredLabel = styled.div`
    justify-self: center;
`
export const LeftLabel = styled.div`
    justify-self: start;
    padding-left: 10px;
    text-transform: capitalize;
`
export const RightLabel = styled.div`
    justify-self: end;
    padding-right: 10px;
    text-transform: capitalize;
`
export const tintedLabel = styled.span`
    opacity: 0.6;
`
export const IconWrapper = styled.div`
    border: 2px solid ${theme.primary};
    padding: 2px;
    display: flex;
    border-radius: 50%;
    background: ${theme.neutral75};
`