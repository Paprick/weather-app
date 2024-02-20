import { NoWeatherData } from '@components/no-weather-data/no-weather-data'
import * as s from './daily-weather.styled'

import { WeatherData } from '@customtypes/index'
import { weatherCodesProxy } from '@config/index'

import { useTranslation } from 'react-i18next'

interface Props {
  weatherData: WeatherData | null
}

export const DailyWeather: React.FC<Props> = ({ weatherData }) => {
  const { t, i18n } = useTranslation()

  if (weatherData === null) {
    return(
        <s.Wrapper>
            <NoWeatherData />
        </s.Wrapper>
    )
  }

  const formatDate = (index: number, date: Date) => {
    if (index === 0) {
      return t('timeScaleWeather.today')
    } else if(index === 1) {
      return t('timeScaleWeather.tomorrow')
    }
    return date.toLocaleDateString(i18n.language, { weekday: 'long' })
  }
  
  return (
    <s.Wrapper aria-labelledby={'daily-switch'} id={'daily-weather-display'} role={'tabpanel'}>
      <s.ListedContent>
        {weatherData.daily.weathercode.map((code, index) => {
            const WeatherIcon = weatherCodesProxy[code]
            const date = new Date(weatherData.daily.time[index])
            return (
              <s.WeatherHourContainer
                key={ index }
              >
                <s.CenteredLabel aria-label={t('accessibility.labels.day')}>
                  {`${date.getDate()}`}
                </s.CenteredLabel>
                <s.LeftLabel aria-label={t('accessibility.labels.dayName')}>
                  { formatDate(index, date) }
                </s.LeftLabel>
                <s.RightLabel>
                  <s.IconWrapper>
                    <WeatherIcon.DayIcon 
                      size={'2rem'}
                      title={t(`weatherCodes.${WeatherIcon.descriptionId}`)}
                    />
                  </s.IconWrapper>
                </s.RightLabel>
                <s.LeftLabel aria-label={t('accessibility.labels.weatherDescription')}>
                  { t(`weatherCodes.${WeatherIcon.descriptionId}`) }
                </s.LeftLabel>
                <s.CenteredLabel aria-label={t('accessibility.labels.maxDegrees')}>
                    {`${weatherData.daily.temperature_2m_max[index]}`}
                    <s.tintedLabel aria-label={t('accessibility.labels.minDegrees')}>
                      {` / ${weatherData.daily.temperature_2m_min[index]}`}
                    </s.tintedLabel>
                </s.CenteredLabel>
              </s.WeatherHourContainer>
            )
        })}
      </s.ListedContent>
    </s.Wrapper>
  )
}
