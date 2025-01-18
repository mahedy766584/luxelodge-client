/* eslint-disable no-unused-vars */
import ReactPannellum, { getConfig } from "react-pannellum";
import heroBg from "../../../assets/heroBg/heroBg9.jpg"; ///8 //9 //
import Checking from "../../checking/Checking";
import Button from "../../button/Button";
import Translate from "../../translate/Translate";

const HeroContent = () => {

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
        height: "100vh",
        backgroundPosition: "center",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "overlay",
    };

    return (
        <div>
            <div className="relative">
                <div className='relative'>
                    <ReactPannellum
                        id="1"
                        sceneId="firstScene"
                        imageSource={heroBg}
                        config={config}
                        style={customStyle} // Apply custom style here
                    />
                    <div className='absolute top-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center flex-col text-center space-y-4'>
                        <div>
                            <p className='uppercase text-lg font-light text-silver'>
                                <Translate en={'Welcome To the Best Hotel'} ar={'أهلاً وسهلاً في أفضل فندق'} bn={'সর্বশ্রেষ্ঠ হোটেলে স্বাগতম'} />
                            </p>
                            <div className='flex items-center gap-2 text-silver '>
                                <div className='h-[1px] w-[130px] bg-silver'></div> ★ <div className='h-[1px] w-[130px] bg-silver'></div>
                            </div>
                        </div>
                        <h1 className='text-5xl text-silver font-kanit font-semibold'>
                            <Translate en={'RestNest'} ar={'ريست نيست'} bn={'রেস্টনেস্ট'} />
                        </h1>
                        <h1 className='text-xl font-normal font-poppins text-silver lg:px-0 px-5'>
                            <Translate
                                en={'Bringing efficiency, innovation, and luxury to hotel management in every stay.'}
                                bn={'প্রতিটি অবস্থানে হোটেল ব্যবস্থাপনায় কার্যকারিতা, উদ্ভাবন এবং বিলাসিতা আনছি।'}
                                ar={'نقدم الكفاءة والابتكار والفخامة في إدارة الفنادق في كل إقامة.'}
                            />
                        </h1>
                        <div className="flex">
                            <Button><Translate en={'Book Now'} ar={'احجز الآن'} bn={'এখন বুক করুন'}/></Button>
                        </div>
                    </div>
                </div>
                <div className='z-40 absolute lg:-bottom-20 md:-bottom-96 -bottom-96 w-full mx-auto flex justify-center items-center'>
                    <Checking />
                </div>
            </div>
        </div>
    );
};

export default HeroContent;