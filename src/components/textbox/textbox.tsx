import { ChangeEvent, forwardRef } from "react"
import * as s from './textbox.styled'

interface Props {
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>,
    handleFocus: () => void,
    handleBlur: () => void,
    ref: React.ForwardedRef<HTMLInputElement | null>,
    placeholder?: string | undefined,
    name?: string | undefined
}

export const Textbox: React.FC<Props> = forwardRef(({ setSearchTerm, handleFocus, handleBlur, placeholder = 'text', name }, ref) => {

    const handlechange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value)
    }

    return(
        <>
            <s.Textbox
                ref={ ref }
                onChange={ (e) => { handlechange(e); }}
                placeholder={ placeholder }
                onFocus={ handleFocus }
                onBlur={ handleBlur }
                name={name}
            >
            </s.Textbox>
        </>
    )
})