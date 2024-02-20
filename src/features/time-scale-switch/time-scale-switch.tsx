import * as s from './time-scale-switch.styled'
import { useState } from 'react'

import { TileContainer } from '@styles/tile-container.styled'
import { HourlyWeather } from '@features/hourly-weather/hourly-weather'
import { DailyWeather } from '@features/daily-weather/daily-weather'
import { WeatherData } from '@customtypes/weather-data'

import { useTranslation } from 'react-i18next'


interface Props {
    weatherData: WeatherData,
}

export const TimeScaleSwitch: React.FC<Props> = ({ weatherData }) => {
    const { t } = useTranslation()
    const [isDisplayedHourly, setIsDisplayedHourly] = useState(true)

    const handleDisplayHourly = () => {
        setIsDisplayedHourly(true)
    }
    const handleDisplayDaily = () => {
        setIsDisplayedHourly(false)
    }
    const handleKeyPress = (event: React.KeyboardEvent, handleDisplay: () => void) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault()
            handleDisplay()
            console.log('8===3')
        }
    }

    return (
        <TileContainer
            aria-label={t('accessibility.landmarks.timeScaleWeatherSection')}
        >
            <s.Wrapper>
                <s.TabsWrapper role={'tablist'}>
                    <s.TabButton
                        role={'tab'}
                        id={'hourly-switch'} 
                        tabIndex={0} 
                        onClick={handleDisplayHourly} 
                        className={isDisplayedHourly ? 'active' : ''}
                        onKeyDown={(e) => handleKeyPress(e, handleDisplayHourly)}
                        aria-selected={isDisplayedHourly}
                        aria-controls={'hourly-weather-display'}
                    >
                        {t('timeScaleWeather.hourly')}
                    </s.TabButton>
                    <s.TabButton
                        role={'tab'}
                        id={'daily-switch'}  
                        $type={'right'} 
                        tabIndex={0} 
                        onClick={handleDisplayDaily} 
                        className={isDisplayedHourly ? '' : 'active'}
                        onKeyDown={(e) => handleKeyPress(e, handleDisplayDaily)}
                        aria-selected={!isDisplayedHourly}
                        aria-controls={'daily-weather-display'}
                    >
                        {t('timeScaleWeather.daily')}
                    </s.TabButton>
                </s.TabsWrapper>
                <s.TimeWeather>
                {isDisplayedHourly ?
                    <HourlyWeather weatherData={weatherData}/>
                    :
                    <DailyWeather weatherData={weatherData}/>
                }
            </s.TimeWeather>
            </s.Wrapper>
        </TileContainer>
    )
}