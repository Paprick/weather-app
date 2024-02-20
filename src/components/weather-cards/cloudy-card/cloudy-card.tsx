import { ThemeProvider } from 'styled-components'

import { CardWrapper } from '@styles/card-wrapper.styled'

import { Cloud } from '@components/weather-components/cloud/cloud'
import { StarryBackground } from '@components/weather-components/starry-background/starry-background'

import { cardTheme } from '@config/theme'

import { CloudsWrapper } from '@styles/clouds-wrapper.styled'

interface Props {
    isNight?: boolean,
}
export const CloudyCard: React.FC<Props> = ({ isNight = false }) => {

    return (
        <ThemeProvider theme={{ isNight }}>
            <CardWrapper aria-hidden={true}>
                <CloudsWrapper>
                    <Cloud top={-55} left={25} colorVar={cardTheme.cloudVar2} animDelay={2}/>
                    <Cloud top={-65} left={-25}/>
                </CloudsWrapper>
                {isNight && <StarryBackground />}
            </CardWrapper>
        </ThemeProvider>
    )
}