import React from 'react'
import RestaurantLayout from "../layout/Restaurant_layout"

import { Outlet } from "react-router-dom"


const Restaurant = () => {
    return <>
        <h1>Hello</h1>
        <Outlet />
    </>
}

export default RestaurantLayout(Restaurant)