import styled from "styled-components";
type VideoBackgroundProps = {
    backgroundColor: string
}
// // export const VideoBackground: React.FC<VideoBackgroundProps> = ({children, backgroundColor}) => {
// //     return (
// //         <div
// //             style={{
// //                 flex: 1,
// //                 backgroundColor
// //             }}
// //         >
// //             {children}
// //         </div>
// //     )
// równoznaczne z poniższym; biblioteka styledcomponents domyślnie renderuje nasze dzieci pomiędzy tym znacznikiem}

export const VideoBackground = styled.div<VideoBackgroundProps>`
    flex: 1;
    background-color: ${props => props.backgroundColor};
`
