import Select from 'react-select'
import { useTranslation } from 'react-i18next'
import { theme as customTheme } from '@config/index'

interface Props<T> {
    /** Array of options that populate the select menu */
    options?: T[],
    /** Default value from menu to display */
    selectedOption?: T,
    /** Handle event on change*/
    onChange?: (selectedOption: T) => void,
    id?: string
}
export const SelectInput = <T extends { label: string }>({ options, selectedOption, onChange, id }: Props<T>) => {

    const { t } = useTranslation()
    
    const handleSelectChange = (option: T | null): void => {
        if (onChange && option) {
            onChange(option);
        }
      };

    const onFocus = ({ focused, isDisabled }: { focused: T , isDisabled: boolean }) => {
        const msg = `${t(`accessibility.selectInput.focusMsg`, { option: focused.label })}${
            isDisabled ? `, ${t(`accessibility.selectInput.disabled`)}` : ''
        }`;
        return msg;
    }
    const guidance = ({context} : { context: 'input' | 'menu' | 'value' }) => {
        let msg
        if (context === 'input') {
            msg = t('accessibility.selectInput.firstTimeGuaidance')
        } else if (context === 'menu') {
            msg = t('accessibility.selectInput.optionSelectionGuaidance')
        } else {
            msg = 'guaidance'
        }
        return msg
    }
    const onChangeGuaidance = ({label}: { label: string }) => {
        const msg = t('accessibility.selectInput.onChangeGuaidance', { option: label })
        return msg
    }
    const onFilter = () => {
        const msg = t('accessibility.selectInput.onFilterGuaidance', { length: options?.length })
        return msg
    }

    return (
        <Select
            ariaLiveMessages={{onFocus, guidance, onFilter, onChange: onChangeGuaidance}}
            inputId={id}
            name={id}
            onChange={handleSelectChange}
            value={selectedOption}
            options={options}
            isSearchable={false}
            theme={(theme) => ({
                ...theme,
                colors: {
                    ...theme.colors,
                    primary: customTheme.neutral75,
                    primary25: customTheme.neutral
                },
                borderRadius: 25,
            })}
            styles={{
                menuList: (base) => ({
                    ...base,
                    borderRadius: 21,
                    backgroundColor: customTheme.secondary,
                    border: `3px solid ${customTheme.neutral}`,
                    margin: '-5px',
                    padding: 1,
                }),
                option: (base, state) => ({
                    ...base,
                    color: customTheme.primary,
                    cursor: 'pointer',
                    boxShadow: state.isFocused ? `0 0 1px 1px ${customTheme.accent}` : 'none',
                    borderRadius: 25,
                }),
                control: (base, state) => ({
                    ...base,
                    boxShadow: state.isFocused ? `0 0 0 2px ${customTheme.accent}` : 'none'
                })
            }}
        />
    )
}