import { DefaultUnitOptions } from "@customtypes/user-options"
import { defaultUnitOptions } from "@config/index"

export const getUnitSettings = (): DefaultUnitOptions => {
    const unitSettings = localStorage.getItem('unitSettings')
    if (unitSettings) {
        const jsonSettings = JSON.parse(unitSettings)
       return jsonSettings
    }
    return defaultUnitOptions
}