import Container from "../../Components/Container/Container";
import UseTopContent from "../../Hooks/UseTopContent";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import FirstPart from "../../Components/aboutContent/FirstPart";
import SecondPart from "../../Components/aboutContent/SecondPart";
import ThirdPart from "../../Components/aboutContent/ThirdPart";
import MainLoading from "../../Components/mainLoading/MainLoading";


import bgTop from "../../assets/aroundImg/around1.jpg";
import image1 from "../../assets/aboutImage/iamge5.jpg";
import image2 from "../../assets/aboutImage/image3.jpg";
import image3 from "../../assets/aboutImage/image4.jpg";
import { Helmet } from "react-helmet-async";


const About = () => {

    const axiosPublic = useAxiosPublic();

    const { data, isLoading } = useQuery({
        queryKey: ['about'],
        queryFn: async () => {
            const res = await axiosPublic.get('/about')
            return res.data;
        }
    })

    if(isLoading){
        return <MainLoading/>
    }

    const aboutData = data && data[0]?.aboutLuxeLodge;

    // console.log(aboutData);

    return (
        <>
        <Helmet>
            <title>LuxeLodge | About</title>
        </Helmet>
            <div>
                {/* this is component for top part of about page */}
                <UseTopContent bgTop={bgTop} title={aboutData?.About?.title} subTitle={aboutData?.About?.description} />
                <Container>
                    <div className="flex flex-col lg:gap-10 items-center mt-24 space-y-20">
                        {/* first part  component here*/}
                        <FirstPart
                            title={aboutData?.OurStory?.title}
                            description={aboutData?.OurStory?.description}
                            image1={image1} />

                        {/* second part component here */}
                        <SecondPart
                            image2={image2}
                            title={aboutData?.WhyChooseLuxeLodge?.title}
                            aboutData={aboutData} />

                        {/* third part  component here*/}
                        <ThirdPart
                            title={aboutData?.SustainabilityAndResponsibility?.title}
                            description={aboutData?.SustainabilityAndResponsibility?.description}
                            image3={image3} />
                    </div>
                </Container>
            </div>
        </>
    );
};

export default About;