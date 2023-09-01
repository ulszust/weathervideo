import styled from "styled-components";
import {VideoBackground, Typography, Codemask,} from "../components";
import {compositionConfig, appConfig} from "../config";
import {Images} from "../assets";
import {Img, useCurrentFrame, interpolate} from 'remotion'
import {useTranslations} from "../hooks";

export const Outro: React.FC = () => {
    const {video} = compositionConfig
    const T = useTranslations()
    const {discrodURL} = appConfig
    const frame = useCurrentFrame()
    const borderOpacity = interpolate(
        frame,
        [0, 15],
        [0, 1]
    )
    const contentOpacity = interpolate(
        frame,
        [0, 15, 30],
        [0, 0, 1]
    )
    return (
        <VideoBackground backgroundColor={video.outroBackgroundColor}>
            <Border
                style={{
                    opacity: borderOpacity
                }}
            >
                <Container
                style={{
                    opacity: contentOpacity
                }}>
                <Codemask/>
                <Section>
                    <Typography.Regular>
                        {T.outro.question}
                    </Typography.Regular>
                    <DiscordContainer>
                    <Discord src={Images.Discord}/>
                    </DiscordContainer>
                    <Typography.Regular>
                        {T.outro.discord}
                    </Typography.Regular>
                    <Typography.Regular>
                        {discrodURL}
                    </Typography.Regular>
                </Section>
                <Typography.Note>
                    {T.outro.note}
                </Typography.Note>
                </Container>
            </Border>
        </VideoBackground>
    )
}

const Border = styled.div`
    position: absolute;
    border: 9px solid white;
    top: 70px;
    bottom: 70px;
    left: 70px;
    right: 70px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`

const Section = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`

const Discord = styled(Img)`
    width: 133px;
    height: 101px;
`

const Container = styled.div`
    max-width: 630px;
    display: flex;
    flex-direction: column;
    margin-top: 200px;
    margin-bottom: 200px;
    align-items: center;
    flex: 1;
    justify-content: space-between;
    text-align: center;
`

const DiscordContainer = styled.div `
    height: 250px;
    align-items: center;
    display: flex;
`
