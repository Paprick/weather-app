const geocodingApiConfig = {
    maxResults: '10',
    format: 'json'
}

export const geocodingApiURL = new URL('https://geocoding-api.open-meteo.com/v1/search')

export const customizedGeocodingApiURL = ({ searchTerm, language }: { searchTerm: string, language: string }) => {
    const modifiedGeocodingApiURL = geocodingApiURL
    geocodingApiURL.searchParams.set('name', searchTerm)
    geocodingApiURL.searchParams.set('count', geocodingApiConfig.maxResults)
    geocodingApiURL.searchParams.set('language', language)
    geocodingApiURL.searchParams.set('format', geocodingApiConfig.format)

    return modifiedGeocodingApiURL
}