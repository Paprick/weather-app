import { TemperatureUnits, SpeedUnits, PrecipitationUnits } from './weather-units'
import { Language } from './language-data'



export interface AvaliableUnitOption {
  value: TemperatureUnits | SpeedUnits | PrecipitationUnits,
  label: string
}
export interface AvaliableUnitOptions {
  name: keyof DefaultUnitOptions,
  options: AvaliableUnitOption[]
}

export interface AvaliableLanuageOption {
  value: Language,
  label: string
}
export interface AvaliableLanguageOptions {
  name: string,
  options: AvaliableLanuageOption[]
}

export interface DefaultUnitOptions {
  'Temperature Unit': TemperatureUnits,
  'Speed Unit': SpeedUnits,
  'Precipitation Unit': PrecipitationUnits,
}
