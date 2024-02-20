import * as s from './sun-position.styled'
import {
    WiDaySunny,
    WiSunrise,
    WiSunset,
    WiMoonrise,
    WiMoonset,
    WiMoonWaningCrescent3
} from 'react-icons/wi'
import { useTranslation } from 'react-i18next'
import { TileContainer } from '@styles/tile-container.styled'
import { WeatherData } from '@customtypes/index'
import { NoWeatherData } from '@components/no-weather-data/no-weather-data'
interface Props {
    weatherData: WeatherData | null
}

export const SunPosition: React.FC<Props> = ({ weatherData }) => {
    const { t } = useTranslation()

    if (weatherData === null) {
        return(
            <s.Wrapper>
                <NoWeatherData />
            </s.Wrapper>
        )
    }
        const isDay = weatherData.current_weather.is_day === 1
        const date = new Date()
        const locationTime = date.toLocaleString("en-GB", { timeZone: weatherData.timezone, timeStyle: 'short' })

        const formatedSunriseTime = weatherData.daily.sunrise[0].split('T')[1]
        const formatedSunsetTime = weatherData.daily.sunset[0].split('T')[1]
        const formatedMoonriseTime = weatherData.daily.sunset[0].split('T')[1] 
        const formatedMoonsetTime = weatherData.daily.sunrise[1].split('T')[1]
        
        const [hoursSunrise, minutesSunrise] = formatedSunriseTime.split(':').map(Number)
        const [hoursSunset, minutesSunset] = formatedSunsetTime.split(':').map(Number)
        const [hoursMoonset, minutesMoonset] = formatedMoonsetTime.split(':').map(Number)
        const [hoursCurrentTime, minutesCurrentTime] = locationTime.split(':').map(Number)

        const convertToMinutes = (hours: number, minutes: number) => {
            return hours * 60 + minutes
        }

        const nightTimeAdjust = convertToMinutes(24, 0) // add 24h after midnight
        const totalSunriseMinutes = convertToMinutes(hoursSunrise, minutesSunrise)
        const totalSunsetMinutes = convertToMinutes(hoursSunset, minutesSunset)
        let totalMoonsetMinutes = convertToMinutes(hoursMoonset, minutesMoonset)
        let totalCurrentTimeMinutes = convertToMinutes(hoursCurrentTime, minutesCurrentTime)
        
        const calculateDifference = (endCycle: number, startCycle: number) => {
            const multiplayer = 2 //Multiply by 2 to make 360deg of 180deg display purpose
            const absoluteDifference = Math.abs(endCycle - startCycle) * multiplayer
            return absoluteDifference
        }
        let differenceInDegrees = calculateDifference(totalSunsetMinutes, totalSunriseMinutes)

        if (!isDay) {
            totalMoonsetMinutes += nightTimeAdjust
            differenceInDegrees = calculateDifference(totalMoonsetMinutes, totalSunsetMinutes)
            if (totalCurrentTimeMinutes < totalSunsetMinutes) {
                totalCurrentTimeMinutes += nightTimeAdjust
            }
        }

        const degreePerMin = 360 / differenceInDegrees

        const calculateCompensation = (totalMinutes: number, degreePerMin: number) => {
            return totalMinutes * degreePerMin
        }

        let compensation = calculateCompensation(totalSunsetMinutes,degreePerMin)
        if (!isDay) {
            compensation = calculateCompensation(totalMoonsetMinutes, degreePerMin)
        }

        const degreeWithCurrentTime = (totalCurrentTimeMinutes * degreePerMin) - compensation

        const currentExpectedPosition = Math.round((degreeWithCurrentTime + 360) % 360)

        const percentageTowardsSetting = () => {
            const halfCircleDegree = currentExpectedPosition - 180
            const percentagePerDegree = 100 / 180
            const totalPercentage = Math.round(percentagePerDegree * halfCircleDegree)
            return totalPercentage
        }

    return (
        <TileContainer aria-label={t('accessibility.landmarks.sunPositionSection')}>
            <s.Wrapper>
                <s.SunPositionContainer>
                    <s.SunsetArea>
                        {isDay ? formatedSunsetTime : formatedMoonsetTime }
                        {isDay ? 
                            <WiSunset size={'2rem'} title={t('sunPosition.sunSet')}/> 
                            : 
                            <WiMoonset size={'2rem'} title={t('sunPosition.moonSet')}/> 
                        }
                        {isDay ? t('sunPosition.sunSet') : t('sunPosition.moonSet')}
                    </s.SunsetArea>
                    <s.PositionContainerWrapper>
                        <s.PositionContainer $degrees = { currentExpectedPosition }>
                            <s.Track $isDay = {isDay}/>
                            <s.CelBody $degrees = { currentExpectedPosition }>
                                {isDay ?
                                    <WiDaySunny size={'2rem'} title={t(`accessibility.images.sunPosition`, { percentage: percentageTowardsSetting() })}/>
                                    :
                                    <WiMoonWaningCrescent3 size={'2rem'} title={t(`accessibility.images.moonPosition`, { percentage: percentageTowardsSetting() })}/>
                                }
                            </s.CelBody>             
                        </s.PositionContainer> 
                    </s.PositionContainerWrapper>
                    <s.SunriseArea>
                        {isDay ? formatedSunriseTime : formatedMoonriseTime }
                        {isDay ? 
                            <WiSunrise size={'2rem'} title={t('sunPosition.sunRise')}/> 
                            : 
                            <WiMoonrise size={'2rem'} title={t('sunPosition.moonRise')}/> 
                        }
                        {isDay ? t('sunPosition.sunRise') : t('sunPosition.moonRise')}
                    </s.SunriseArea>
                </s.SunPositionContainer>
            </s.Wrapper>
        </TileContainer>
    )
}
