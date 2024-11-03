import { useState } from "react";
import Upload from "../imageUploadSystem/Upload";

const AddRoomFrom = () => {

    const [isImage, setIsImage] = useState("");

    return (
        <div>
            <form className="font-poppins text-navyGray space-y-4">
                <div className="flex items-center gap-6">
                    <div className="w-full">
                        <p className="text-xl font-normal">
                            Title<sup>★</sup>
                        </p>
                        <input
                            type="text"
                            className="border border-navyGray border-opacity-60 w-full py-2 text-lg font-poppins text-navyGray outline-none rounded bg-transparent px-4"
                        />
                    </div>
                    <div className="w-full">
                        <p className="text-xl font-normal">
                            Guest Length<sup>★</sup>
                        </p>
                        <input
                            type="text"
                            className="border border-navyGray border-opacity-60 w-full py-2 text-lg font-poppins text-navyGray outline-none rounded bg-transparent px-4"
                        />
                    </div>
                </div>
                <div className="flex items-center gap-6">
                    <div className="w-full">
                        <p className="text-xl font-normal">
                            Bedroom Length<sup>★</sup>
                        </p>
                        <input
                            type="text"
                            className="border border-navyGray border-opacity-60 w-full py-2 text-lg font-poppins text-navyGray outline-none rounded bg-transparent px-4"
                        />
                    </div>
                    <div className="w-full">
                        <p className="text-xl font-normal">
                            Price<sup>★</sup>
                        </p>
                        <input
                            type="text"
                            className="border border-navyGray border-opacity-60 w-full py-2 text-lg font-poppins text-navyGray outline-none rounded bg-transparent px-4"
                        />
                    </div>
                </div>
                <div className="flex items-center gap-6">
                    <div className="w-full">
                        <p className="text-xl font-normal">
                            Reviews<sup>★</sup>
                        </p>
                        <input
                            type="text"
                            className="border border-navyGray border-opacity-60 w-full py-2 text-lg font-poppins text-navyGray outline-none rounded bg-transparent px-4"
                        />
                    </div>
                    <div className="w-full">
                        <p className="text-xl font-normal">
                            Bathroom Length<sup>★</sup>
                        </p>
                        <input
                            type="text"
                            className="border border-navyGray border-opacity-60 w-full py-2 text-lg font-poppins text-navyGray outline-none rounded bg-transparent px-4"
                        />
                    </div>
                </div>
                <div className="w-full">
                    <p className="text-xl font-normal">
                        Facilities<sup>★</sup>
                    </p>
                    <input
                        type="text"
                        className="border border-navyGray border-opacity-60 w-full py-2 text-lg font-poppins text-navyGray outline-none rounded bg-transparent px-4"
                    />
                </div>
                <div className="w-full">
                    <p className="text-xl font-normal">
                        Description<sup>★</sup>
                    </p>
                    <textarea
                        type="text"
                        className="border border-navyGray border-opacity-60 h-32 w-full py-2 text-lg font-poppins text-navyGray outline-none rounded bg-transparent px-4"
                    />
                </div>
                <div className="w-full">
                    {/* this is the component for images upload system */}
                    <Upload isImage={isImage} setIsImage={setIsImage} />
                </div>
            </form>
        </div>
    );
};

export default AddRoomFrom;