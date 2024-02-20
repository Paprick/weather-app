import { useState, useEffect } from 'react'

export const useDropdownToggle = (ref: React.RefObject<HTMLDivElement>) => {
    const [isExpanded, setIsExpanded] = useState(false)

    const handleDropdownExpand = () => {
        setIsExpanded(true)
    }
    const handleContract = () => {
        setIsExpanded(false)
    }

    useEffect(() => {
        const  handleClickOutside = (event: MouseEvent | KeyboardEvent): void => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setIsExpanded(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        document.addEventListener('keyup', handleClickOutside)

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
            document.removeEventListener('keyup', handleClickOutside)
        }
    }, [ref])

    return { isExpanded, handleDropdownExpand, handleContract }
}