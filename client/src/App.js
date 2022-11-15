
import './App.css';

import { Route, Routes, Navigate } from "react-router-dom"


import Checkout from './pages/Checkout_page';
import Home from './pages/Home_page';
import Restaurant from './pages/Restaurant_page';
import GoogleAuth from './pages/GoogleAuth_page';


//component

import Menu from "./componentes/Restarunt/Menu"
import OrderOnline from "./componentes/Restarunt/OrderOnline"
import Overview from "./componentes/Restarunt/Overview"
import Photos from "./componentes/Restarunt/Photos"
import Reviews from "./componentes/Restarunt/Reviews"
import RestaurantLayout from './layout/Restaurant_layout';

function App() {
  return <>
    <Routes>
      <Route path='/' element={<Navigate to='/delivery' />} />
      <Route path='/:type' element={<Home />} />
      {/* <Route path='/restaurant/:id' element={<RedirectRestarunt />} /> */}
      <Route path='/google/:token' element={<GoogleAuth />} />
      <Route path='/restaurant/:id' element={<RestaurantLayout><Restaurant />
      </RestaurantLayout>}>
        <Route path='overview' element={<Overview />} />
        <Route path='order-online' element={<OrderOnline />} />
        <Route path='review' element={<Reviews />} />
        <Route path='menu' element={<Menu />} />
        <Route path='photos' element={<Photos />} />
      </Route>
      <Route path='/checkout/orders' element={<Checkout />} />
    </Routes>

  </>
}

export default App;
