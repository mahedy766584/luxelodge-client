import Container from "../Container/Container";
import Lottie from "lottie-react";

import loadingAnimate from "../../../public/loding.json"

const LoadingAnimate = () => {
    return (
        <Container>
            <div>
                <Lottie className="w-[200px] h-[200px] mx-auto" animationData={loadingAnimate} />
            </div>
        </Container>
    );
};

export default LoadingAnimate;