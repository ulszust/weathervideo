import {appConfig} from "./config";
import {toWeatherModel} from "./utils";

export const fetchWeatherDataforCity = async () => {
const url = `https://api.openweathermap.org/data/2.5/weather?lat=52.40&lon=20.92
&appid=${appConfig.weatherAPIkey}&units=metric`

   const {weatherState, temperature } = await fetch (url)
        .then(response => response.json())
        .then(data => toWeatherModel(data))
        .catch(() => {
            throw new Error('Failed to fetch weather data')
        })
    return {
    weatherState, temperature
    }

}

// Dzięki await i promise JS poczeka w linijce 8 na otrzymanie wartości weatherstate i temp - zwraca to w formie promise, więc w pliku Root musimy ponownie powiedzieć JS że ta funkcja jest asynchroniczna (dopisując asyns i await przy tej funkcji w Root)
