import { useCallback } from 'react'
import * as s from './options-container.styled'
import { avaliableUnitOptions, avaliableLanguageOptions } from '@config/index'
import { defaultUnitOptions } from '@config/index'
import { useTranslation } from 'react-i18next'

import { AvaliableUnitOption, AvaliableUnitOptions, AvaliableLanuageOption, DefaultUnitOptions } from '@customtypes/index'

import { SelectInput } from '@components/select-input/select-input'

import { TileContainer } from "@styles/tile-container.styled"


interface Props {
    unitOptions: DefaultUnitOptions | null
    setUnitOptions: React.Dispatch<React.SetStateAction<DefaultUnitOptions | null>>,
    isExpanded: boolean
}

export const OptionsContainer: React.FC<Props> = ({ setUnitOptions, isExpanded, unitOptions }) => {
    const { t, i18n } = useTranslation()

    const handleUnitsChange = (selectedOption: AvaliableUnitOption, name: keyof DefaultUnitOptions) => {
        setUnitOptions((prevOptions: DefaultUnitOptions | null) => {
            return prevOptions ? { ...prevOptions, [name]: selectedOption.value } : { ...defaultUnitOptions, [name]: selectedOption.value }
        })
    }
    const handleLanguageChange = (language: AvaliableLanuageOption) => {
        i18n.changeLanguage(language.value)
    }

    const mapUnitOptions = useCallback((option: AvaliableUnitOptions) => {
        const mappedOptions = option.options.map((mappedOption: AvaliableUnitOption) => (
            { value: mappedOption.value, label: t(`userOptions.units.option.${option.name}.options.${mappedOption.label}`) }
        ))
        return mappedOptions
    }, [t])
    

    return (
        <TileContainer
            $isExpanded={isExpanded}
            $roundedTopRight={false}
            $zIndex={998}
            aria-label={t('accessibility.landmarks.optionsSection')}
            id={'options-container'}
        >
            <s.OptionsGroupsWrapper>
                <s.OptionsGroup aria-labelledby={'units-group'}>
                    <s.OptionsGroupLabel id={'units-group'}>
                        {t('userOptions.units.groupLabel')}
                    </s.OptionsGroupLabel>
                    {avaliableUnitOptions.map((option, index) => {
                        const translatedOptions = mapUnitOptions(option)
                        let defValue = translatedOptions[0]
                        if (unitOptions) {
                            const userOptionValue = unitOptions[option.name as keyof DefaultUnitOptions]
                            const IndexInOption = option.options.findIndex(option => option.value === userOptionValue)
                            defValue = translatedOptions[IndexInOption]
                        }
                        const replace = option.name.replace(" ", "-")
                        return (
                            <s.OptionList key={index}>
                                <s.OptionLabel htmlFor={replace}>
                                    {t(`userOptions.units.option.${option.name}.label`)}
                                </s.OptionLabel>
                                <s.OptionSelectionWrapper>
                                    <SelectInput
                                        id={replace}
                                        options={translatedOptions}
                                        selectedOption={defValue}
                                        onChange={(selectedOption: AvaliableUnitOption) => { handleUnitsChange(selectedOption, option.name) }}
                                    />
                                </s.OptionSelectionWrapper>
                            </s.OptionList>
                        )
                    })}
                </s.OptionsGroup>
                <s.OptionsGroup aria-labelledby={'language-group'}>
                    <s.OptionsGroupLabel id={'language-group'}>
                        {t('userOptions.languages.groupLabel')}
                    </s.OptionsGroupLabel>
                    {avaliableLanguageOptions.map((option, index) => {
                        const translatedOptions = option.options.map((userOption) =>
                            ({ value: userOption.value, label: t(`userOptions.languages.options.${userOption.label}`) }))
                        let defValue = translatedOptions[0]
                        const IndexInOption = option.options.findIndex(option => option.value === i18n.language)
                        if (IndexInOption) {
                            defValue = translatedOptions[IndexInOption]
                        }
                        const replace = option.name.replace(" ", "-")
                        return (
                            <s.OptionList key={index}>
                                <s.OptionLabel htmlFor={replace}>
                                    {t(`userOptions.languages.label`)}
                                </s.OptionLabel>
                                <s.OptionSelectionWrapper
                                    key={i18n.language}
                                >
                                    <SelectInput
                                        id={replace}
                                        options={translatedOptions}
                                        selectedOption={defValue}
                                        onChange={(selectedOption: AvaliableLanuageOption) => { handleLanguageChange(selectedOption) }}
                                    />
                                </s.OptionSelectionWrapper>
                            </s.OptionList>
                        )
                    })}
                </s.OptionsGroup>
            </s.OptionsGroupsWrapper>

        </TileContainer>
    )
}
