import Lottie from "lottie-react";

import loadingAnimate from "../../../public/loding.json";
import Logo from "../Logo/Logo";

const MainLoading = () => {
    return (
        <div className="h-screen w-full flex justify-center items-center bg-white">
            <div>
                <div className="animate-pulse duration-700">
                    <Logo />
                </div>
                <Lottie className="w-[200px] h-[200px] mx-auto" animationData={loadingAnimate} />
            </div>
        </div>
    );
};

export default MainLoading;