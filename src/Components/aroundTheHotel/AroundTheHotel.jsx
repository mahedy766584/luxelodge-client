
import image1 from "../../assets/aroundImg/around1.jpg"
import image2 from "../../assets/aroundImg/around2.jpg"
import image3 from "../../assets/aroundImg/around3.jpg"
import image4 from "../../assets/aroundImg/around5.jpg"

/* eslint-disable no-unused-vars */
import ReactPannellum, { getConfig } from "react-pannellum";


const AroundTheHotel = () => {

    const aroundImages = [
        { url: image1 },
        { url: image2 },
        { url: image3 },
        { url: image4 },
    ]

    const config = {
        autoRotate: -2,
        pitch: 10,
        yaw: 180,
        hfov: 110,
        minHfov: 50,
        maxHfov: 120,
        minPitch: -30,
        maxPitch: 30,
        autoLoad: true,
    };

    const customStyle = {
        width: "100%",
        height: "500px",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "overlay",
        marginTop: "10px",
        padding: "10px"
    };

    return (
        <div className="mb-20">
            <h1 className="text-4xl font-normal text-center lg:text-start font-poppins py-5 text-navyGray">LuxeLodge Around</h1>
            <div className="grid lg:grid-cols-4 pb-20">
                {
                    aroundImages.map((image, index) => (
                        <div key={index} className="w-full h-[400px] relative rounded lg:px-0">
                            <ReactPannellum
                                id={`pannellum-${index}`} // Unique id for each image
                                sceneId={`scene-${index}`} // Unique sceneId for each image
                                imageSource={image.url}
                                config={config}
                                style={customStyle} // Apply custom style here
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default AroundTheHotel;