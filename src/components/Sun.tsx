import {
    Img, useCurrentFrame, interpolate
} from 'remotion'
import {Images} from "../assets";
import styled from "styled-components";

type SunProps = {
    scale?: number,
    className?: string,
    translateX?: number,
    translateY?: number,

}
export const Sun: React.FC<SunProps> = ({
                                            scale= 1,
                                            className,
                                            translateX = 0,
                                            translateY = 0,
                                        }) => {
    const frame = useCurrentFrame()
    const animatedRotation = interpolate(
        frame,
        [0, 120],
        [0, 45]
    )
    return (
        <Container
            className={className}
            style={{
                transform: `translate(${translateX}px, ${translateY}px)`
            }}>
            <BaseSun
                style={{
                    transform: `scale(${scale}) rotate(${animatedRotation}deg)`
                }}
                src={Images.Sun}
            />
        </Container>
    )
}

const BaseSun = styled(Img)`
    width: 374px;
    height: 374px;

`

const Container = styled.div`
    position: absolute;
`
