import styled, { css } from "styled-components";
import ReactCountryFlag from 'react-country-flag'
import { theme } from "@config/index";


export const SearchResultsWrapper = styled.section`
    z-index: 999;
    width: 100%;
    max-height: 300px;
    padding: 5px 0;
    border-radius: 25px;
    border: 2px solid ${theme.neutral};
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    background-color: ${theme.secondary};
    position: absolute;
    overflow-y: hidden;
    align-items: center;
`
export const InnerWrapper = styled.div`
    box-sizing: border-box;
    width: 100%;
    overflow-y: auto;
    padding: 10px;
    margin: 0px;

    scrollbar-color: ${theme.primary} ${theme.secondary}; /*firefox */
    &::-webkit-scrollbar {
        width: 7px;
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
const listStyle = css`
    box-sizing: border-box;
    padding: 5px;
    font-size: 1.2rem;
    display: grid;
    grid-template-columns: 1fr 2fr 2fr;
    grid-template-rows: auto;
    align-items: center;
    width: 100%;
`
export const SearchResultsHeaders = styled.div`
    ${listStyle}
    border-bottom: 2px solid ${theme.neutral};
    opacity: 0.7;
`
export const SearchResultsList = styled.ul`
    margin: 0;
    padding: 0;
`
export const SearchResultItem = styled.li`
    ${listStyle}
    border-radius: 25px;
    cursor: pointer;
    transition: background 0.04s ease;
    margin: 10px 0;

    &:hover {
        background-color: ${theme.neutral};
    }
    &:focus-visible {
        box-shadow: 0 0 0 2px ${theme.accent};
        background-color: ${theme.neutral};
        outline: none;
    }
`

export const SearchResultLabel = styled.label`
    justify-self: center;
    text-align: center;
   
`
export const CustomCountryFlag = styled(ReactCountryFlag)`
    justify-self: center;
    width: 1.8rem!important;
    height: 1.8rem!important;
    transform: scale(1.35);
`
export const CountryFlagWrapper = styled.div`
    justify-self: center;
    display: inline-block;
    position: relative;
    width: 1.8rem;
    height: 1.8rem;
    overflow: hidden;
    border-radius: 50%;
    background-color: ${theme.neutral};
`
export const NoResultsLabel = styled.li`
    list-style: none;
    padding: 16px;
`