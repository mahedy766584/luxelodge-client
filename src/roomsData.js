    const roomsData = 
    [
        {
        title: "Cozy Single Room",
        roomNumber: 101,
        type: "Single",
        pricePerNight: 100,
        isAvailable: true,
        maxGuests: 1,
        checkInDate: null,
        checkOutDate: null,
        review: {
            averageRating: 4.5,
            numberOfReviews: 24
        },
        description: "This cozy single room offers a tranquil retreat for solo travelers, designed to provide all the essentials for a comfortable stay. The room features a single bed with premium linens, air conditioning, and a flat-screen TV with cable channels. Complimentary Wi-Fi is available, making it ideal for business or leisure. The en-suite bathroom is equipped with a walk-in shower, plush towels, and free toiletries. The room also has a small workspace and blackout curtains for privacy. With daily housekeeping and 24-hour room service, this room is perfect for those looking for convenience and comfort in the heart of the city. Guests can enjoy beautiful views of either the city skyline or garden, depending on the location of the room.",
        facilities: [
            { name: "Air Conditioning" },
            { name: "Flat-Screen TV" },
            { name: "Complimentary Wi-Fi" },
            { name: "En-Suite Bathroom" },
            { name: "Daily Housekeeping" },
            { name: "Room Service" }
        ],
        images: [
            { name: "Room View", url: "https://example.com/images/cozy_single_room_view.jpg" },
            { name: "Dining Room", url: "https://example.com/images/cozy_single_dining.jpg" },
            { name: "Washroom", url: "https://example.com/images/cozy_single_washroom.jpg" },
            { name: "Bed Area", url: "https://example.com/images/cozy_single_bed.jpg" }
        ]
        },
        {
        title: "Elegant Double Room",
        roomNumber: 102,
        type: "Double",
        pricePerNight: 150,
        isAvailable: true,
        maxGuests: 2,
        checkInDate: null,
        checkOutDate: null,
        review: {
            averageRating: 4.7,
            numberOfReviews: 18
        },
        description: "The elegant double room offers a spacious, modern retreat for couples or friends. The room includes a king-sized bed with high-quality linens, a comfortable seating area, and a flat-screen TV with international channels. Air conditioning and blackout curtains ensure guests can relax in comfort. The en-suite bathroom features a rainfall shower, luxury toiletries, and a hairdryer. Guests can stay connected with complimentary Wi-Fi and access to the hotel’s fitness center and spa. Daily housekeeping and 24-hour room service are available. Large windows offer stunning views of the city or garden, making this room ideal for a peaceful, luxurious getaway.",
        facilities: [
            { name: "King-Sized Bed" },
            { name: "Rainfall Shower" },
            { name: "Complimentary Wi-Fi" },
            { name: "Flat-Screen TV" },
            { name: "Blackout Curtains" },
            { name: "Air Conditioning" }
        ],
        images: [
            { name: "Room View", url: "https://example.com/images/elegant_double_room_view.jpg" },
            { name: "Dining Room", url: "https://example.com/images/elegant_double_dining.jpg" },
            { name: "Washroom", url: "https://example.com/images/elegant_double_washroom.jpg" },
            { name: "Bed Area", url: "https://example.com/images/elegant_double_bed.jpg" }
        ]
        },
        {
        title: "Luxury Suite",
        roomNumber: 103,
        type: "Suite",
        pricePerNight: 300,
        isAvailable: false,
        maxGuests: 4,
        checkInDate: "2024-10-13",
        checkOutDate: "2024-10-16",
        review: {
            averageRating: 4.9,
            numberOfReviews: 30
        },
        description: "The luxury suite is a sophisticated choice for those seeking extra space and comfort. The suite features a separate living area with a sofa and a king-sized bed in the main sleeping area. A fully-equipped bathroom offers both a soaking tub and a walk-in shower, along with premium toiletries. The suite comes with modern amenities like a minibar, coffee-making facilities, and a flat-screen TV. Guests can enjoy complimentary Wi-Fi and stunning city views from the large windows. Ideal for families or groups, the suite provides a balance of luxury and functionality, perfect for longer stays or special occasions.",
        facilities: [
            { name: "King-Sized Bed" },
            { name: "Separate Living Area" },
            { name: "Minibar" },
            { name: "Flat-Screen TV" },
            { name: "Complimentary Wi-Fi" },
            { name: "Soaking Tub" }
        ],
        images: [
            { name: "Living Room", url: "https://example.com/images/luxury_suite_livingroom.jpg" },
            { name: "Dining Room", url: "https://example.com/images/luxury_suite_dining.jpg" },
            { name: "Washroom", url: "https://example.com/images/luxury_suite_washroom.jpg" },
            { name: "Bed Area", url: "https://example.com/images/luxury_suite_bed.jpg" }
        ]
        },
        {
        title: "Budget Single Room",
        roomNumber: 108,
        type: "Single",
        pricePerNight: 90,
        isAvailable: true,
        maxGuests: 1,
        checkInDate: null,
        checkOutDate: null,
        review: {
            averageRating: 4.1,
            numberOfReviews: 10
        },
        description: "This budget single room provides an affordable stay for solo travelers. It includes a comfortable single bed, a private bathroom with basic toiletries, and air conditioning. The room also has a flat-screen TV and complimentary Wi-Fi, ensuring a pleasant experience without sacrificing the essentials. Daily housekeeping is available, along with access to the hotel’s dining facilities and fitness center. The décor is simple but tasteful, providing a clean and relaxing atmosphere. This room is an ideal choice for budget-conscious travelers who want a comfortable place to rest while exploring the city.",
        facilities: [
            { name: "Air Conditioning" },
            { name: "Flat-Screen TV" },
            { name: "Complimentary Wi-Fi" },
            { name: "Private Bathroom" },
            { name: "Daily Housekeeping" },
            { name: "Room Service" }
        ],
        images: [
            { name: "Room View", url: "https://example.com/images/budget_single_room_view.jpg" },
            { name: "Dining Room", url: "https://example.com/images/budget_single_dining.jpg" },
            { name: "Washroom", url: "https://example.com/images/budget_single_washroom.jpg" },
            { name: "Bed Area", url: "https://example.com/images/budget_single_bed.jpg" }
        ]
        },
        {
        title: "Deluxe Double Room",
        roomNumber: 110,
        type: "Double",
        pricePerNight: 170,
        isAvailable: true,
        maxGuests: 2,
        checkInDate: null,
        checkOutDate: null,
        review: {
            averageRating: 4.4,
            numberOfReviews: 16
        },
        description: "The deluxe double room offers an upgraded experience with modern décor and luxurious amenities. It features a king-sized bed, flat-screen TV, and a rainfall shower in the en-suite bathroom. Air conditioning, complimentary Wi-Fi, and blackout curtains ensure a comfortable and restful stay. Guests can also enjoy access to hotel facilities like the fitness center and pool. Daily housekeeping and room service are available. This room is perfect for couples looking for a premium experience at an affordable price, with large windows offering scenic views of the city or garden.",
        facilities: [
            { name: "King-Sized Bed" },
            { name: "Rainfall Shower" },
            { name: "Flat-Screen TV" },
            { name: "Complimentary Wi-Fi" },
            { name: "Air Conditioning" },
            { name: "Blackout Curtains" }
        ],
        images: [
            { name: "Room View", url: "https://example.com/images/deluxe_double_room_view.jpg" },
            { name: "Dining Room", url: "https://example.com/images/deluxe_double_dining.jpg" },
            { name: "Washroom", url: "https://example.com/images/deluxe_double_washroom.jpg" },
            { name: "Bed Area", url: "https://example.com/images/deluxe_double_bed.jpg" }
        ]
        }
        // Add 15 more rooms following the same structure...
    ];
    
    export default roomsData;
    