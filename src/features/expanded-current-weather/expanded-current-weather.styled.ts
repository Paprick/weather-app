import styled from "styled-components";

export const Wrapper = styled.section`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    gap: 1.2rem;
`
export const ExpandedTilesWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: stretch;
    gap: 1.2rem;
`
export const SimpleTilesWrapper = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    justify-items: center;
    gap: 1.2rem;
`
export const WindDirection = styled.div<{ $rotation: number }>`
    transform: ${props => `rotate(${props.$rotation}deg)`};
`