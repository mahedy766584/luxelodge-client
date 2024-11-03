/* eslint-disable react/prop-types */
import { List } from "@material-tailwind/react";

const ItemDesign = ({ icon, title }) => {
    return (
        <List className="space-y-4 px-0 mt-20">
            <div className="space-y-20 relative">
                <div className="relative">
                    <div className="absolute -top-5 right-0 w-full h-20 bg-silver flex items-center">
                        <div className="px-0 z-20 bg-white w-full rounded-l-full ml-5 rounded-r-none h-10 flex justify-center items-center gap-2 text-navyGray">
                            {icon}
                            {title}
                        </div>
                        <div className="bg-white w-4 h-full ">
                            <div className="w-5 h-[20.6px] bg-silver absolute top-0 right-0 rounded-br-full"></div>
                            <div className="w-5 h-[20.6px] bg-silver absolute bottom-0 right-0 rounded-tr-full"></div>
                        </div>
                    </div>
                </div>
            </div>
        </List>
    );
};

export default ItemDesign;