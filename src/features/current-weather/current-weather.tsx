import * as s from './current-weather.styled'
import { useTranslation } from 'react-i18next'
import { WeatherData } from '@customtypes/index'
import { weatherCodesProxy } from '@config/index'
import { NoWeatherData } from '@components/no-weather-data/no-weather-data'

import { TileContainer } from '@styles/tile-container.styled'
import { MdLocationPin } from 'react-icons/md'

interface Props {
    weatherData: WeatherData | null,
    searchParamsState: URLSearchParams
}


export const CurrentWeather: React.FC<Props> = ({ weatherData, searchParamsState }) => {
    const { t } = useTranslation()

    if (weatherData === null) {
        return(
            <TileContainer>
                <NoWeatherData />
            </TileContainer>
        )
    }

    const date = new Date()
    const locationTime = date.toLocaleString(undefined, { timeZone: weatherData.timezone, timeStyle: 'short' })

    const weatherCode = weatherCodesProxy[weatherData.current_weather.weathercode]
    const isDay = weatherData.current_weather.is_day === 1
    const WeatherIcon = isDay ? weatherCode.DayIcon : weatherCode.NightIcon

    const getNameFromParams = searchParamsState.get('location')

    return (
        <TileContainer aria-label={t('accessibility.landmarks.currentWeatherSection')}>
                <s.LocationWrapper>
                    <s.Timezone>
                        {`${locationTime} (${weatherData.timezone})`}
                    </s.Timezone>
                    <s.Location>
                        <MdLocationPin size={'2.5rem'} title={t(`accessibility.images.locationPin`)}/>
                        {`${getNameFromParams}`}
                    </s.Location>
                </s.LocationWrapper>
                    <s.WeatherDetailsWrapper>
                        <s.WeatherDetails>
                            {weatherCode.Card(!isDay)}
                            <s.DegreesLabel>
                                {`${weatherData.current_weather.temperature}\u00B0`}
                            </s.DegreesLabel>
                            <s.IconWrapper>
                                <WeatherIcon size={'6rem'} title={t(`weatherCodes.${weatherCode.descriptionId}`)}/>
                            </s.IconWrapper>
                        </s.WeatherDetails>
                    </s.WeatherDetailsWrapper>
                    <s.WeatherDescription>
                        {t(`weatherCodes.${weatherCode.descriptionId}`)}
                    </s.WeatherDescription>
        </TileContainer>
    )
}
