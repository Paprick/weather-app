import * as s from './fog.styled'

interface Props {
    top?: number,
    left?: number,
}

export const Fog:React.FC<Props> = ({ top = 0, left = 0 }) => {

    const fogPos = {
        leftEllipse: {
            x: 60 + left,
            y: 100 + top,
        },
        rightEllipse: {
            x: 140 + left,
            y: 100 + top,
        },
        rect: {
            x: 60 + left,
            y: 98 + top,
        }
    }
    return (
        <>
            <s.MaskBox />
            <s.FogLine1>
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 200 200">
                    <ellipse
                        cx={fogPos.leftEllipse.x - 10}
                        cy={fogPos.leftEllipse.y - 10}
                        rx="2" 
                        ry="2" 
                        fill='#fff'
                    />
                    <rect 
                        x={fogPos.rect.x - 10}
                        y={fogPos.rect.y - 10}
                        width="80" 
                        height="4" 
                        fill='#fff'
                    />
                    <ellipse 
                        cx={fogPos.rightEllipse.x - 10}
                        cy={fogPos.rightEllipse.y - 10}
                        rx="2" 
                        ry="2" 
                        fill='#fff'
                    />
                </svg>
            </s.FogLine1>
            <s.FogLine2>
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 200 200">
                    <ellipse
                        cx={fogPos.leftEllipse.x + 10}
                        cy={fogPos.leftEllipse.y}
                        rx="2" 
                        ry="2" 
                        fill='#fff'
                    />
                    <rect 
                        x={fogPos.rect.x + 10}
                        y={fogPos.rect.y}
                        width="80" 
                        height="4" 
                        fill='#fff'
                    />
                    <ellipse 
                        cx={fogPos.rightEllipse.x + 10}
                        cy={fogPos.rightEllipse.y}
                        rx="2" 
                        ry="2" 
                        fill='#fff'
                    />
                </svg>
            </s.FogLine2>
            <s.FogLine3>
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 200 200">
                    <ellipse
                        cx={fogPos.leftEllipse.x - 10}
                        cy={fogPos.leftEllipse.y + 10}
                        rx="2" 
                        ry="2" 
                        fill='#fff'
                    />
                    <rect 
                        x={fogPos.rect.x - 10}
                        y={fogPos.rect.y + 10}
                        width="80" 
                        height="4" 
                        fill='#fff'
                    />
                    <ellipse 
                        cx={fogPos.rightEllipse.x - 10}
                        cy={fogPos.rightEllipse.y + 10}
                        rx="2" 
                        ry="2" 
                        fill='#fff'
                    />
                </svg>
            </s.FogLine3>
        </>
    )
}