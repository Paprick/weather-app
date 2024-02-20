import styled from "styled-components";

export const DashboardWrapper = styled.div`
    box-sizing: border-box;
    width: 80%;
    max-width: 1200px;
    padding: 9rem 0;
    @media screen and (max-width: 576px) {
        width: 100%;
        padding: 2rem 5px;
    }
`
export const SearchAndOptionsWrapper = styled.section`
    width: 100%;
    display: grid;
    grid-template-columns: 10fr 1fr;
    grid-template-rows: auto;
    justify-items: center;
    align-items: center;
`