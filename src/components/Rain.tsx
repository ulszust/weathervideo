import {Img, interpolate, useCurrentFrame} from "remotion";
import {Images} from '../assets'
import styled from 'styled-components'

type RainProps = {
    left: number;
    bottom: number;
    opacity: number;
    slower?: boolean;
}

export const Rain: React.FC<RainProps> = ({
                                              left,
                                              bottom,
                                              opacity,
    slower,
                                          }) => {
    const frame = useCurrentFrame()
    const animatedOpacity = interpolate(
        frame,
        [0, slower ? 30 : 20],
        [opacity, 0]
    )

    const animatedBottom = interpolate(
        frame,
        [0, slower ? 30 : 20],
        [0, bottom],
        {extrapolateRight: 'clamp'},
    )

    const animatedLeft = interpolate(
        frame,
        [0, slower ? 30 : 20],
        [left, left -10],
        {extrapolateRight: 'clamp'},
    )

    return (
        <>
            <BaseRain src={Images.Rain}
                      style={{
                          left: animatedLeft,
                          bottom: animatedBottom,
                          opacity: animatedOpacity,
                      }}/>
        </>
    )
}

const BaseRain = styled(Img)`
    width: 23px;
    height: 33px;
    position: absolute;

`
