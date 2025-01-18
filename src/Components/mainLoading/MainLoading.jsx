import Lottie from "lottie-react";

import loadingAnimate from "../../../public/loding.json";

const MainLoading = () => {
    return (
        <div className="h-screen w-full flex justify-center items-center bg-white">
            <div>
                <Lottie className="w-[90px] h-[90px] mx-auto" animationData={loadingAnimate} />
            </div>
        </div>
    );
};

export default MainLoading;