import * as s from './show-weather.styled'

import { CurrentWeather } from "@features/current-weather/current-weather";
import { ExpandedCurrentWeather } from '@features/expanded-current-weather/expanded-current-weather';
import { SunPosition } from "@features/sun-position/sun-position";
import { TimeScaleSwitch } from "@features/time-scale-switch/time-scale-switch"

import { LoadingCircle } from "@components/loading-circle/loading-circle";

import { DefaultUnitOptions, LocationData } from "@customtypes/index";


import { useForecastApi } from "./use-forecast-api";
interface Props {
    selectedLocation: LocationData | null,
    searchParamsState: URLSearchParams,
    unitOptions: DefaultUnitOptions | null,
}
export const ShowWeather: React.FC<Props> = ({ selectedLocation, searchParamsState, unitOptions }) => {
    const { isLoading, result } = useForecastApi({ selectedLocation, searchParamsState, unitOptions })

    const hasParams = searchParamsState.has('long') && searchParamsState.has('lat')
    const shouldDisplayWeather = result && hasParams

    if (isLoading && hasParams) return(
        <s.WeatherWrapper>
            <LoadingCircle />
        </s.WeatherWrapper>
    )

    return(
        <s.WeatherWrapper>
            {shouldDisplayWeather && (
                <>
                    <CurrentWeather 
                        weatherData={ result }
                        searchParamsState= { searchParamsState }
                    />
                    <TimeScaleSwitch weatherData={ result }/>
                    <ExpandedCurrentWeather weatherData={ result }/>
                    <SunPosition weatherData={ result }/>
                </>
            )}
        </s.WeatherWrapper>
    )
}
