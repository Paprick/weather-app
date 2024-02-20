import { CelBody } from '@components/weather-components/cel-body/cel-body'
import { ThemeProvider } from 'styled-components'
import { CardWrapper } from '@styles/card-wrapper.styled'
import { StarryBackground } from '@components/weather-components/starry-background/starry-background'


interface Props {
    isNight?: boolean,
}
export const ClearCard: React.FC<Props> = ({ isNight = false }) => {

    return (
        <ThemeProvider theme={{ isNight }}>
            <CardWrapper aria-hidden={true}>
                <CelBody isNight={ isNight }/>
                {isNight && <StarryBackground />}
            </CardWrapper>
        </ThemeProvider>
    )
}