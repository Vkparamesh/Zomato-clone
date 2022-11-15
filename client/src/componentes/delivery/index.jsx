import React, { useState } from 'react'
import RestaurantCard from '../RestaruntCard'
import DeliveryCategoryCard from './DelivaryCategoryCard'

import DeliveryCarousel from "./DeliveryCarousel"
// import RestaruntCard from "../RestaruntCard"


const Delivery = () => {
    const [restaurantList, setRestaurantList] = useState([
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
        },
        {
            _id: "124ksjf435sa245jv34fg3",
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
        },
        {
            _id: "124ksjf43524d5jv34fg3",
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
        },
    ]);
    return (
        <>
            <DeliveryCarousel />
            <h1 className='text-xl mt-4 mb-2 md:mt-8 md:text-3xl md:font-semibold' >
                Delivery Restarunt In ECR chennai
            </h1>
            <div className='grid gap-0 mdgap-2 md:grid-cols-2 grid-cols-1 lg:grid-cols-3' >
                {restaurantList.map((restaurant) => (
                    <RestaurantCard {...restaurant} key={restaurant._id} />
                ))}
            </div>
        </>
    )
}

export default Delivery