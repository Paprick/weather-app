import { RainingTemplate } from '../raining-template/raining-template'

interface Props {
    top?: number,
    left?: number,
    animDur?: number,
    dropletsCount?: number,
}

export const Hail:React.FC<Props> = ({ animDur, dropletsCount, top, left }) => {
    const color = '#fff'

    return (
        <RainingTemplate 
            dropletsCount={dropletsCount}
            animDur={animDur}
            top={top}
            left={left}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 200 200">
                <ellipse 
                    cx={99}
                    cy={99}
                    rx="2" 
                    ry="2" 
                    fill={color}
                />
            </svg>
        </RainingTemplate>
    )
}