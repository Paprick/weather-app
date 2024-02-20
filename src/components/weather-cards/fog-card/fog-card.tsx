import { ThemeProvider } from 'styled-components'

import { CardWrapper } from '@styles/card-wrapper.styled'

import { Cloud } from '@components/weather-components/cloud/cloud'
import { StarryBackground } from '@components/weather-components/starry-background/starry-background'
import { CloudsWrapper } from '@styles/clouds-wrapper.styled'
import { Fog } from '@components/weather-components/fog/fog'

import { cardTheme } from '@config/theme'


interface Props {
    isNight?: boolean,
}
export const FogCard: React.FC<Props> = ({ isNight = false }) => {

    return (
        <ThemeProvider theme={{ isNight }}>
            <CardWrapper aria-hidden={true}>
                <CloudsWrapper>
                    <Cloud top={-65} left={0} colorVar={cardTheme.cloudVar2}/>
                </CloudsWrapper>
                <Fog top={50} left={0}/>
                {isNight && <StarryBackground />}
            </CardWrapper>
        </ThemeProvider>
    )
}