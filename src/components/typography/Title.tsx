import styled from 'styled-components'
import {compositionConfig} from '../../config'

type TitleProps = {
    accent?: boolean
}
export const Title = styled.h2<TitleProps>`
    color: ${props => props.accent
        ? compositionConfig.text.color.accent
        : compositionConfig.text.color.regular};
    font-size: ${compositionConfig.text.fontSize.large};
    font-weight: bold;
    font-family: "Calibri", sans-serif;
`
