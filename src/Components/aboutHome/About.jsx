import Container from "../Container/Container";
import Button from "../button/Button";
import image1 from "../../assets/aboutImage/image2.jpg";
import image2 from "../../assets/aboutImage/image1.jpg";
import image3 from "../../assets/aboutImage/image3.jpg";
import image4 from "../../assets/aboutImage/image4.jpg";
import image5 from "../../assets/aboutImage/iamge5.jpg";
import Translate from "../../Components/translate/Translate";

import "./about.css";

const About = () => {
    return (
        <Container>
            <div className="relative lg:mt-52 mt-[450px]">
                <div className="relative font-poppins lg:flex justify-between gap-20">
                    <div className="relative text-navyGray space-y-5 lg:text-start text-center">
                        <p className="tracking-widest">
                            <Translate
                                en={'BEST STAY IN THE TOWN'}
                                bn={'শহরের সেরা থাকার জায়গা'}
                                ar={'أفضل إقامة في المدينة'}
                            />
                        </p>
                        <h1 className="text-4xl font-medium">
                            <Translate
                                en={'About Us'}
                                bn={'আমাদের সম্পর্কে'}
                                ar={'معلومات عنا'}
                            />
                        </h1>
                        <p className="text-lg font-normal text-justify">
                            <Translate
                                en={'RestNest is a premium hotel situated in the heart of the city, offering a seamless blend of luxury, comfort, and modern elegance. With our prime location, we provide our guests with easy access to nearby landmarks, cultural attractions, and business hubs, making RestNest the perfect destination for both leisure and business travelers.'}
                                bn={'RestNest একটি প্রিমিয়াম হোটেল যা শহরের কেন্দ্রে অবস্থিত। এটি বিলাসিতা, আরাম এবং আধুনিক সৌন্দর্যের এক নিখুঁত মিশ্রণ উপস্থাপন করে। আমাদের সুবিধাজনক অবস্থানের মাধ্যমে অতিথিরা কাছাকাছি দর্শনীয় স্থান, সাংস্কৃতিক আকর্ষণ এবং ব্যবসায়িক কেন্দ্রগুলোতে সহজেই পৌঁছাতে পারেন, যা RestNest-কে অবসরযাপনে আসা এবং ব্যবসায়িক ভ্রমণকারীদের জন্য আদর্শ গন্তব্যে পরিণত করেছে।'}
                                ar={'ريست نيست هو فندق فاخر يقع في قلب المدينة، ويقدم مزيجًا مثاليًا من الفخامة والراحة والأناقة العصرية. بفضل موقعنا المتميز، نوفر لضيوفنا وصولاً سهلاً إلى المعالم السياحية القريبة والمعالم الثقافية ومراكز الأعمال، مما يجعل ريست نيست الوجهة المثالية للمسافرين بغرض الترفيه والأعمال.'}
                            />
                        </p>
                        <div className="lg:absolute">
                            <Button
                                textSize={'text-lg'}
                                paddingX={'px-8'}
                                bounce_animate={'animate-none'}
                                border={'border'}
                                borderColor={'border-redBg'}
                                uppercase={'uppercase'}
                            >
                                <Translate en={'More Info'} bn={'আরও তথ্য'} ar={'معلومات أكثر'} />
                            </Button>
                        </div>
                    </div>
                    <div>
                        <img className="lg:max-w-[800px] lg:mt-0 mt-28 rounded h-[700px] bg-cover bg-center bg-blend-overlay bg-no-repeat" src={image1} />
                    </div>
                </div>
                <div className="lg:absolute lg:-mt-64 mt-4">

                    <div className="lg:flex lg:items-start items-center gap-7 relative lg:space-y-0 space-y-4">
                        <div className="about_main_box group">
                            <img src={image2} className="about_image" />
                            <div className="about_child_box">
                                <Translate en={'Single Room'} bn={'একক কক্ষ'} ar={'غرفة مفردة'} />
                            </div>
                        </div>
                        <div className="about_main_box group">
                            <img src={image3} className="about_image" />
                            <div className="about_child_box">
                                <Translate en={'Double Room'} bn={'দ্বৈত কক্ষ'} ar={'غرفة مزدوجة'} />
                            </div>
                        </div>
                        <div className="about_main_box group">
                            <img src={image4} className="about_image" />
                            <div className="about_child_box">
                                <Translate en={'Room View'} bn={'কক্ষের দৃশ্য'} ar={'منظر الغرفة'} />
                            </div>
                        </div>
                        <div className="about_main_box group">
                            <img src={image5} className="about_image" />
                            <div className="about_child_box">
                                <Translate en={'Room View'} bn={'কক্ষের দৃশ্য'} ar={'منظر الغرفة'} />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </Container>
    );
};

export default About;