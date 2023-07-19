import {VideoBackground, WeatherBaseImage, Typography, Cloud} from '../components'
import {compositionConfig} from "../config";
import {WeatherState} from "../common";
import {useTranslations, useWeatherStateName} from "../hooks";
import styled from "styled-components";


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
    return (
        <VideoBackground backgroundColor={video.backgroundColor}>
            <Container>
            <WeatherBaseImage weatherState={weatherState}/>
            <TextContainer>
                <Typography.Heading>
                    {temperature}{T.common.celsius}
                </Typography.Heading>
                <Typography.Heading>
                    {stateName}
                </Typography.Heading>
            </TextContainer>
            </Container>
            <Cloud
                rotate={15}
                scale={0.6}
                translateX={500}
                translateY={-940}
            />
            <Cloud
                rotate={-15}
                scale={0.6}
                translateX={-430}
                translateY={-980}
            />
            <Cloud
                translateX={0}
                translateY={-600}
            />
            <Cloud
                scale={0.8}
                translateX={-530}
                translateY={-300}
            />
            <Cloud
                scale={0.7}
                translateX={-580}
                translateY={500}
            />
            <Cloud
                scale={0.7}
                translateX={560}
                translateY={300}
            />

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
