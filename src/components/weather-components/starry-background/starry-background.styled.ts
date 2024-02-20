import styled, { css, keyframes } from "styled-components"

const starsAnimation = keyframes`
    0%, 100% {
        opacity: 1;
    }
    50% {
        opacity: 0;
    }
`
export const StarryBackgroundBox = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
`
const baseBackground = css`
    position: absolute;
    width: 100%;
    height: 100%;
`
export const StarsGroup1 = styled.div`
    ${baseBackground}
    background-image: radial-gradient(#fff, rgba(255,255,255,.2) 2px, transparent 10px);
    background-size: 110% 110%; //300px 300px
    background-position: 1% 51%;
    animation: ${starsAnimation} 5s ease-in infinite;
`
export const StarsGroup2 = styled.div`
    ${baseBackground}
    background-image: radial-gradient(#fff, rgba(255,255,255,.15) 1px, transparent 5px);
    background-size: 55% 55%; //150px 150px
    background-position: -35% 60%;
    animation: ${starsAnimation} 3s ease-in infinite;
`
export const StarsGroup3 = styled.div`
    ${baseBackground}
    background-image: radial-gradient(#fff, rgba(255,255,255,.1) 2px, transparent 5px);
    background-size: 60% 50%; //150px 150px
    background-position: 1% 1%;
    animation: ${starsAnimation} 4s ease-out infinite;
`
export const StarsGroup4 = styled.div`
    ${baseBackground}
    background-image: radial-gradient(rgba(255,255,255,.4), rgba(255,255,255,.1) 2px, transparent 10px);
    background-size: 55% 55%; //150px 150px
    background-position: 45% 15%;
    animation: ${starsAnimation} 6s ease-out infinite;
`