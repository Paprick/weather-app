import * as s from './search-results.styled'
import { SetURLSearchParams } from "react-router-dom"

import { LoadingCircle } from '@components/loading-circle/loading-circle'

import { LocationData } from '@customtypes/index'
import { useTranslation } from 'react-i18next'

interface Props {
    locationData: LocationData[] | null,
    handleMenuContract: () => void,
    isLoading: boolean,
    setSelectedLocation: React.Dispatch<React.SetStateAction<LocationData | null>>
    setSearchParamsState: SetURLSearchParams,
}
export const SearchResults: React.FC<Props> = ({ 
    locationData, 
    handleMenuContract, 
    isLoading, 
    setSelectedLocation, 
    setSearchParamsState 
}) => {
    const { t } = useTranslation()

    const setParams = (data: LocationData) => {
        setSearchParamsState({
            location: data.name,
            lat: data.latitude.toString(),
            long: data.longitude.toString(),
        })
    }
    
    const handleOnClick = (result: LocationData) => {
        setSelectedLocation(result)
        handleMenuContract()
        setParams(result)
    }
    const handleOnKeyDown = (event: React.KeyboardEvent<HTMLLIElement>, result: LocationData) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault()
            handleOnClick(result)
        }
    }

    if (isLoading) return (
        <s.SearchResultsWrapper>
            <LoadingCircle />
        </s.SearchResultsWrapper>
    )
    
    if (!locationData?.length) return (
        <s.SearchResultsWrapper>
            <s.NoResultsLabel>
                {t('searchResults.noResultsFound')}
            </s.NoResultsLabel>
        </s.SearchResultsWrapper>
    )
    
    return (
        <s.SearchResultsWrapper>
            <s.InnerWrapper>
                <s.SearchResultsHeaders>
                    <s.SearchResultLabel id={'results-country-label'}>
                        {t('searchResults.country')}
                    </s.SearchResultLabel>
                    <s.SearchResultLabel id={'results-city-label'}>
                        {t('searchResults.city')}
                    </s.SearchResultLabel>
                    <s.SearchResultLabel id={'results-area-label'}>
                        {t('searchResults.area')}
                    </s.SearchResultLabel>
                </s.SearchResultsHeaders>
                <s.SearchResultsList aria-labelledby={'results-country-label results-city-label results-area-label'}>
                {locationData?.map((result) => (
                    <s.SearchResultItem
                        key={result.id}
                        tabIndex={ 0 }
                        onClick={ () => { handleOnClick(result) } }
                        onKeyDown={(event) => { handleOnKeyDown(event, result) }}
                    >
                        <s.CountryFlagWrapper>
                            <s.CustomCountryFlag
                                countryCode={result.country_code}
                                svg
                                aria-label={result.country}
                                alt={result.country}
                                title={result.country}
                            />
                        </s.CountryFlagWrapper>
                        <s.SearchResultLabel>
                            {result.name}
                        </s.SearchResultLabel>
                        <s.SearchResultLabel>
                            {result.admin1 ? result.admin1 : '-'}
                        </s.SearchResultLabel>
                    </s.SearchResultItem>
                ))}
                </s.SearchResultsList>
            </s.InnerWrapper>
        </s.SearchResultsWrapper>
    )
}