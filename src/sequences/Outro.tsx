import styled from "styled-components";
import {VideoBackground, Typography} from "../components";
import {compositionConfig, appConfig} from "../config";
import {Images} from "../assets";
import {Img} from 'remotion'
import {useTranslations} from "../hooks";

export const Outro: React.FC = () => {
    const {video} = compositionConfig
    const T = useTranslations()
    const {discrodURL} = appConfig
    return (
        <VideoBackground backgroundColor={video.outroBackgroundColor}>
            <Border>
                <Container>
                <Codemask src={Images.Codemask}/>
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
const Codemask = styled(Img)`
    width: 324px;
    height: 251px;
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
