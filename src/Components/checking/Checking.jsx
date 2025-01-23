/* eslint-disable no-unused-vars */
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { addDays } from "date-fns";
import { CiCirclePlus, CiCircleMinus, CiCalendarDate } from "react-icons/ci";
import Translate from "../translate/Translate";

import "./checkout.css";


const Checking = () => {

    const [checkingDate, setCheckingDate] = useState(new Date());
    const [checkoutDate, setCheckoutDate] = useState(addDays(new Date(), 1));
    const [guestCount, setGuestCount] = useState(1);
    const [availableRooms, setAvailableRooms] = useState([]);

    // Handle check-in date change and auto-set check-out date
    const handleCheckingChange = (date) => {
        setCheckingDate(date);
    }

    const handleCheckoutChange = (date) => {
        setCheckoutDate(addDays(date, 1));
    }

    // Handle guest count increment
    const incrementGuestCount = () => {
        if (guestCount < 15) { //maximum guest limit;
            setGuestCount(prevCount => prevCount + 1)
        } else {
            //TODO: if guest limit croce then show alert
        }
    }

    // Handle guest count decrement
    const decrementGuestCount = () => {
        setGuestCount(prevCount => (prevCount > 1 ? prevCount - 1 : 1))
    }

    const checkAvailability = () => {
        //TODO: after create check out option;
    }

    return (
        <div className='checking_box bg-white md:px-6 dark:bg-slate-950 py-10 border-l-4 border-silver rounded-md dark:shadow-silver dark:shadow lg:flex items-center justify-center lg:gap-6 space-y-7 lg:space-y-0 lg:px-6 font-kanit  px-1'>
            <div className='w-full'>
                <h1 className='uppercase font-medium text-navyGray dark:text-silver'>
                    <Translate text={'Check-In'}/>
                </h1>
                <div className='flex w-full items-center gap-2 border-b border-navyGray bg-black bg-opacity-5 lg:px-2 rounded-t-md'>
                    <CiCalendarDate className='text-navyGray text-xl dark:text-silver font-medium' />
                    <DatePicker
                        selected={checkingDate}
                        onChange={handleCheckingChange}
                        minDate={new Date()}
                        dateFormat={'MMMM d, yyyy'}
                        className='outline-none border-none text-navyGray dark:text-silver py-3 bg-transparent'
                    />
                </div>
            </div>
            <div>
                <h1 className='uppercase font-medium text-navyGray dark:text-silver'>
                    <Translate text={'Check-Out'}/>
                </h1>
                <div className='flex  items-center gap-2 border-b border-navyGray dark:text-silver  bg-black bg-opacity-5 lg:px-2 rounded-t-md'>
                    <CiCalendarDate className='text-navyGray dark:text-silver text-xl font-medium' />
                    <DatePicker
                        selected={checkoutDate}
                        onChange={handleCheckoutChange}
                        minDate={new Date()}
                        dateFormat={'MMMM d, yyyy'}
                        className='outline-none border-none dark:text-silver text-navyGray py-3 bg-transparent'
                    />
                </div>
            </div>
            <div className='md:w-96 sm:96 relative'>
                <h1 className='uppercase font-medium text-navyGray dark:text-silver'>
                    <Translate text={'Guest'}/>
                </h1>
                <div className='flex items-center gap-2 lg:px-2 relative border-b border-navyGray dark:text-silver bg-black bg-opacity-5 text-navyGray rounded-t-md '>
                    <button onClick={decrementGuestCount} className='text-3xl dark:text-silver'>
                        <CiCircleMinus />
                    </button>
                    <input
                        onChange={(e) => setGuestCount(e.target.value)}
                        value={guestCount}
                        type="number"
                        className='outline-none  py-3 px-8 bg-transparent'
                    />
                    <button onClick={incrementGuestCount} className='text-3xl absolute right-0'>
                        <CiCirclePlus />
                    </button>
                </div>
            </div>
            <div className='w-full mb-4'>
                <button onClick={checkAvailability}
                    className="relative w-full overflow-hidden mb-6 font-medium border-2 border-redBg py-3 lg:px-10 bg-white hover:text-silver duration-300 top-6 text-navyGray  group">
                    <span className="relative z-10 uppercase">
                        <Translate text={'Check Availability'}/>
                    </span>
                    <div className="absolute inset-0 bg-redBg transition-all duration-500 ease-out group-hover:translate-x-0 origin-center left-[50%] right-[50%] group-hover:left-0 group-hover:right-0 "></div>
                </button>
            </div>
        </div>
    );
};

export default Checking;