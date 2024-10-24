import UseTopContent from "../../Hooks/UseTopContent";
import bgTop from "../../assets/aroundImg/around5.jpg";
import Container from "../../Components/Container/Container";
import FormContent from "../../Components/contactContent/FormContent";
import ContactOption from "../../Components/contactContent/ContactOption";
import MapContent from "../../Components/contactContent/MapContent";
// import CheckMap from "../../Components/contactContent/CheckMap";

const Contact = () => {
    return (
        <div>
            {/* this is top content component */}
            <UseTopContent bgTop={bgTop} title={'Get In Touch with LuxeLodge'} subTitle={'"Have any questions or need assistance? We’re here to help! Whether you’re inquiring about reservations, our services, or just want to leave a message, feel free to reach out. Fill out the form below or use the contact details provided, and our team will get back to you as soon as possible. We look forward to hearing from you!"'} />
            <Container>
                <div className="lg:flex mt-24 gap-24 items-center justify-between">
                    {/* contact option */}
                    <div className="flex-1">
                        <ContactOption />
                    </div>
                    {/* contact from */}
                    <div className="flex-1">
                        <FormContent />
                    </div>
                </div>
                {/* google map component here */}
                <div>
                    <MapContent />
                    {/* <CheckMap /> */}
                </div>
            </Container>
        </div>
    );
};

export default Contact;