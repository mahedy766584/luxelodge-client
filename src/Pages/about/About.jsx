import image1 from "../../assets/aboutImage/image1.jpg";
import image2 from "../../assets/aboutImage/image2.jpg";
import image3 from "../../assets/aboutImage/image3.jpg";
import Container from "../../Components/Container/Container";


const About = () => {
    return (
        <Container>
            <div className="flex lg:gap-10 items-center">
                {/* about images here */}
                <div className="flex-1">
                    <div>
                        <img src={image1} />
                    </div>
                    <div>
                        <img src={image2} />
                    </div>
                    <div>
                        <img src={image3} />
                    </div>
                </div>

                {/* content here */}
                <div className="flex-1 space-y-5">
                    <h1 className="lg:text-5xl text-xl flex items-center gap-2 font-semibold font-kanit text-redBg">
                        <span className="text-navyGray">
                            About
                        </span>
                        LuxeLodge
                    </h1>
                    <p className="text-xl font-poppins text-navyGray font-light">
                        <span className="text-redBg font-medium">LuxeLodge</span> is a premium hotel situated in the heart of the city, offering a seamless blend of luxury, comfort, and modern elegance. With our prime location, we provide our guests with easy access to nearby landmarks, cultural attractions, and business hubs, making LuxeLodge the perfect destination for both leisure and business travelers.
                    </p>
                </div>
            </div>
        </Container>
    );
};

export default About;