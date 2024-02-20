import styled from "styled-components";
import { theme } from "@config/index";

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    background-color: ${theme.secondary};
    border-radius: 25px;
    @media (max-width: 260px) {
        flex-direction: column;
    }
`
export const MainInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    padding: 0.7rem;
    row-gap: 5px;
    text-align: center;
`
export const MainIcon = styled.div`

`
export const MainLabel = styled.div`
    opacity: 0.8;
    text-align: center;
`
export const ListInfoWrapper = styled.ul`
    padding: 10px;
    list-style: none;
    margin: 0px;
`
export const ListedInfo = styled.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 1.2rem;
`
export const InfoListIcon = styled.div`
    display: flex;
    align-items: center;
    align-content: center;
`
export const SubLabel = styled.div`
    opacity: 0.8;
`

