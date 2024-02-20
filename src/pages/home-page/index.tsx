import * as styled from './index.styled'
import { WeatherDashboard } from '@features/weather-dashboard/weather-dashboard'
import { PopUp } from '@components/pop-up/pop-up'
import { useTranslation } from 'react-i18next'

export const HomePage: React.FC = () => {
    const { i18n } = useTranslation()
    document.documentElement.lang = i18n.language
    return(
        <styled.MainWrapper>
            <WeatherDashboard />
            <PopUp />
        </styled.MainWrapper>
    )
}