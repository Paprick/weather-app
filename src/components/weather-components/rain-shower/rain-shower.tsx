import { RainingTemplate } from '../raining-template/raining-template'

interface Props {
    top?: number,
    left?: number,
    animDur?: number,
    dropletsCount?: number,
}

export const RainShower:React.FC<Props> = ({ dropletsCount, animDur, top, left }) => {
    const color = '#fff'

    return (
        <RainingTemplate
            dropletsCount={dropletsCount}
            animDur={animDur}
            top={top}
            left={left}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 200 200">
                <defs>
                    <linearGradient id="opacityGradient">
                        <stop offset="5%" stopColor="rgba(255, 255, 255, 0.2)" />
                        <stop offset="95%" stopColor="#fff" />
                    </linearGradient>
                </defs>
                <ellipse 
                    cx={99}
                    cy={99.5}
                    rx="0.5" 
                    ry="0.5" 
                    fill={color}
                />
            </svg>
        </RainingTemplate>
    )
}