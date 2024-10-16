import ReactDOM from "react-dom";
import { Pannellum } from "pannellum-react";


const cardImageView = ({ myImage }) => {
    return (
        <div>
            <Pannellum
                width="100%"
                height="500px"
                image={myImage}
                pitch={10}
                yaw={180}
                hfov={110}
                autoLoad
                showZoomCtrl={false}
                onLoad={() => {
                    console.log("panorama loaded");
                }}
            >
                <Pannellum.Hotspot
                    type="custom"
                    pitch={31}
                    yaw={150}
                    handleClick={(evt, name) => console.log(name)}
                    name="hs1"
                />
            </Pannellum>
        </div>
    );
};

export default cardImageView;