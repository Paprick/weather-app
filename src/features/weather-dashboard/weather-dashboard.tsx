import { useState, useRef, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import * as s from './weather-dashboard.styled'

import { DefaultUnitOptions, LocationData } from "@customtypes/index"

import { ShowWeather } from "@features/show-weather/show-weather"
import { CitySearch } from "@features/city-search/city-search"
import { OptionsContainer } from "@features/options-container/options-container"


import { HiCog8Tooth } from 'react-icons/hi2'
import { RoundButton } from "@components/round-button/round-button"

import { useDropdownToggle } from "@hooks/index"
import { useConditionalRenderDelay } from "@hooks/index"

import { getUnitSettings } from "@utils/index"
import { useTranslation } from "react-i18next"

export const WeatherDashboard: React.FC = () => {
  const optionsRef = useRef<HTMLDivElement>(null)

  const [selectedLocation, setSelectedLocation] = useState<LocationData | null>(null)
  const [unitOptions, setUnitOptions] = useState<DefaultUnitOptions | null>(null)
  const [searchParamsState, setSearchParamsState] = useSearchParams('')

  const { isExpanded, handleDropdownExpand, handleContract } = useDropdownToggle(optionsRef)

  useEffect(() => {
    const userSettings = getUnitSettings()
    setUnitOptions(userSettings)
  }, [])

  useEffect(() => {
    if(unitOptions) {
      localStorage.setItem('unitSettings', JSON.stringify(unitOptions))
    }
  }, [unitOptions])
  const { t } = useTranslation()
  useEffect(() => { document.title = t('documentTitle', { location: searchParamsState.get('location') }) }, [t, searchParamsState])
  

  const handleOnClickOptions = () => {
    isExpanded ? handleContract() : handleDropdownExpand()
  }
  
  const delayTime = 100
  const delayRender = useConditionalRenderDelay(isExpanded, delayTime)

  return (
    <s.DashboardWrapper
      ref={ optionsRef }
    >
      <s.SearchAndOptionsWrapper aria-label={t('accessibility.landmarks.citySearchSection')}>
        <CitySearch 
          setSelectedLocation= { setSelectedLocation }
          setSearchParamsState={ setSearchParamsState }
        />
        <RoundButton 
          isExpanded={ isExpanded }
          onClick={ handleOnClickOptions }
          ariaLabel={t('accessibility.buttons.ariaSettings')}
        >
          <HiCog8Tooth size={'40px'} />
        </RoundButton>
      </s.SearchAndOptionsWrapper>
      {delayRender &&
        <OptionsContainer
          unitOptions= { unitOptions }
          setUnitOptions={ setUnitOptions }
          isExpanded={ isExpanded }
        />
      }
      <ShowWeather 
        selectedLocation={ selectedLocation }
        searchParamsState={ searchParamsState }
        unitOptions= { unitOptions }
      />
    </s.DashboardWrapper> 
  )
}
