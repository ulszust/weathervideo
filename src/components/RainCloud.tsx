import {Cloud} from "./Cloud";
import {Rain} from "./Rain";
import {Loop} from "remotion";
import {Thunder} from "./Thunder";

type RainCloudProps = {
    translateX?: number,
    translateY?: number,
    scale?: number,
    rotate?: number,
    withThunder?: boolean,
}
export const RainCloud: React.FC<RainCloudProps> = ({
                                                        translateX = 0,
                                                        translateY = 0,
                                                        scale = 1,
                                                        rotate = 0,
                                                        withThunder
                                                    }) => {
    const rainPosition = [
        {
            bottom: -60,
            left: 60,
        },
        {
            bottom: -70,
            left: 180,
        },
        {
            bottom: -60,
            left: 300,
        },
        {
            bottom: -170,
            left: 100,
        },
        {
            bottom: -140,
            left: 220,
        },
        {
            bottom: -145,
            left: 350,
        },
        {
            bottom: -225,
            left: 150,
        },
        {
            bottom: -225,
            left: 280,
        }
    ]

    return (
        <>
            <Cloud
                translateX={translateX}
                translateY={translateY}
                scale={scale}
                rotate={rotate}>
                <Loop
                    durationInFrames={30}
                    times={Infinity}

                >
                    {rainPosition.map((position, index) => (
                        <>
                            <Rain
                                key={`${index}-1`}
                                left={position.left}
                                bottom={position.bottom}
                                opacity={1}
                            />
                            <Rain
                                key={`${index}-2`}
                                slower
                                left={position.left - 30}
                                bottom={position.bottom - 70}
                                opacity={0.7}

                            />
                        </>
                    ))}
                </Loop>
                {withThunder && (
                    <Loop
                    durationInFrames={60}
                    times={Infinity}>
                        <Thunder
                        bottom={-150}
                        left={200}/>
                        <Thunder
                        bottom={-120}
                        left={80}
                        scale={0.7}/>
                    </Loop>
                )}
            </Cloud>

        </>
    )
}




