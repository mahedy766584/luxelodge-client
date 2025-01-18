import Logo from "../../Components/Logo/Logo";
import Container from "../Container/Container";

import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import Translate from "../translate/Translate";


const Content = () => {
    return (
        <>
            <Container>
                <div className="font-poppins pt-14 lg:flex lg:justify-between justify-center text-center lg:text-start  items-start relative">
                    <div className="flex  flex-col lg:justify-start lg:items-start items-center">
                        <Logo />
                        <div className="h-48">
                            <p className="font-normal text-lg text-navyWhite lg:w-[400px]">
                                <Translate
                                    en={'"Discover RestNest – your gateway to exceptional hotel experiences. Stay with us and enjoy premium service, comfort, and unforgettable stays."'}
                                    bn={'রেস্টনেস্ট আবিষ্কার করুন – অসাধারণ হোটেল অভিজ্ঞতার জন্য আপনার গেটওয়ে। আমাদের সঙ্গে থাকুন এবং উপভোগ করুন প্রিমিয়াম পরিষেবা, আরাম এবং স্মরণীয় অভিজ্ঞতা।'}
                                    ar={'اكتشف ريست نيست – بوابتك إلى تجارب فندقية استثنائية. أقم معنا واستمتع بخدمات فاخرة، وراحة، وإقامة لا تُنسى.'}
                                />
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-6 lg:mt-5">
                        <div className="space-y-2">
                            <h1 className="text-2xl font-medium text-navyGray">
                                <Translate
                                    en={'Contact With Us'}
                                    bn={'আমাদের সাথে যোগাযোগ করুন'}
                                    ar={'تواصل معنا'}
                                />
                            </h1>
                            <p className="text-sm text-navyGray text-opacity-65 tracking-wider">
                                <Translate
                                    en={'SOCIAL MEDIA CHANNELS'}
                                    bn={'সামাজিক যোগাযোগ মাধ্যম'}
                                    ar={'قنوات التواصل الاجتماعي'}
                                />
                            </p>
                        </div>
                        <div className="h-48 w-full  space-x-10 text-navyGray">
                            <button className="hover:text-redBg duration-500 hover:scale-110"><FaFacebook size={30} /></button>
                            <button className="hover:text-redBg duration-500 hover:scale-110"><FaTwitter size={30} /></button>
                            <button className="hover:text-redBg duration-500 hover:scale-110"><FaInstagram size={30} /></button>
                            <button className="hover:text-redBg duration-500 hover:scale-110"><FaYoutube size={30} /></button>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-6 lg:mt-5">
                        <div className="space-y-2">
                            <h1 className="text-2xl font-medium text-navyGray">
                                <Translate
                                    en={'Phone Support'}
                                    bn={'ফোন সাপোর্ট'}
                                    ar={'دعم الهاتف'}
                                />
                            </h1>
                            <p className="text-sm text-navyGray text-opacity-65 tracking-widest">
                                <Translate
                                    en={'24 HOURS A DAY'}
                                    bn={'২৪ ঘণ্টা প্রতিদিন'}
                                    ar={'٢٤ ساعة في اليوم'}
                                />
                            </p>
                        </div>
                        <div className="h-48">
                            <p className="font-normal text-xl text-navyWhite">
                                <Translate en={'+009999788783'} bn={'+০০৯৯৯৯৭৮৮৭৮৩'} ar={'+٠٠٩٩٩٩٧٨٨٧٨٣'}/> <br />
                                <Translate en={'+009999788783'} bn={'+০০৯৯৯৯৭৮৮৭৮৩'} ar={'+٠٠٩٩٩٩٧٨٨٧٨٣'}/>
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Content;