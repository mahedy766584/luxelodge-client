import errorAnimate from "../../../public/errorJson.json";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import Button from "../../Components/button/Button";

const ErrorPage = () => {
    return (
        <div className="h-screen w-full flex flex-col justify-center items-center bg-white relative">
            <Lottie className="w-[150px] h-[150px] mx-auto" animationData={errorAnimate} />
            <p className="text-lg font-normal">Your page not found. Please!</p>
            <div className="flex">
                <Link to={'/'}>
                    <Button
                        textSize={'text-lg'}
                        paddingX={'px-4'}
                        border={'border'}
                        borderColor={'border-redBg'}
                        bounce_animate={'animate-none'}
                    >Back to Home</Button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;