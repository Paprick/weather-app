import * as s from './cloud.styled'
import { cardTheme } from '@config/theme'


interface Props {
    top?: number,
    left?: number,
    colorVar?: string,
    animDelay?: number
}

export const Cloud:React.FC<Props> = ({  top = 0, left = 0, colorVar = cardTheme.cloudVar1, animDelay = 0 }) => {

    const cloudPos = {
        leftEllipse: {
            x: 70 + left,
            y: 110 + top,
        },
        rightEllipse: {
            x: 130 + left,
            y: 110 + top,
        },
        rect: {
            x: 70 + left,
            y: 90 + top,
        },
        circle: {
            x: 95 + left,
            y: 90 + top,
        }
    }

    return (
        <s.Cloud $animDelay={ animDelay }>
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 200 200">
                <ellipse
                    cx={cloudPos.leftEllipse.x}
                    cy={cloudPos.leftEllipse.y}
                    rx="20" 
                    ry="20" 
                    fill={colorVar}
                />
                <rect 
                    x={cloudPos.rect.x}
                    y={cloudPos.rect.y}
                    width="60" 
                    height="40" 
                    fill={colorVar}
                />
                <circle 
                    cx={cloudPos.circle.x} 
                    cy={cloudPos.circle.y} 
                    r="30" 
                    fill={colorVar}
                />
                <ellipse 
                    cx={cloudPos.rightEllipse.x}
                    cy={cloudPos.rightEllipse.y}
                    rx="20" 
                    ry="20" 
                    fill={colorVar}
                />
            </svg>
        </s.Cloud>
    )
}