import { DefaultUnitOptions } from "@customtypes/index"
import { defaultUnitOptions } from "./user-options"

export const forecastApiURL = new URL(`https://api.open-meteo.com/v1/forecast`)

export const customizedForecastApiURL = ({ searchParamsState, unitOptions }: { searchParamsState: URLSearchParams, unitOptions: DefaultUnitOptions | null }) => {
    const modifiedForecastApiURL = forecastApiURL
    const longFromParams = searchParamsState.get('long') 
    const latFromParams = searchParamsState.get('lat')

    latFromParams && modifiedForecastApiURL.searchParams.set('latitude', latFromParams)
    longFromParams && forecastApiURL.searchParams.set('longitude', longFromParams)

    modifiedForecastApiURL.searchParams.set('hourly', 'temperature_2m,apparent_temperature,relativehumidity_2m,weathercode,pressure_msl,visibility,is_day')
    modifiedForecastApiURL.searchParams.set('daily', 'temperature_2m_max,temperature_2m_min,weathercode,sunrise,sunset,precipitation_sum,rain_sum,showers_sum,snowfall_sum,precipitation_probability_max')
    modifiedForecastApiURL.searchParams.set('current_weather', 'true')

    modifiedForecastApiURL.searchParams.set('temperature_unit', unitOptions ? unitOptions["Temperature Unit"] : defaultUnitOptions["Temperature Unit"])
    modifiedForecastApiURL.searchParams.set('windspeed_unit', unitOptions ? unitOptions["Speed Unit"] : defaultUnitOptions["Speed Unit"])
    modifiedForecastApiURL.searchParams.set('precipitation_unit', unitOptions ? unitOptions["Precipitation Unit"] : defaultUnitOptions["Precipitation Unit"])

    modifiedForecastApiURL.searchParams.set('timezone', 'auto')

    return modifiedForecastApiURL
}