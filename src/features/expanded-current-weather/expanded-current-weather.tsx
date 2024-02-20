import * as s from './expanded-current-weather.styled'
import { useTranslation } from 'react-i18next'
import { WeatherInfoTile } from '@components/weather-info-tile/weather-info-tile'
import { windDirection } from '@utils/index'
import { WeatherData } from '@customtypes/index'
import { 
    WiRaindrop,
    WiRaindrops,
    WiSnowflakeCold,
    WiUmbrella,
    WiStrongWind,
    WiBarometer,
    WiWindDeg,
    WiHumidity,
    WiThermometer
} from 'react-icons/wi'
import { 
    MdOutlineVisibility,
} from 'react-icons/md'
import { 
    CgMathPercent
} from 'react-icons/cg'
import { NoWeatherData } from '@components/no-weather-data/no-weather-data'

interface Props {
    weatherData: WeatherData | null
}

export const ExpandedCurrentWeather: React.FC<Props> = ({ weatherData }) => {
    const { t } = useTranslation()

    if (weatherData === null) {
        return(
            <s.Wrapper>
                <NoWeatherData />
            </s.Wrapper>
        )
    }

    const directionLabel = t(`expandedWeather.directions.${windDirection(weatherData.current_weather.winddirection)}`)
    const WeatherDirection = ({ size }: { size: string } ) => {
        return (
            <s.WindDirection
                $rotation={ weatherData.current_weather.winddirection }
            >
                <WiWindDeg 
                    size={ size }
                />
            </s.WindDirection>
        )
    }
    const convertUnits = (units: number, conversionFactor: number) => {
        const convertedUnits = units / conversionFactor
        return Math.round(convertedUnits * 10) / 10
    }
    const coveretVisibilityUnits = () => {
        const unitsToConvert = weatherData.hourly.visibility[0]
        if(weatherData.hourly_units.visibility === 'ft') {
            const convertedUnits = convertUnits(unitsToConvert, 5280)
            return `${convertedUnits} ${t('unitAbbreviations.mi')}`
        }
        const convertedUnits = convertUnits(unitsToConvert, 1000)
        return `${convertedUnits} ${t('unitAbbreviations.km')}`
    }

    return (
        <s.Wrapper aria-label={t('accessibility.landmarks.advancedWeatherSection')}>
            <s.ExpandedTilesWrapper>
                <WeatherInfoTile
                    MainIcon={ WiUmbrella }
                    mainDescription={ t('expandedWeather.precipitation') }
                    mainValue={ `${weatherData.daily.precipitation_sum[0]} ${t(`unitAbbreviations.${weatherData.daily_units.precipitation_sum}`)}`}
                    listValues={[
                        { icon: CgMathPercent, description: t('expandedWeather.probability'), value: `${weatherData.daily.precipitation_probability_max[0]} ${weatherData.daily_units.precipitation_probability_max}` },
                        { icon: WiRaindrop, description: t('expandedWeather.rain'), value: `${weatherData.daily.rain_sum[0]} ${t(`unitAbbreviations.${weatherData.daily_units.rain_sum}`)}` },
                        { icon: WiRaindrops, description: t('expandedWeather.showers'), value: `${weatherData.daily.showers_sum[0]} ${t(`unitAbbreviations.${weatherData.daily_units.showers_sum}`)}` },
                        { icon: WiSnowflakeCold, description: t('expandedWeather.snow'), value: `${weatherData.daily.snowfall_sum[0]} ${t(`unitAbbreviations.${weatherData.daily_units.snowfall_sum}`)}` }
                    ]}
                />
            </s.ExpandedTilesWrapper>
            <s.SimpleTilesWrapper>
                <WeatherInfoTile
                    MainIcon={ WeatherDirection }
                    mainDescription={ t('expandedWeather.windDirection') }
                    mainValue={ `${directionLabel}` }
                />
                <WeatherInfoTile
                    MainIcon={ WiStrongWind }
                    mainDescription={ t('expandedWeather.windSpeed') }
                    mainValue={`${weatherData.current_weather.windspeed} ${t(`unitAbbreviations.${weatherData.current_weather_units.windspeed}`)}`}
                />
                <WeatherInfoTile
                    MainIcon={ WiThermometer }
                    mainDescription={ t('expandedWeather.perceivedTemperature') }
                    mainValue={`${weatherData.hourly.apparent_temperature[0]}`}
                />
                <WeatherInfoTile
                    MainIcon={ WiHumidity }
                    mainDescription={ t('expandedWeather.relativeHumidity') }
                    mainValue={`${weatherData.hourly.relativehumidity_2m[0]} ${weatherData.hourly_units.relativehumidity_2m}`}
                />
                <WeatherInfoTile
                    MainIcon={ WiBarometer }
                    mainDescription={ t('expandedWeather.airPressure') }
                    mainValue={`${weatherData.hourly.pressure_msl[0]} ${t(`unitAbbreviations.${weatherData.hourly_units.pressure_msl}`)}`}
                />
                <WeatherInfoTile
                    MainIcon={ MdOutlineVisibility }
                    mainDescription={ t('expandedWeather.visibility') }
                    mainValue={coveretVisibilityUnits()}
                />
            </s.SimpleTilesWrapper>
        </s.Wrapper>
    )
}