import {VideoBackground, WeatherBaseImage, Typography, SnowCloud, Sun} from '../components'
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
            <SnowCloud
                rotate={15}
                scale={0.6}
                translateX={500}
                translateY={-940}
            />
            <SnowCloud
                rotate={-15}
                scale={0.6}
                translateX={-430}
                translateY={-980}
            />
            <Sun
                translateX={0}
                translateY={-600}
            />
            <SnowCloud
                scale={0.8}
                translateX={-530}
                translateY={-300}
            />
            <SnowCloud
                scale={0.7}
                translateX={-580}
                translateY={500}
            />
            <SnowCloud
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
