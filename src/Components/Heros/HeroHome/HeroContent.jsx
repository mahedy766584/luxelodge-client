/* eslint-disable react/prop-types */

const HeroContent = ({ video }) => {
    return (
        <div className="relative">
            <div className='relative'>
                <video
                    className="w-full h-screen object-cover z-0"
                    src={video}
                    autoPlay
                    loop
                    muted
                />
                <div className='absolute top-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center flex-col text-center space-y-4'>
                    <div>
                        <p className='uppercase text-lg font-light text-silver'>Welcome To the Best Hotel</p>
                        <div className='flex items-center gap-2 text-silver '>
                            <div className='h-[1px] w-[130px] bg-silver'></div> ★ <div className='h-[1px] w-[130px] bg-silver'></div>
                        </div>
                    </div>
                    <h1 className='text-5xl text-silver font-kanit font-semibold'>LuxeLodge</h1>
                    <h1 className='text-xl font-normal font-poppins text-silver lg:px-0 px-5'>Bringing efficiency, innovation, and luxury to hotel management in every stay.</h1>
                    <button className="relative overflow-hidden font-medium  py-3 px-10 bg-silver hover:text-silver duration-300 hover:animate-none animate-bounce top-6 text-navyGray  group">
                        <span className="relative z-10 uppercase">Booking Now</span>
                        <div className="absolute inset-0 bg-redBg transition-all duration-500 ease-out group-hover:translate-x-0 origin-center left-[50%] right-[50%] group-hover:left-0 group-hover:right-0 "></div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeroContent;