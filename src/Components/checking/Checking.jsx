import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { addDays } from "date-fns";
import { CiCirclePlus, CiCircleMinus, CiCalendarDate } from "react-icons/ci";


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
        <div className='bg-silver py-10 border-l-4 border-silver rounded-md shadow-xl lg:flex items-center gap-6 space-y-6 lg:space-y-0 px-8 font-kanit'>
            <div>
                <h1 className='uppercase font-medium text-navyGray'>Check-In</h1>
                <div className='flex items-center gap-2 border-b border-navyGray bg-black bg-opacity-5 rounded-t-md'>
                    <CiCalendarDate className='text-navyGray text-xl font-medium' />
                    <DatePicker
                        selected={checkingDate}
                        onChange={handleCheckingChange}
                        minDate={new Date()}
                        dateFormat={'MMMM d, yyyy'}
                        className='outline-none border-none text-navyGray py-3 bg-transparent'
                    />
                </div>
            </div>
            <div>
                <h1 className='uppercase font-medium text-navyGray'>Check-Out</h1>
                <div className='flex items-center gap-2 border-b border-navyGray bg-black bg-opacity-5 rounded-t-md'>
                    <CiCalendarDate className='text-navyGray text-xl font-medium' />
                    <DatePicker
                        selected={checkoutDate}
                        onChange={handleCheckoutChange}
                        minDate={new Date()}
                        dateFormat={'MMMM d, yyyy'}
                        className='outline-none border-none text-navyGray py-3 bg-transparent'
                    />
                </div>
            </div>
            <div>
                <h1 className='uppercase font-medium text-navyGray'>Guest</h1>
                <div className='flex items-center gap-2 border-b border-navyGray bg-black bg-opacity-5 text-navyGray rounded-t-md'>
                    <button onClick={decrementGuestCount} className='text-3xl'>
                        <CiCircleMinus />
                    </button>
                    <input
                        onChange={(e) => setGuestCount(e.target.value)}
                        value={guestCount}
                        type="number"
                        className='outline-none px-4 py-3 bg-transparent'
                    />
                    <button onClick={incrementGuestCount} className='text-3xl'>
                        <CiCirclePlus />
                    </button>
                </div>
            </div>
            <div className='w-full'>
                <button onClick={checkAvailability}
                    className="relative w-full overflow-hidden mb-6 font-medium border-2 border-redBg py-3 px-10 bg-silver hover:text-silver duration-300 top-6 text-navyGray  group">
                    <span className="relative z-10 uppercase">Check Availability</span>
                    <div className="absolute inset-0 bg-redBg transition-all duration-500 ease-out group-hover:translate-x-0 origin-center left-[50%] right-[50%] group-hover:left-0 group-hover:right-0 "></div>
                </button>
            </div>
        </div>
    );
};

export default Checking;