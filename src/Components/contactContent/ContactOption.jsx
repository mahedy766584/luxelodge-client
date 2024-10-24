import { FaPhoneVolume } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";


const ContactOption = () => {
    return (
        <div className="space-y-10">
            <div className="space-y-5">
                <h1 className="text-5xl font font-poppins text-navyGray">Get In Touch</h1>
                <p className="text-xl font-poppins text-navyGray  text-justify">We’re here to assist you! Whether you have questions, feedback, or need more information about your stay, feel free to reach out to us using the contact form below. You can also find our hotel’s address, phone number, and email for direct inquiries. We look forward to hearing from you!</p>
            </div>
            <div className="mt-16 space-y-5">
                <div className="flex items-center gap-3 text-xl font-poppins text-navyGray">
                    <div className="bg-navyGray text-silver p-3 rounded">
                        <FaPhoneVolume size={30} />
                    </div>
                    <span>
                        <p>+99938830389</p>
                        <p>+99938830389</p>
                    </span>
                </div>
                <div className="flex items-center gap-3 text-xl font-poppins text-navyGray">
                    <div className="bg-navyGray text-silver p-3 rounded">
                        <TfiEmail size={30} />
                    </div>
                    <span>
                        <p>hotelCompany@gmail.com</p>
                        <p>hotelCompany@gmail.com</p>
                    </span>
                </div>
                <div className="flex items-center gap-3 text-xl font-poppins text-navyGray">
                    <div className="bg-navyGray text-silver p-3 rounded">
                        <FaPhoneVolume size={30} />
                    </div>
                    <span>
                        <p>123 Luxe Street, Luxury City <br /> Sandwip, Chattogram, Bangladesh.</p>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ContactOption;