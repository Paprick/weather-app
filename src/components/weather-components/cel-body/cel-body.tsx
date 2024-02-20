import * as s from './cel-body.styled'
import { cardTheme } from '@config/theme'

interface Props {
    isNight?: boolean,
}
export const CelBody:React.FC<Props> = ({ isNight }) => {

    return (
        <>
            <s.CelBody>
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 200 200">
                    <circle cx="100" cy="-20" r="50" fill={`${ isNight ? cardTheme.moon : cardTheme.sun }`} />
                </svg>
            </s.CelBody>
            {!isNight &&
                <s.RayBox>
                    <s.Ray $top={0} $left={45} $rotate={0}/>
                    <s.Ray $top={10} $right={22} $rotate={45}/>
                    <s.Ray $top={32} $right={13} $rotate={90}/>
                    <s.Ray $bottom={11} $right={22} $rotate={135}/>
                    <s.Ray $bottom={2} $left={45} $rotate={180}/>
                    <s.Ray $bottom={11} $left={22} $rotate={225}/>
                    <s.Ray $top={32} $left={13} $rotate={270}/>
                    <s.Ray $top={10} $left={22} $rotate={315}/>
                </s.RayBox>
            }
        </>
    )
}