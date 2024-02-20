import styled, { css } from "styled-components";
import { theme } from "@config/theme";

export const Wrapper = styled.section`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 35px auto;
`
export const TabsWrapper = styled.ul`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
`
const leftTab = css`
    border-radius: 25px 0 0 0;
`
const rightTab = css`
    border-radius: 0 25px 0 0;
`
export const TabButton = styled.li<{ $type?: 'right' }>`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-width: 2px 2px 0 2px;
    border-style: solid;
    border-color: ${theme.neutral};
    ${(props) => props.$type === 'right' ? rightTab : leftTab}
    transition: background-color 0.04s linear;
    color: ${theme.primary};
    background-color: ${theme.neutral};
    font-size: 1.2rem;
    padding-bottom: 2px;
    &:hover {
        background-color: ${theme.neutral75};
    }
    &.active {
        background-color: ${theme.secondary};
    }
    &:focus-visible {
        padding-bottom: 0px;
        border-width: 2px;
        border-color:${theme.accent};
        background-color: ${theme.neutral75};
        outline: none;
        &.active {
            background-color: ${theme.secondary};
        }
    }
`

export const TimeWeather = styled.div`
    box-sizing: border-box;
    padding: 5px 0;
    border-width: 0 2px 2px 2px;
    border-style: solid;
    border-color: ${theme.neutral};
    border-radius: 0 0 25px 25px;
`