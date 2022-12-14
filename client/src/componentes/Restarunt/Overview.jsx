import React, { useState } from 'react'
import { Link, useParams } from "react-router-dom"
import { IoMdArrowDropright } from "react-icons/io"
import { Swiper, SwiperSlide } from "swiper/react"
import ReactStarts from "react-rating-stars-component"
import { Pagination, Navigation } from "swiper"
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"




import MenuCollection from "./MenuCollection"
import MenuSimilarRestaurantCard from "./MenuSimilarRestaurantCard"
import ReviewCard from "../Reviews/ReviewCard"
import MapView from "./MapView"


const Overview = () => {
    const [restaurant, setRestaurant] = useState(
        {
            _id: "124ksjf435245jv34fg3",
            isPro: true,
            isOff: true,
            name: "Nathu's Sweets",
            restaurantReviewValue: "3.7",
            cuisine: [
                "Mithai",
                "South Indian",
                "Chinese",
                "Street Food",
                "Fast Food",
                "Desserts",
                "North Indian",
            ],
            averageCost: "450",
        }
    );

    const [menuImages, setMenuImages] = useState([
        "https://b.zmtcdn.com/data/menus/931/931/d40e86a957d1ed6e6fabe5a67a161904.jpg",
        "https://b.zmtcdn.com/data/menus/931/931/36f8a3b9e5dbf6435f903c9a8745bcc8.jpg",
        "https://b.zmtcdn.com/data/menus/931/931/8d6623791860b054953b6c2c14d61bcb.jpg",
        "https://b.zmtcdn.com/data/menus/931/931/6d462a04051c0eabb0067149aa84cc64.jpg",
    ]);
    const [reviews, setReviews] = useState([
        {
            rating: "4.5",
            reviewText: "its so good"
        },
        {
            rating: "4.5",
            reviewText: "its so good"
        },
    ])
    const { id } = useParams;

    const slideConfig = {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            1024: {
                slidesPerView: 2,
                spaceBetween: 0,
            },
        },
        modules: [Navigation],
        className: "diningSwiper",
        navigation: true,
    };
    const getlatLong = (mapAddress) => {
        return mapAddress?.split(",").map((item) => parseFloat(item))
    }
    return (
        <div className='flex flex-col gap-5 md:flex-row relative'>
            <div className='w-full md:w-8/12'>
                <h2 className='font-semibold text-lg md:text-xl my-4'>About this place</h2>
                <div className='flex justify-between items-center'>
                    <h4 className='text-lg font-medium'>Menu</h4>
                    <Link to={`/restaurant/&{id}/menu`}>
                        <span className='flex items-center gap-1 text-zomato-400'>
                            See all menu <IoMdArrowDropright />
                        </span>
                    </Link>
                </div>
                <div className='flex flex-wrap gap-3 my-4'>
                    <MenuCollection menuTilte="Menu" pages={menuImages.length} image={menuImages} />
                </div>
                <h4 className='text-lg font-medium my-4 '>Cuisines</h4>
                <div className='flex flex-wrap gap-2'>
                    {restaurant?.cuisine.map((cuisineNmae, index) => (
                        <span key={index} className="border border-gray-600 text-blue-600 px-2 py-1 rounded-full">
                            {cuisineNmae}
                        </span>
                    ))}
                </div>
                <div className='mu-4'>
                    <h4 className='text-lg font-medium'>Average Cost</h4>
                    <h6>???{restaurant.averageCost} for one order(approx.)</h6>
                    <small className='text-gray-500'>Exclusive of applicable taxes and charges, if any</small>
                </div>
                <div className='flex flex-col-reverse'>
                    <div className='my-4'>
                        <h4 className='text-lg font-medium'>
                            {restaurant.name} Reviews
                        </h4>
                        {/* <ReactStarts count={5} onChange={(newRating) => console.log(newRating)} size={24} activeColor="#ffd700" /> */}
                        {reviews.map((review, index) => (
                            <ReviewCard {...review} key={index} />))}
                    </div>
                    <div className='my-4'>
                        <h4 className='text-lg font-medium'>Similar Restaurants</h4>
                        <div>
                            <Swiper {...slideConfig}>
                                <SwiperSlide>
                                    <MenuSimilarRestaurantCard
                                        image="https://b.zmtcdn.com/data/pictures/chains/3/307893/f606e2cc225f298f77b0bf9673e96dbe_featured_v2.jpg"
                                        title="Bikkgane Biryani"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <MenuSimilarRestaurantCard
                                        image="https://b.zmtcdn.com/data/pictures/chains/2/18363082/029c99fa45772a9c162983d13861d864_featured_v2.jpg"
                                        title="Behrouz Biryani"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <MenuSimilarRestaurantCard
                                        image="https://b.zmtcdn.com/data/pictures/chains/4/844/c2aff8d94b55d820df98053ce1b8d9cb_featured_v2.jpg"
                                        title="Khan Chacha"
                                    />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                    <div className='my-4 w-full md:hidden flex flex-col gap-4'>
                        <MapView title="McDonald's" phno="+912536489725" maplocation={getlatLong("13.205513343339986, 80.26698283999177")}
                            address="123/h2 , pizzashop hut , chennai"
                        />
                    </div>
                </div>
            </div>
            <aside style={{ height: "fit-content" }} className='hidden md:flex md:w-4/12 sticky rounded-xl top-20 bg-white px-4 py-4 shadow-md flex-col gap-4 ' >
                <MapView title="McDonald's" phno="+912536489725"
                    latAndLong={"13.205513343339986, 80.26698283999177"}
                    mapLocation={getlatLong("13.205513343339986, 80.26698283999177")}
                    address="123/h2 , pizzashop hut , chennai"
                />

            </aside>
        </div>
    )
}

export default Overview