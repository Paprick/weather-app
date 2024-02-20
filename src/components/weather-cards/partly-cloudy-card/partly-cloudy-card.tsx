import { ThemeProvider } from 'styled-components'

import { CardWrapper } from '@styles/card-wrapper.styled'

import { CelBody } from '@components/weather-components/cel-body/cel-body'
import { Cloud } from '@components/weather-components/cloud/cloud'
import { StarryBackground } from '@components/weather-components/starry-background/starry-background'
import { CloudsWrapper } from '@styles/clouds-wrapper.styled'


interface Props {
    isNight?: boolean,
}
export const PartlyCloudyCard: React.FC<Props> = ({ isNight = false }) => {

    return (
        <ThemeProvider theme={{ isNight }}>
            <CardWrapper aria-hidden={true}>
                <CelBody isNight={ isNight }/>
                <CloudsWrapper>
                    <Cloud top={-60} left={-30}/>
                </CloudsWrapper>
                {isNight && <StarryBackground />}
            </CardWrapper>
        </ThemeProvider>
    )
}