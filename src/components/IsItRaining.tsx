import {Sequence, useVideoConfig} from "remotion";
import {Intro} from "../sequences";


export const IsItRaining = () => {
    const {fps} = useVideoConfig()
    return (
        <Sequence
            durationInFrames={3 * fps}
            name="Intro"
        >
            <Intro/>
        </Sequence>
    )
}
