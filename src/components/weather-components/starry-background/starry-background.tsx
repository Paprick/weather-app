import * as s from './starry-background.styled'

export const StarryBackground:React.FC = () => {
    return (
        <s.StarryBackgroundBox>
            <s.StarsGroup1 />
            <s.StarsGroup2 />
            <s.StarsGroup3 />
            <s.StarsGroup4 />
        </s.StarryBackgroundBox>
    )
}