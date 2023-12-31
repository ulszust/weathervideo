import {VideoBackground, WeatherBaseImage, Typography, Weather} from '../components'
import {compositionConfig} from "../config";
import {WeatherState} from "../common";
import {useTranslations, useWeatherStateName} from "../hooks";
import styled from "styled-components";
import {useCurrentFrame, interpolate} from "remotion";


type ResultProps = {
    weatherState: WeatherState,
    temperature: number,
}



export const Result: React.FC<ResultProps> = (
    {weatherState,temperature}
) => {
    const {video} = compositionConfig
    const T = useTranslations()
    const stateName = useWeatherStateName(weatherState)
    const frame = useCurrentFrame()
    const animatedOpacity = interpolate(
        frame,
        [0,30],
        [0,1]
    )
    return (
        <VideoBackground backgroundColor={video.backgroundColor}>
            <Weather weatherState={weatherState}/>
            <Container>
            <WeatherBaseImage weatherState={weatherState}/>
            <TextContainer
            style={{
                opacity: animatedOpacity
            }}>
                <HeadingWithShadow>
                    {temperature}{T.common.celsius}
                </HeadingWithShadow>
                <HeadingWithShadow>
                    {stateName}
                </HeadingWithShadow>
            </TextContainer>
            </Container>
        </VideoBackground>
    )
}

const Container = styled.div`
display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 300px;
`

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top:50px;
`

const HeadingWithShadow = styled(Typography.Heading)`
text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);
    z-index: 2;
`
