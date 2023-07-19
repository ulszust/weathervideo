// Enum podczas kompilacji TS na JS zostanie zamieniony na obiekt, w przeciwieństwie do typu, który znika podczas kompilacji, enum ją przetrwa
export enum WeatherState {
    Raining = 0,
    Thunderstorm = 1,
    Snowing = 2,
    Cloudy = 3,
    Sunny = 4,
}
