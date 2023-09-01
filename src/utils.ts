import {OpenWeatherResponse, WeatherModel, WeatherState} from "./common";

// Funkcja toWeatherModel przyjmuje jakiś obiekt, który jest typu OpenWeatherResponse, a zwraca obiekt, który jest typu WeatherModel
export const toWeatherModel = (data: OpenWeatherResponse): WeatherModel => {
const [weatherCondition] = data.weather
// W tym miejscu powyżej jest pierwszy element z tab weather, żeby poniżej wyciągnąć z niego id

    return {
        temperature: Math.floor(data.main.temp),
        weatherState: fromWeatherConditionCode(weatherCondition.id)
    }
}

const fromWeatherConditionCode = (id:number):WeatherState => {
    if (id >=200 && id <= 232) {
        return  WeatherState.Thunderstorm
    }
    if (id >= 300 && id <= 321 || id >= 500 && id <= 531) {
        return WeatherState.Raining
    }
    if (id >= 600 && id <= 622) {
        return WeatherState.Snowing
    }
    if (id >= 700 && id <= 781 || id >= 801 && id <= 804) {
        return WeatherState.Cloudy
    }
    return WeatherState.Sunny

}
