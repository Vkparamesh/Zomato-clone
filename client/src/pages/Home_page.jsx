import React from 'react'

import { useParams } from 'react-router-dom';
import Delivery from '../componentes/delivery';
import Dining from '../componentes/dining';
import NightLife from '../componentes/nightlife';
import Nutrition from '../componentes/nutrition';

import HomepageLayout from '../layout/Homepage_layout'
const Home = () => {
    const { type } = useParams()
    return <>
        <div className='my-5 mb-20 md:mb-8' >
            {type === "delivery" && <Delivery />}
            {type === "dining" && <Dining />}
            {type === "night" && <NightLife />}
            {type === "nutri" && <Nutrition />}
        </div>
    </>
}

export default HomepageLayout(Home)