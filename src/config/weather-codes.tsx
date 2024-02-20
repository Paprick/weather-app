import {
    PiMoonLight
} from 'react-icons/pi'
import {
    WiDaySunny,
    WiDaySunnyOvercast,
    WiDayCloudy,
    WiCloudy,
    WiFog,
    WiDaySprinkle,
    WiDayRain,
    WiDaySnow,
    WiDayShowers,
    WiDayLightning,
    WiDayStormShowers,
    WiNightAltCloudy,
    WiNightAltPartlyCloudy,
    WiNightFog,
    WiNightAltSprinkle,
    WiNightAltRain,
    WiNightAltSnow,
    WiNightAltShowers,
    WiNightLightning,
    WiNightAltStormShowers,
    WiNa
} from 'react-icons/wi'
import {
    ClearCard,
    PartlyCloudyCard,
    CloudyCard,
    FogCard,
    RainCard,
    SnowCard,
    RainShowerCard,
    ThunderstormCard,
    ThunderHailCard
} from '@components/weather-cards/index'


interface WeatherCode {
    descriptionId: string,
    DayIcon: React.ElementType,
    NightIcon: React.ElementType,
    Card: (arg: boolean) => React.JSX.Element,
}

const defaultWeatherCode = {
    descriptionId: 'unknownWeather',
    DayIcon: WiNa,
    NightIcon: WiNa
}
const weatherCodes: Record<number, WeatherCode> = {
    0: {
        descriptionId: 'clearSky',
        DayIcon: WiDaySunny,
        NightIcon: PiMoonLight,
        Card: (isNight: boolean) => <ClearCard isNight={isNight}/>
    },
    1: {
        descriptionId: 'mainlyClear',
        DayIcon: WiDaySunnyOvercast,
        NightIcon: WiNightAltPartlyCloudy,
        Card: (isNight: boolean) => <PartlyCloudyCard isNight={isNight}/>
    },
    2: {
        descriptionId: 'partlyCloudy',
        DayIcon: WiDayCloudy,
        NightIcon: WiNightAltCloudy,
        Card: (isNight: boolean) => <PartlyCloudyCard isNight={isNight}/>
    },
    3: {
        descriptionId: 'cloudy',
        DayIcon: WiCloudy,
        NightIcon: WiCloudy,
        Card: (isNight: boolean) => <CloudyCard isNight={isNight}/>
    },
    45: {
        descriptionId: 'fog',
        DayIcon: WiFog,
        NightIcon: WiNightFog,
        Card: (isNight: boolean) => <FogCard isNight={isNight}/>
    },
    48: {
        descriptionId: 'frostFog',
        DayIcon: WiFog,
        NightIcon: WiNightFog,
        Card: (isNight: boolean) => <FogCard isNight={isNight}/>
    },
    51: {
        descriptionId: 'lightDrizzle',
        DayIcon: WiDaySprinkle,
        NightIcon: WiNightAltSprinkle,
        Card: (isNight: boolean) => <RainShowerCard isNight={isNight} intensity={'low'}/>
    },
    53: {
        descriptionId: 'moderateDrizzle',
        DayIcon: WiDaySprinkle,
        NightIcon: WiNightAltSprinkle,
        Card: (isNight: boolean) => <RainShowerCard isNight={isNight} intensity={'medium'}/>
    },
    55: {
        descriptionId: 'heavyDrizzle',
        DayIcon: WiDaySprinkle,
        NightIcon: WiNightAltSprinkle,
        Card: (isNight: boolean) => <RainShowerCard isNight={isNight} intensity={'heavy'}/>
    },
    56: {
        descriptionId: 'lightFreezingDrizzle',
        DayIcon: WiDaySprinkle,
        NightIcon: WiNightAltSprinkle,
        Card: (isNight: boolean) => <RainShowerCard isNight={isNight} intensity={'low'}/>
    },
    57: {
        descriptionId: 'heavyFreezingDrizzle',
        DayIcon: WiDaySprinkle,
        NightIcon: WiNightAltSprinkle,
        Card: (isNight: boolean) => <RainShowerCard isNight={isNight} intensity={'heavy'}/>
    },
    61: {
        descriptionId: 'lightRaing',
        DayIcon: WiDayRain,
        NightIcon: WiNightAltRain,
        Card: (isNight: boolean) => <RainCard isNight={isNight} intensity={'low'}/>
    },
    63: {
        descriptionId: 'moderateRain',
        DayIcon: WiDayRain,
        NightIcon: WiNightAltRain,
        Card: (isNight: boolean) => <RainCard isNight={isNight} intensity={'medium'}/>
    },
    65: {
        descriptionId: 'heavyRain',
        DayIcon: WiDayRain,
        NightIcon: WiNightAltRain,
        Card: (isNight: boolean) => <RainCard isNight={isNight} intensity={'heavy'}/>
    },
    66: {
        descriptionId: 'LightFreezingRain',
        DayIcon: WiDayRain,
        NightIcon: WiNightAltRain,
        Card: (isNight: boolean) => <RainCard isNight={isNight} intensity={'low'}/>
    },
    67: {
        descriptionId: 'HeavyFreezingRain',
        DayIcon: WiDayRain,
        NightIcon: WiNightAltRain,
        Card: (isNight: boolean) => <RainCard isNight={isNight} intensity={'heavy'}/>
    },
    71: {
        descriptionId: 'lightSnowfall',
        DayIcon: WiDaySnow,
        NightIcon: WiNightAltSnow,
        Card: (isNight: boolean) => <SnowCard isNight={isNight} intensity={'low'}/>
    },
    73: {
        descriptionId: 'moderateSnowfall',
        DayIcon: WiDaySnow,
        NightIcon: WiNightAltSnow,
        Card: (isNight: boolean) => <SnowCard isNight={isNight} intensity={'medium'}/>
    },
    75: {
        descriptionId: 'heavySnowfall',
        DayIcon: WiDaySnow,
        NightIcon: WiNightAltSnow,
        Card: (isNight: boolean) => <SnowCard isNight={isNight} intensity={'heavy'}/>
    },
    77: {
        descriptionId: 'snowGrains',
        DayIcon: WiDaySnow,
        NightIcon: WiNightAltSnow,
        Card: (isNight: boolean) => <SnowCard isNight={isNight} intensity={'low'}/>
    },
    80: {
        descriptionId: 'slightRainShowers',
        DayIcon: WiDayShowers,
        NightIcon: WiNightAltShowers,
        Card: (isNight: boolean) => <RainShowerCard isNight={isNight} intensity={'low'}/>
    },
    81: {
        descriptionId: 'moderateRainShowers',
        DayIcon: WiDayShowers,
        NightIcon: WiNightAltShowers,
        Card: (isNight: boolean) => <RainShowerCard isNight={isNight} intensity={'medium'}/>
    },
    82: {
        descriptionId: 'violentRainShowers',
        DayIcon: WiDayShowers,
        NightIcon: WiNightAltShowers,
        Card: (isNight: boolean) => <RainShowerCard isNight={isNight} intensity={'heavy'}/>
    },
    85: {
        descriptionId: 'slightSnowShowers',
        DayIcon: WiDaySnow,
        NightIcon: WiNightAltSnow,
        Card: (isNight: boolean) => <SnowCard isNight={isNight} intensity={'low'}/>
    },
    86: {
        descriptionId: 'heavySnowShowers',
        DayIcon: WiDaySnow,
        NightIcon: WiNightAltSnow,
        Card: (isNight: boolean) => <SnowCard isNight={isNight} intensity={'heavy'}/>
    },
    95: {
        descriptionId: 'thunderstorm',
        DayIcon: WiDayLightning,
        NightIcon: WiNightLightning,
        Card: (isNight: boolean) => <ThunderstormCard isNight={isNight}/>
    },
    96: {
        descriptionId: 'thunderstormSlightHail',
        DayIcon: WiDayStormShowers,
        NightIcon: WiNightAltStormShowers,
        Card: (isNight: boolean) => <ThunderHailCard isNight={isNight} intensity={'low'}/>
    },
    99: {
        descriptionId: 'thunderstormHeavyHail',
        DayIcon: WiDayStormShowers,
        NightIcon: WiNightAltStormShowers,
        Card: (isNight: boolean) => <ThunderHailCard isNight={isNight} intensity={'heavy'}/>
    },
}
const weatherCodesHandler: ProxyHandler<Record<number, WeatherCode>> = {
    get(target, property) {
        return target[property as unknown as number] || defaultWeatherCode
    }
}
export const weatherCodesProxy = new Proxy(weatherCodes, weatherCodesHandler)
