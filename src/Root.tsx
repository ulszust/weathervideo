import {Composition, continueRender, delayRender} from 'remotion'
import {IsItRaining} from './components'
import {videoConfig} from './config'
import './reset.css'
import {useState, useEffect} from 'react'
import {WeatherState} from "./common";
import {fetchWeatherDataforCity} from "./actions";

export const RemotionRoot: React.FC = () => {
    // Destrukturyzacja, czyli wyciągamy poniżej z obiektu elementy które potrzebujemy
    const {FPS, videoDurationInFrames, videoHeight, videoWidth, videoID} = videoConfig
    const [handle] = useState(() => delayRender())
    const [isReadytoRender, setIsReadyToRender] = useState(false)
    const [temperature, setTemperature] = useState<number>()
    const [weatherState, setWeatherState] = useState<WeatherState>()
    const fetchWeatherData = async () => {
        const {temperature, weatherState} = await fetchWeatherDataforCity()

        setTemperature(temperature)
        setWeatherState(weatherState)
        setIsReadyToRender(true)
        continueRender(handle)
    }


    useEffect (() => {
        fetchWeatherData()
    }, [])
    return isReadytoRender ? (
		<>
			<Composition
                // Zastępujemy poniże właściwości parametrami z obiektu, aby były spójne z jednym plikiem konfiguracyjnym
				fps={FPS}
				id={videoID}
				width={videoWidth}
				height={videoHeight}
				component={IsItRaining}
				durationInFrames={videoDurationInFrames}
                defaultProps={{
                    // React nie wie co chcemy trzymać w tym stanie, więc wyżej przy usestate musimy mu podać typ i dopisać "as"
                    temperature: temperature as number,
                    weatherState: weatherState as WeatherState

                }}
			/>
		</>
	) : null
};



// Gdy react wyrenderuje po raz pierwszy nasz komponent Root to przejdzie po kodzie i zadeklaruje wszystkie stany i zobaczy, że isReadyToTender jest false więc nic nie wyrenderuje(nie zacznie tworzyć wideo)
// Nastepnie wywoła się hook useEffect i funkcja która jest pod niego podpięta i zaczniemy pobierać nasze dane
// Następnie gdy dane zostaną pobrane, zostanie ustawiona temperatura i weatherState, wywołujemy funkcję continueRender oraz zmieniamy flagę setIsReadyToRender na true
// ReaCT zaczyna renderować nasze wideo
