// Plik z konfiguracją aplikacji: w przypadku chęci zmiany parametrów całego video, wystarczy w tym pliku nadmienić dowolną linijkę

// Ilość klatek na sek
const FPS = 30
// Długość wideo
const videoDurationInSeconds = 10
// Ilość klatek
const videoDurationInFrames = videoDurationInSeconds * FPS
// Wymiary video wertykalnego:
const videoWidth = 1080
const videoHeight = 1920
const videoID = "IsItRaining"

// Exportujemy w formie obiektu (klucz i wartość są identyczne, więc możemy pominąć wartość)
export const videoConfig = {
    FPS,
    videoDurationInSeconds,
    videoDurationInFrames,
    videoWidth,
    videoHeight,
    videoID

}

export const appConfig = {
    city: 'Legionowo',
    weatherAPIkey: 'todo',
    discrodURL: 'https://hfsbfjhslink'
}

export const compositionConfig = {
    video: {
        backgroundColor: '#2FD7F5',
        outroBackgroundColor: '#22313D',
    },
    text: {
        fontSize: {
            small:'26px',
            medium: '36px',
            large: '75px',
            extraLarge: '94px',
        },
    color: {
            regular: '#FFFFFF',
            accent:  '#7D2A39'
    }
    }
}
