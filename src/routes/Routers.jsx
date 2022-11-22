import { useNavigate } from "react-router-dom";

import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import AllFoods from '../pages/AllFoods';
import FoodDetails from '../pages/FoodDetails';
import Store from '../store/Store';

import Admain from '../pages/Admain';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';
import { useEffect, useState } from 'react'
import { auth } from "../firebase";
import NotFound from "../pages/NotFound";
import Forgetpassword from "../pages/Forgetpassword";

import Updatepassord from "../pages/Updatepassord";
import Updadeting from "../pages/Updadeting";
import Contact from "../pages/Contact";
import AdminContacts from "../component/Admin/AdminContacts";
import AdminProducts from "../component/Admin/AdminProducts";
import Ordedrs from "../component/Admin/Ordedrs";
import UserProfile from "../pages/UserProfile";
import UpdateProducts from "../component/Admin/updateProducts";

const Routers = () => {
  const Navigat = useNavigate()

  const [a, seta] = useState(false)

  const [show, setshow] = useState(false)

  useEffect(() => {
    auth.onAuthStateChanged((userr) => {

      userr ? seta(true) : seta(false)
      userr.email === 'metaea@gmail.com' ? setshow(true) : setshow(false)



    })
  }, [])


  return <Routes>
    <Route path='/' element={<Navigate to='/home' />} />
    <Route path='/home' element={<Home />} />
    <Route path='/foods' element={<AllFoods />} />
    <Route path='/foods/:id' element={<FoodDetails />} />
    <Route path='/Register' element={<Register />} />
    <Route path='/Cart' element={<Cart />} />
    <Route path='/Contact' element={<Contact />} />
    <Route path='/Cart' element={<Cart />} />
    <Route path='/Cart' element={<Cart />} />
    <Route path='/Updadeting' element={<Updadeting />} />

    {!a ? <Route path='/forgetpassword' element={<Forgetpassword />} /> : ''}


    {a ? <Route path='/Updatepassord' element={<Updatepassord />} /> : ''}
    <Route path='*' element={<NotFound />} />




    {show ? <Route path='/admain' element={<Admain />}>

      <Route path='/admain/AdminProducts' element={<AdminProducts />} />


      <Route path='/admain/AdminContacts' element={<AdminContacts />} />
      <Route path='/admain/Ordedrs' element={<Ordedrs />} />
      <Route path='/admain/updateProducts' element={<UpdateProducts/>} />
      <Route path='/admain' element={<Ordedrs />} />

    </Route>
      : ''}

    <Route path='/Login' element={<Login />} >
    <Route path='/Login' element={<UserProfile/>}/>
    <Route path='/Login/UserProfile' element={<UserProfile/>}/>
    <Route path='/Login/AdminProducts' element={<AdminProducts/>}/>
    <Route path='/Login/Updatepassord' element={<Updatepassord/>}/>
    <Route path='/Login/Updadeting' element={<Updadeting/>}/> 
    </Route>


    {a ? <Route path='/Checkout' element={<Checkout />} /> : <Route path='/Checkout' element={<Login />} />}

  </Routes>
}
export default Routers