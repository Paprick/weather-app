import styled from "styled-components";
import { theme } from "@config/index";

export const LocationWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Timezone = styled.div`
    font-size: 1.2rem;
`
export const Location = styled.div`
    font-weight: 600;
    font-size: 3rem;
    display: flex;
    align-items: center;
    font-weight: 600;
`
export const WeatherDisplayWrapper = styled.div`
    gap: 10px 20px;
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto;
    grid-template-areas:
    "temp ico"
    "desc ico";
`
export const DegreesLabel = styled.div`
    grid-area: temp;
    font-size: 4rem;
    font-weight: 400;
    z-index: 1;
    color: ${theme.primary};
`
export const WeatherDescription = styled.div`
    grid-area: desc;
    font-size: 2rem;
`
export const WeatherDetailsWrapper = styled.div`
    grid-area: ico;
    max-height: 300px;
    max-width: 300px;
    height: 70vw;
    width: 70vw;
    margin-top: 15px;
    margin-bottom: 50px; /* Taking icon size into consideration */
    box-sizing: border-box;
`
export const WeatherDetails = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    border: 3px solid ${theme.primary};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
`
export const IconWrapper = styled.div`
    padding: 0.3rem;
    top: 100%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    border-radius: 50%;
    background-color: ${theme.secondary};
`