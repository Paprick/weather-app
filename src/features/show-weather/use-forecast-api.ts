import { customizedForecastApiURL } from "@config/index";
import { DefaultUnitOptions, LocationData, WeatherData } from "@customtypes/index";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useTranslation } from 'react-i18next'

export const useForecastApi = ({ selectedLocation, searchParamsState, unitOptions }: { selectedLocation: LocationData | null, searchParamsState: URLSearchParams, unitOptions: DefaultUnitOptions | null }) => {
    const { t } = useTranslation()
    const [isLoading, setIsLoading] = useState(false)
    const [result, setResult] = useState<WeatherData | null>()

    useEffect(() => {
        setIsLoading(true)
        const forecastApiURL = customizedForecastApiURL({ searchParamsState, unitOptions })

        const fetchData = async () => {
            try {
                const response = await fetch(forecastApiURL)
                if (!response.ok) {
                    toast.error(t('errors.genericError'))
                    if (response.status === 400) {
                        const errorData = await response.json()
                        console.error(`Forecast API error - reason: ${errorData.reason}`)
                    } else {
                        console.error(`Forecast API error: ${response.status}`)
                    }
                }
                const data = await response.json()
                setResult(data)
            } catch (error) {
                if(error instanceof Error) {
                    console.warn(error.name, error.message)
                }
            } finally {
                setIsLoading(false)
            } 
        }
        if (searchParamsState.has('lat') && searchParamsState.has('long') && unitOptions) {
            fetchData()
        }
    }, [selectedLocation, searchParamsState, unitOptions, t])

    return { isLoading, result }
}