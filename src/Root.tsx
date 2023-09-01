import {Composition} from 'remotion'
import {IsItRaining} from './components'
import {videoConfig} from './config'
import './reset.css'
import {useState} from 'react'
import {WeatherState} from "./common";

export const RemotionRoot: React.FC = () => {
    // Destrukturyzacja, czyli wyciągamy poniżej z obiektu elementy które potrzebujemy
    const {FPS, videoDurationInFrames, videoHeight, videoWidth, videoID} = videoConfig
    const [temperature] = useState(20)
    const [weatherState] = useState(WeatherState.Cloudy)
    return (
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
                    temperature,
                    weatherState

                }}
			/>
		</>
	);
};
