import {RainCloud} from "./RainCloud";
import {WeatherState} from "../common";
import {SnowCloud} from "./SnowCloud";
import {SunBehindTheCloud} from "./SunBehindTheCloud";
import {Cloud} from "./Cloud";
import {Sun} from "./Sun";

type WeatherProps = {
    weatherState: WeatherState
}

export const Weather: React.FC<WeatherProps> = ({weatherState}) => {
const cloudPositions = [
    {
        rotate: 15,
        scale: 0.6,
        translateX: 500,
        translateY: -940,
    },
    {
        rotate: -15,
        scale: 0.6,
        translateX: -430,
        translateY: 980,
    },

    {
        scale: 0.8,
        translateX: -530,
        translateY:-300,
    },
    {
        scale:0.7,
        translateX:-580,
        translateY: 500,
    },
    {
        scale: 0.7,
        translateX:560,
        translateY:300,
    }
]

    switch (weatherState) {
        case WeatherState.Raining:
        case WeatherState.Thunderstorm:
            return (
                <>
                    <RainCloud
                        translateX={0}
                        translateY={-600}
                        withThunder={weatherState === WeatherState.Thunderstorm}
                    />
                    {cloudPositions.map((position, index) => (
                        <RainCloud
                        key={index}
                        {...position}
                            />
                        ))}
                </>
            )
        case WeatherState.Snowing:
            return (
            <>
                <SnowCloud
                    translateX={0}
                    translateY={-600}
                />
                {cloudPositions.map((position, index) => (
                    <SnowCloud
                        key={index}
                        {...position}
                    />
                ))}
            </>
            )
        case WeatherState.Cloudy:
            return (
                <>
                    <SunBehindTheCloud
                        translateX={0}
                        translateY={-600}
                    />
                    {cloudPositions.map((position, index) => (
                        <Cloud
                            key={index}
                            {...position}
                        />
                    ))}
                </>
            )
        case WeatherState.Sunny:
            return (
                <>
                    <Sun
                        translateX={0}
                        translateY={-600}
                    />
                    {cloudPositions.map((position, index) => (
                        <Cloud
                            key={index}
                            {...position}
                        />
                    ))}
                </>

            )

        default:
            return null
    }
}


    // translateX={0}
    // translateY={-600}
