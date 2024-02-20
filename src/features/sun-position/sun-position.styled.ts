import styled from "styled-components";
import { theme } from "@config/index";

export const Wrapper = styled.div`
    background-color: ${theme.secondary};
    color: ${theme.primary};
    overflow: hidden;
    box-sizing: border-box;
    height: 35vw;
    max-height: 180px;
    width: 100%;
`;
export const SunPositionContainer = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 15% 70% 15%;
    grid-template-rows: 100%;
    grid-template-areas:'sunset-area sunposition-area sunrise-area';
    justify-content: space-between;
    position: relative;
`
export const SunriseArea = styled.div`
    height: 100%;
    justify-content: flex-end;
    place-self: center;
    grid-area: sunrise-area;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    text-align: center;
`
export const SunsetArea = styled.div`
    height: 100%;
    justify-content: flex-end;
    place-self: center;
    grid-area: sunset-area;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    text-align: center;
`
export const PositionContainerWrapper = styled.div`
    grid-area: sunposition-area;
    max-width: 320px;
    max-height: 320px;
    width: 50vw;
    height: 50vw;
    place-self: center;
    position: relative;
    top:50%;
`
export const PositionContainer = styled.div<{ $degrees: number }>`
    transform: ${props => `rotate(-${props.$degrees}deg)`};
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const CelBody = styled.div<{ $degrees: number }>`
    display: flex;
    position: absolute;
    z-index: 2;
    background-color: ${theme.secondary};
    border: 1px solid ${theme.primary};
    border-radius: 50%;
    transform: translate(-50%, -50%) ${props => `rotate(${props.$degrees}deg)`}; /*Counter rotation */
    top: 50%;
    left: 0;
`
export const Track = styled.div<{ $isDay: boolean }>`
    position: absolute;
    width: 100%;
    height: 100%;
    max-width: 380px;
    max-height: 380px;
    border-radius: 50%;
    border: 1px solid ${theme.primary};
    background: ${(props) => `linear-gradient(${props.$isDay ? '270deg' : '90deg'}, rgba(64,72,190,0.8) 10%, rgba(255,228,132,0.8) 90%)`};
`