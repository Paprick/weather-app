import styled, { keyframes } from 'styled-components'
import { theme } from '@config/index'

const rotate = keyframes`
    from {
        transform: rotate(0deg)
    }
    to {
        transform: rotate(360deg)
    }
`

export const Wrapper = styled.div`
    padding: 2px;
`
export const Cricle = styled.div`
    position: relative;
    width: 3rem;
    height: 3rem;
    border: 7px solid ${theme.neutral};
    border-top: 7px solid ${theme.primary};
    border-right: 7px solid ${theme.primary};
    border-radius: 50%;
    animation: ${rotate} 2s linear infinite;
`