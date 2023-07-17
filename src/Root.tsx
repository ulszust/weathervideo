import {Composition} from 'remotion'
import {IsItRaining} from './components'
import {videoConfig} from './config'


export const RemotionRoot: React.FC = () => {
    // Destrukturyzacja, czyli wyciągamy poniżej z obiektu elementy które potrzebujemy
    const {FPS, videoDurationInFrames, videoHeight, videoWidth, videoID} = videoConfig
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
			/>
		</>
	);
};
