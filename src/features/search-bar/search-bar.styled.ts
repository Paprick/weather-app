import styled from "styled-components";
import { theme } from "@config/index";

export const Icon = styled.div`
    display: flex;
    justify-content: center;
    color: ${theme.neutral};
`
export const Wrapper = styled.div`
    width: 100%;
    height: 50px;
    border-radius: 25px;
    padding-left: 5px;
    column-gap: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    background-color: ${theme.primary};
    &.focused {
        border: 3px solid ${theme.accent};
        padding: 2px;
        ${Icon} {
            color: ${theme.accent};
        }
    }
`