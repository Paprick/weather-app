import { ThemeProvider } from 'styled-components'

import { CardWrapper } from '@styles/card-wrapper.styled'

import { Cloud } from '@components/weather-components/cloud/cloud'
import { StarryBackground } from '@components/weather-components/starry-background/starry-background'
import { CloudsWrapper } from '@styles/clouds-wrapper.styled'
import { Snow } from '@components/weather-components/snow/snow'

import { cardTheme } from '@config/theme'


interface Props {
    isNight?: boolean,
    intensity?: 'low' | 'medium' | 'heavy',
}
export const SnowCard: React.FC<Props> = ({ isNight = false, intensity = 'medium' }) => {
    const isRaining = true

    const intensitySettings = {
        'low': {
            dropletsCount: 15,
            animDur: 2
        },
        'medium': {
            dropletsCount: 25,
            animDur: 2
        },
        'heavy': {
            dropletsCount: 35,
            animDur: 2
        }
    }
    return (
        <ThemeProvider theme={{ isNight, isRaining }}>
            <CardWrapper aria-hidden={true}>
                <CloudsWrapper>
                    <Cloud top={-55} left={25} colorVar={cardTheme.cloudVar2}/>
                    <Cloud top={-65} left={-25} colorVar={cardTheme.cloudVar1}/>
                </CloudsWrapper>
                <Snow 
                    dropletsCount={intensitySettings[intensity].dropletsCount}
                    animDur={intensitySettings[intensity].animDur}
                    left={-57}
                    top={-28}
                />
                {isNight && <StarryBackground />}
            </CardWrapper>
        </ThemeProvider>
    )
}