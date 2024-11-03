import { Helmet } from "react-helmet-async";
import AddRoomFrom from "../../Components/dashboardContents/addRoom/AddRoomFrom";
import TitleSection from "../../Components/titleSection/TitleSection";

const AddRoom = () => {
    return (
        <div>
            <Helmet>
                <title>LuxeLodge | Dashboard/AddRoom</title>
            </Helmet>
            <TitleSection title={'Add Room'} subTitle={' Easily add new room listings to LuxeLodge with complete details, including room type, pricing, amenities, and availability. Streamline room management to ensure accurate, up-to-date listings for guests.'} />
            {/* this is add room form component */}
            <AddRoomFrom />
        </div>
    );
};

export default AddRoom;