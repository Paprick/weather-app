import * as s from './weather-info-tile.styled'

interface Props {
  MainIcon: React.ElementType,
  mainDescription: string,
  mainValue: string | number,
  listValues?: { icon: React.ElementType, description: string, value: string | number }[]
}

export const WeatherInfoTile: React.FC<Props> = ({ MainIcon, mainDescription, mainValue, listValues }) => {
  return (
    <s.Wrapper>
      <s.MainInfoWrapper>
        <s.MainLabel>
          {mainDescription}
        </s.MainLabel>
        <s.MainIcon>
          <MainIcon
            size={'4rem'}
            title={mainDescription}
          />
        </s.MainIcon>
        <s.MainLabel>
          {mainValue}
        </s.MainLabel>
      </s.MainInfoWrapper>
      {listValues &&
        <s.ListInfoWrapper>
          {listValues?.map((item, index) => (
            <s.ListedInfo
              key={index}
            >
              <s.InfoListIcon>
                <item.icon size={'2rem'} title={item.description}/>
              </s.InfoListIcon>
              <s.SubLabel>
                {`${item.description}: `}
              </s.SubLabel>
              <s.SubLabel>
                {item.value}
              </s.SubLabel>
            </s.ListedInfo>
          ))}
        </s.ListInfoWrapper>
      }
    </s.Wrapper>
  )
}