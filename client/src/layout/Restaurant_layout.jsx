import React from 'react'

import { TiStarOutline } from 'react-icons/ti'
import { RiDirectionLine, RiShareForwardLine } from 'react-icons/ri'
import { BiBookmarkPlus } from 'react-icons/bi'


import Navbar from "../componentes/Navbar"
// import ImageGrid from "../componentes/Restarunt/ImageGrid"
// import InfoButton from "../componentes/Restarunt/InfoButton"
// import RestaurantInfo from '../componentes/Restarunt/Restaurant'
// import Tabs from '../componentes/Restarunt/Tabs'
// import CartContainer from "../componentes/Cart/CartContainer"

const RestaurantLayout = (Component) => ({ ...props }) => {
    return <>
        <Navbar />

    </>
}

export default RestaurantLayout

// <div className='container mx-auto px-4 mt-8 lg:px-20 pb-20'>
// {/* <ImageGrid images={}/> */}
// <RestaurantInfo name='' restaurantRating='' deliveryRating='' cuisine='' address='' />
// <div className='my-4 flex flex-warp gap-3 mx-auto'>
//     <InfoButton isActive='true'>
//         <TiStarOutline />  Add Review
//     </InfoButton>
//     <InfoButton >
//         <RiDirectionLine />  Direction
//     </InfoButton>
//     <InfoButton >
//         <BiBookmarkPlus />  BookMark
//     </InfoButton>
//     <InfoButton >
//         <RiShareForwardLine /> Share
//     </InfoButton>
// </div>
// <div className='my-10'>
//     <Tabs />
// </div>
// <Component {...props} />
// </div>
// <CartContainer />
