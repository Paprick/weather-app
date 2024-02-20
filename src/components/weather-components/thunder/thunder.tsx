import * as s from './thunder.styled'

interface Props {
    top?: number,
    left?: number,
}

export const Thunder:React.FC<Props> = ({ top = 0, left = 0}) => {

    return (
        <>
            <s.MaskBox />
            <s.Lightning
                $top={top}
                $left={left}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 200 200">
                    <path d="M95 50 L105 50 L105 60 L107 65 L105 70 L120 90 L115 100 L130 120
                            L135 140 L140 155 L130 140 L127 125 L110 100 L115 90 L100 70 L104 65 L100 60
                            L100 55 Z" 
                    fill="white" />
                </svg>
            </s.Lightning>
        </>
    )
}