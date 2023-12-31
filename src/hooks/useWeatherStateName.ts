import {useTranslations} from "./useTranslations";
import {WeatherState} from "../common";

export const useWeatherStateName = (weatherState: WeatherState) => {
    const T = useTranslations()

    switch (weatherState) {
        case WeatherState.Raining:
            return T.weatherStates.raining
        case WeatherState.Thunderstorm:
            return T.weatherStates.thunderstorms
        case WeatherState.Snowing:
            return T.weatherStates.snowing
        case WeatherState.Cloudy:
            return T.weatherStates.cloudy
        case WeatherState.Sunny:
            return T.weatherStates.sunny
        default:
            return ''
    }
}
