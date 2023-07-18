import {compositionConfig} from '../config'
import {useTranslations} from '../hooks'
import {VideoBackground} from './VideoBackground'
import {Cloud} from './Cloud'
import {Heading} from './typography'


export const IsItRaining = () => {
    const { video} = compositionConfig
    const T = useTranslations()

    return (
        <VideoBackground backgroundColor={video.backgroundColor}>
            <Heading>
                {T.intro.question}
            </Heading>
            <Cloud
                translateX={20}
                translateY={-20}
                scale={2}
                rotate={-10}
            />
            <Cloud
                translateX={150}
                translateY={-100}
            />
        </VideoBackground>
    )
}
