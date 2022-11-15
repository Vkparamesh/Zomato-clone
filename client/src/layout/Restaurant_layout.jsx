import React, { useState } from 'react'

import { TiStarOutline } from 'react-icons/ti'
import { RiDirectionLine, RiShareForwardLine } from 'react-icons/ri'
import { BiBookmarkPlus } from 'react-icons/bi'


import Navbar from "../componentes/Navbar"
import ImageGrid from "../componentes/Restarunt/ImageGrid"
import InfoButton from "../componentes/Restarunt/InfoButton"
import RestaurantInfo from '../componentes/Restarunt/RestaurantInfo'
import Tabs from '../componentes/Restarunt/Tabs'
import CartContainer from "../componentes/Cart/CartContainer"
import { useParams } from 'react-router-dom'

const RestaurantLayout = ({ children: Component, ...props }) => {
    const [restaurant, setRestaurant] = useState({
        images: [],
        name: "",
        cuisine: "",
        address: "",
        restaurantRating: 4.1,
        deliveryRating: 3.2,
    })
    const { id } = useParams()

    return <>
        <Navbar />

        < div className='container mx-auto px-4 mt-8 lg:px-20 pb-20' >
            <ImageGrid images={restaurant.images} />
            < RestaurantInfo {...restaurant} />
            <div className='my-4 flex flex-warp gap-3 mx-auto'>
                <InfoButton isActive='true'>
                    <TiStarOutline />  Add Review
                </InfoButton>
                <InfoButton >
                    <RiDirectionLine />  Direction
                </InfoButton>
                <InfoButton >
                    <BiBookmarkPlus />  BookMark
                </InfoButton>
                <InfoButton >
                    <RiShareForwardLine /> Share
                </InfoButton>
            </div>
            <div className='my-10 sticky bg-white top-0 pt-2 z-10'>
                <Tabs />
            </div>
            {Component}
        </div >
        <CartContainer />


    </>
}

export default RestaurantLayout

