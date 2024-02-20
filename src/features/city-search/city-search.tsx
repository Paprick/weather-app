import { useState, useRef } from "react"
import * as s from './city-search.styled'
import { SetURLSearchParams } from "react-router-dom"

import { LocationData } from "@customtypes/index"

import { SearchBar } from "@features/search-bar/search-bar"
import { SearchResults } from "@features/search-results/search-results"

import { useDropdownToggle } from "@hooks/index"

import { useGeocodingApi } from "./use-geocoding-api"


interface Props {
    setSelectedLocation: React.Dispatch<React.SetStateAction<LocationData | null>>,
    setSearchParamsState: SetURLSearchParams,
}
export const CitySearch: React.FC<Props> = ({ setSelectedLocation, setSearchParamsState }) => {
    const wrapperRef = useRef<HTMLDivElement>(null)

    const [searchTerm, setSearchTerm] = useState('')

    const { isExpanded, handleDropdownExpand, handleContract } = useDropdownToggle(wrapperRef)
    const { locationData, isLoading } = useGeocodingApi(searchTerm)

    const handleOnWrapperFocus = () => {
        handleDropdownExpand()
    }

    const shouldResultsDisplay = isExpanded && searchTerm !== ''
    return(
        <s.Wrapper
            ref={ wrapperRef }
            onFocus={ handleOnWrapperFocus }
        >   
            <s.SearchBarWrapper>
                <SearchBar setSearchTerm= { setSearchTerm }/>
            </s.SearchBarWrapper>
            
            {shouldResultsDisplay &&
                <SearchResults 
                    locationData= { locationData }
                    setSelectedLocation= { setSelectedLocation }
                    handleMenuContract= { handleContract }
                    isLoading= { isLoading }
                    setSearchParamsState = { setSearchParamsState }
                />
            }
        </s.Wrapper>
    )
}