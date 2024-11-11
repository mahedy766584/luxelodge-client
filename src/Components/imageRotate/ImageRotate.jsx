/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import ReactPannellum, { getConfig } from "react-pannellum";


const ImageRotate = ({ rotateImg }) => {

    const config = {
        autoRotate: -1,
        pitch: 10,
        yaw: 10,
        hfov: 500,
        minHfov: 50,
        maxHfov: 120,
        minPitch: -30,
        maxPitch: 30,
        autoLoad: true,
        showZoomCtrl: false,
        showFullscreenCtrl: false,
    };

    const customStyle = {
        width: "100%",
        height: "100%",
        backgroundPosition: "center",
        backgroundSize: "contain",
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