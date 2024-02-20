import { AvaliableUnitOptions, DefaultUnitOptions, AvaliableLanguageOptions } from "@customtypes/index"

export const avaliableUnitOptions: AvaliableUnitOptions[] = [
    { 
        name: 'Temperature Unit',
        options: [
            { value: 'celsius', label: 'Celsius' },
            { value: 'fahrenheit', label: 'Fahrenheit' }
        ]
    },
    { 
        name: 'Speed Unit', 
        options: [
            { value: 'kmh', label: 'Kilometers' },
            { value: 'mph', label: 'Miles' },
            { value: 'kn', label: 'Knots' }
        ]
    },
    { 
        name: 'Precipitation Unit',                 
        options: [
            { value: 'mm', label: 'Milimeters' },
            { value: 'inch', label: 'Inches' }
        ]
    }
]
export const avaliableLanguageOptions: AvaliableLanguageOptions[] = [
    { 
        name: 'Language',                 
        options: [
            { value: 'en', label: 'English' },
            { value: 'pl', label: 'Polish' }
        ]
    },
]
export const defaultUnitOptions: DefaultUnitOptions = {
    'Temperature Unit': 'celsius',
    'Speed Unit': 'kmh',
    'Precipitation Unit': 'mm',
}

