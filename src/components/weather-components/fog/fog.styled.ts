import styled, { css, keyframes } from "styled-components"

const fogAnimationRight = keyframes`
    0%, 100%  {
        transform: translate(0, 0)
    }
    50% {
        transform: translate(10px, 0)
    }
`
const fogAnimationLeft = keyframes`
    0%, 100%  {
        transform: translate(0, 0)
    }
    50% {
        transform: translate(-10px, 0)
    }
`
export const MaskBox = styled.div`
    width: 100%;
    height: 100%;
    background-color: #fff;
    opacity: 0.4;
`
const FogLineBase = css`
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
`
export const FogLine1 = styled.div`
    ${FogLineBase}
    animation: ${fogAnimationLeft} 15s ease-in-out infinite;
`
export const FogLine2 = styled.div`
    ${FogLineBase}
    animation: ${fogAnimationRight} 15s ease-in-out infinite;
`
export const FogLine3 = styled.div`
    ${FogLineBase}
    animation: ${fogAnimationLeft} 15s ease-in-out infinite;
    animation-delay: 1s;
`
