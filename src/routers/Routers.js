import {Routes, Route} from 'react-router-dom';
// import SecuredRoute from './SecuredRoute';


import Home from "../pages/Home"
import Shop from "../pages/Shop"
import Services from "../pages/Services"
import Cart from "../pages/Cart"
import ProductDetails from "../pages/ProductDetails"
import Comander from "../pages/Comander"
import Login from "../pages/Login"
import Signup from "../pages/Signup"


function Routers() {
  return (
    <Routes>
        <Route path='/home'     element={<Home />}/>
        <Route path='/shop'     element={<Shop />}/>
        <Route path='/services' element={<Services />}/>
        <Route path='/cart'     element={<Cart />}/>
        <Route path='/shop/:id' element={<ProductDetails />}/>
        <Route path='/comander' element={<Comander />}/>
         
        
        <Route path='/login'    element={<Login />}/>
        <Route path='/signup'   element={<Signup />}/> 
    </Routes>
  )
}

export default Routers;
