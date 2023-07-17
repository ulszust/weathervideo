import { compositionConfig} from '../config'
import {useTranslations} from '../hooks'

export const IsItRaining = () => {
    const {text, video} = compositionConfig
    const T  = useTranslations()

    return (
     <div
         style={{
             flex: 1,
             backgroundColor: video.backgroundColor
     }}
     >
         <h1
             style={{
                 fontSize: text.fontSize.large,
                 color: text.color.regular
     }}
        >
             {T.intro.question}
         </h1>
     </div>
    )
}
