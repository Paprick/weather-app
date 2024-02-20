export interface WeatherData {
    latitude: number,
    longitude: number,
    generationtime_ms: number,
    utc_offset_seconds: number,
    timezone: string,
    timezone_abbreviation: string,
    elevation: string,
    current_weather: CurrentWeather,
    current_weather_units: CurrentWeatherUnits,
    hourly_units: HourlyUnits,
    hourly: HourlyWeather,
    daily_units: DailyUnits,
    daily: DailyWeather
}
export interface CurrentWeatherUnits {
    interval: string,
    is_day: string,
    temperature: string,
    time: string,
    weatherCode: string,
    winddirection: string,
    windspeed: string,
}
export interface CurrentWeather {
    temperature: number,
    windspeed: number,
    winddirection: number,
    weathercode: number,
    is_day: number,
    time: string
}
export interface HourlyUnits {
    time: string,
    temperature_2m: string,
    weathercode: string,
    pressure_msl: string,
    relativehumidity_2m: string;
    visibility: string,
    is_day: string,
    apparent_temperature: string,
}
export interface HourlyWeather {
    time: string[]
    temperature_2m: number[],
    weathercode: number[],
    pressure_msl: number[],
    relativehumidity_2m: number[],
    visibility: number[],
    is_day: number[],
    apparent_temperature: number[],
}
export interface DailyUnits {
    time: string,
    weathercode: string,
    sunrise: string,
    sunset: string,
    temperature_2m_max: string,
    temperature_2m_min: string,
    precipitation_sum: string,
    rain_sum: string,
    showers_sum: string,
    snowfall_sum: string,
    precipitation_probability_max: string,
}
export interface DailyWeather {
    time: string[],
    weathercode: number[],
    sunrise: string[],
    sunset: string[],
    temperature_2m_max: number[],
    temperature_2m_min: number[],
    precipitation_sum: number[],
    rain_sum: number[],
    showers_sum: number[],
    snowfall_sum: number[],
    precipitation_probability_max: number[],
}

