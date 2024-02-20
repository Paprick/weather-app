import { ReactNode } from 'react';
import * as s from './raining-template.styled'

interface Props {
    top?: number,
    left?: number,
    dropletsCount?: number,
    children?: ReactNode,
    animDur?: number;
}

export const RainingTemplate:React.FC<Props> = ({ dropletsCount= 35, children, top= -25, left= -37, animDur }) => {

    const renderDroplets = (x: number) => {
        const dropletsToRender = []
        for(let i = 0; i < x; i++) {
            const randomDelayBase = Math.floor(Math.random() * 12) + 1
            const maxWidth = 70
            const spacing = (i*(maxWidth / dropletsCount)) + left
            dropletsToRender.push(
                <s.Droplet 
                    key={i}
                    $rd={randomDelayBase}
                    $spacing={spacing}
                    $top={top}
                    $animDur={animDur}
                >
                    {children}
                </s.Droplet>
            )
                
        }
        return dropletsToRender
    }
    return (
        <>
            {renderDroplets(dropletsCount)}
        </>
    )
}