/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import ReactPannellum, { getConfig } from "react-pannellum";


const ImageRotate = ({ rotateImg }) => {

    const config = {
        autoRotate: -2,
        pitch: 10,
        yaw: 250,
        hfov: 130,
        minHfov: 50,
        maxHfov: 190,
        minPitch: -30,
        maxPitch: 30,
        autoLoad: true,
        width: "100%",
        height: "100%",
        showZoomCtrl: false,
        showFullscreenCtrl: false,
    };
    const customStyle = {
        width: "100%",
        height: "100%",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "overlay",
    };

    return (
        <>
            <ReactPannellum
                id="1"
                sceneId="firstScene"
                imageSource={rotateImg}
                config={config}
                style={customStyle} // Apply custom style here
            />
        </>
    );
};

export default ImageRotate;