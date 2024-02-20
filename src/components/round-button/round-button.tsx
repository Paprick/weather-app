import { ReactNode } from 'react'
import * as s from './round-button.styled'

interface Props {
    children?: ReactNode,
    isExpanded?: boolean,
    onClick?: () => void,
    ariaLabel: string
}

export const RoundButton: React.FC<Props> = ({ children, isExpanded, onClick, ariaLabel }) => {

    return (
        <s.ButtonWrapper className={`${isExpanded ? 'active': ''}`}>
          <s.RotatingWrapper>
            <s.ButtonHover 
              tabIndex={0} 
              onClick={ onClick } 
              aria-label={ariaLabel} 
              aria-pressed={isExpanded}
              aria-controls={'options-container'}
            >
              { children }
            </s.ButtonHover>
          </s.RotatingWrapper>
        </s.ButtonWrapper>
    )
}