import styled from "styled-components"
import { theme } from "@config/index"

export const OptionsGroupsWrapper = styled.form`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    column-gap: 2.5rem;
    text-align: center;
    @media (max-width: 410px) {
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        row-gap: 25px;
    }
`
export const OptionsGroup = styled.ul`
    width: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    list-style-type: none;
    row-gap: 1rem;
`
export const OptionsGroupLabel = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    border-bottom: 2px solid ${theme.neutral};
    font-size: 1.4rem;
    opacity: 0.7;
`
export const OptionList = styled.li`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    justify-items: center;
    align-items: center;
    column-gap: 1rem;
`
export const OptionLabel = styled.label`
    justify-self: end;
`
export const OptionSelectionWrapper = styled.div`
    justify-self: start;
`
