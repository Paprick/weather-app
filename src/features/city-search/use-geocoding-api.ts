import { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next'
import { toast } from 'react-toastify'

import { LocationData } from "@customtypes/index";
import { customizedGeocodingApiURL } from "@config/index";

export const useGeocodingApi = (searchTerm: string) => {
    const { t, i18n } = useTranslation()
    const [isLoading, setIsLoading] = useState(true)
    const [locationData, setLocationData] = useState<LocationData[] | null>(null)

    const language = i18n.language

    useEffect(() => {
        setIsLoading(true)
        const geocodingApiURL = customizedGeocodingApiURL({ searchTerm, language })

        //Fetch Data
        const fetchData = async () => {
            try {
                const response = await fetch(geocodingApiURL)
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
                setLocationData(data.results)
            } catch (error) {
                if(error instanceof Error) {
                    console.error(error.message)
                }
            } finally {
                setIsLoading(false)
            }
        }
        
        //Debounce until user stops typing
        const debounceTimer = 1000
        const debounceFetch = setTimeout(() => {
            if (searchTerm) {
                fetchData()
            }
        }, debounceTimer)
        return () => clearTimeout(debounceFetch)
    },[searchTerm, language, t])

    return { locationData, isLoading }
}