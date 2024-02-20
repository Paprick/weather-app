import { useState, useRef } from 'react'
import * as s from './search-bar.styled'

import { Textbox } from '@components/textbox/textbox'
import { AiOutlineSearch } from 'react-icons/ai'

import { useTranslation } from 'react-i18next'


interface Props {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>,
}

export const SearchBar: React.FC<Props> = ({ setSearchTerm }) => {
  const { t } = useTranslation()
  const textboxRef = useRef<HTMLInputElement | null>(null)
  const [isFocused, setIsFocused] = useState(false)

  const handleFocus = () => {
    setIsFocused(true)
  }
  const handleBlur = () => {
    setIsFocused(false)
  }
  const handleClick = () => {
    textboxRef.current && textboxRef.current.focus()
  }
  return (
    <s.Wrapper 
      className={`${isFocused ? 'focused' : ''}`} 
      onClick={ handleClick }
    >
      <s.Icon>
        <AiOutlineSearch size={'1.2rem'} title={t(`accessibility.images.searchMG`)}/>
      </s.Icon>
      <Textbox
        ref= { textboxRef } 
        setSearchTerm= { setSearchTerm }
        handleFocus= { handleFocus }
        handleBlur= { handleBlur }
        placeholder={ t('searchBarPlaceholder') }
        name={'City'}
      />
    </s.Wrapper>
  )
}