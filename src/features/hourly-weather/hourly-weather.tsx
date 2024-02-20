import { NoWeatherData } from '@components/no-weather-data/no-weather-data'
import * as s from './hourly-weather.styled'

import { WeatherData } from '@customtypes/index'
import { weatherCodesProxy } from '@config/index'
import { useTranslation } from 'react-i18next'

interface Props {
    weatherData: WeatherData | null
}

export const HourlyWeather: React.FC<Props> = ({ weatherData }) => {
    const { t } = useTranslation()

    if (weatherData === null) {
        return(
            <s.Wrapper>
                <NoWeatherData />
            </s.Wrapper>
        )
    }
    const currentTime = weatherData.current_weather.time.split('T')[1]
    const slicedHour = currentTime.split(':')[0]
    const hourlyIndex = slicedHour[0] === '0' ? Number(slicedHour[1]) : Number(slicedHour)

    const hoursToDisplay = 20
    const slicedWeatherByHour = weatherData.hourly.weathercode.slice(hourlyIndex, (hourlyIndex + hoursToDisplay))
    return (
        <s.Wrapper aria-labelledby={'hourly-switch'} id={'hourly-weather-display'} role={'tabpanel'}>
            <s.scrollableContent tabIndex={0}>
            {slicedWeatherByHour.map((code, index) => {
                const weatherIconCode = weatherCodesProxy[code]
                const adjustedIndex = index + hourlyIndex
                const isDay = weatherData.hourly.is_day[adjustedIndex] === 1
                const WeatherIcon = isDay ? weatherIconCode.DayIcon  : weatherIconCode.NightIcon

                const formatedTime = weatherData.hourly.time[adjustedIndex].split('T')[1]

                return (
                    <s.WeatherHourContainer
                        key={ index }
                    >
                        <s.Label>
                            { formatedTime }
                        </s.Label>
                        <s.IconWrapper $isDay={isDay}>
                                <WeatherIcon size={'2rem'} title={t(`weatherCodes.${weatherIconCode.descriptionId}`)}/>
                        </s.IconWrapper>
                        <s.Label>
                            {`${weatherData.hourly.temperature_2m[adjustedIndex]}\u00B0`}
                        </s.Label>
                    </s.WeatherHourContainer>
                )
            })}
            </s.scrollableContent>
        </s.Wrapper>
    )
}
