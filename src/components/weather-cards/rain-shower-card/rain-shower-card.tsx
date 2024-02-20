import { ThemeProvider } from 'styled-components'

import { CardWrapper } from '@styles/card-wrapper.styled'

import { Cloud } from '@components/weather-components/cloud/cloud'
import { StarryBackground } from '@components/weather-components/starry-background/starry-background'
import { CloudsWrapper } from '@styles/clouds-wrapper.styled'
import { RainShower } from '@components/weather-components/rain-shower/rain-shower'

import { cardTheme } from '@config/theme'


interface Props {
    isNight?: boolean,
    intensity?: 'low' | 'medium' | 'heavy',
}
export const RainShowerCard: React.FC<Props> = ({ isNight = false, intensity = 'medium' }) => {
    const isRaining = true

    const intensitySettings = {
        'low': {
            dropletsCount: 15,
            animDur: 0.8
        },
        'medium': {
            dropletsCount: 25,
            animDur: 0.8
        },
        'heavy': {
            dropletsCount: 35,
            animDur: 0.8
        }
    }
    return (
        <ThemeProvider theme={{ isNight, isRaining }}>
            <CardWrapper aria-hidden={true}>
                <CloudsWrapper>
                    <Cloud top={-55} left={25} colorVar={cardTheme.cloudRainyVar1} animDelay={1} />
                    <Cloud top={-65} left={-25} colorVar={cardTheme.cloudRainyVar2}/>
                </CloudsWrapper>
                <RainShower 
                    top={-28} 
                    left={-32}  
                    dropletsCount={intensitySettings[intensity].dropletsCount} 
                    animDur={intensitySettings[intensity].animDur}
                />
                {isNight && <StarryBackground />}
            </CardWrapper>
        </ThemeProvider>
    )
}