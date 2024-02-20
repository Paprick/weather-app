import { RainingTemplate } from '../raining-template/raining-template'

interface Props {
    top?: number,
    left?: number,
    animDur?: number,
    dropletsCount?: number,
}

export const Snow:React.FC<Props> = ({ animDur, dropletsCount, top, left }) => {
    const color = '#fff'

    return (
        <RainingTemplate 
            dropletsCount={dropletsCount}
            animDur={animDur}
            top={ top }
            left={ left }
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 200 200">
            <path d="M97 50 L103 50 M100 47 L100 53 M98 48 L102 52 M102 48 L98 52"
                stroke={color} strokeWidth={1}/>
            </svg>
        </RainingTemplate>
    )
}