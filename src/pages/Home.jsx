import products from "../assets/products.js";
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from "react";
import React, { useState } from 'react'
import Category from "../component/Category/Category";
import { Col, Container, Row } from "reactstrap";
import hero from '../assets/images/hero.png'
import { Link } from "react-router-dom";
import HomeSlider from "../component/Slider/HomeSlider.jsx";
import Offers from "../component/offers/offers.jsx";
import Footer from "../component/Footer/footer";
import "../Styles/home.css"
import { fire } from "../firebase.js";

const Home = () => {




  const product = useSelector((state) => state.product)
  const user = useSelector((state) => state.user)
  const show = useSelector((state) => state.showin)


  const newadmain = useSelector((state) => state.admaincart)



  const [allproducts, setAllProducts] = useState(product);

  const dispatch=useDispatch();
  useEffect(()=>{

      fire.collection('/product').onSnapshot((el)=>{
        el.docs.map((el)=> {
          const adminpro={
          type:'addpro',
      
          payload:el.data()
        }
        dispatch(adminpro)
      }
        )
      } )
      }) 
  return (
    <div className="overflow-hidden">
      <div className="mb-4">
        <HomeSlider />
      </div>

      <Container>
        <Row>
          <Col lg='6' md='6' className="hero-details">
            <h3>Easy way to make an order </h3>
            <h1 color="">Hungry?<span>Just order foood </span><span>at your door</span></h1>
            <p>
              Enjoy out top rated menues.healthy recipes
              magni delectus tenetur autem, sint veritatis!
            </p>
            <div className="hero__btns d-flex align-items-center gap-5 mt-4">
              {/* <button className="order__btn d-flex align-items-center justify-content-between">
                Order now <i className="ri-arrow-right-s-line"></i>
              </button> */}

              <button className="all__foods-btn">
                <Link className = "all__foods-btn"to="/foods">See all foods</Link>
              </button>

            </div>
          </Col>
          <Col lg='6' md='6' className="hero-image ">
            <img src={hero} style={{ filter: 'hue-rotate(25deg)' }} className="w-100 vibrate-1" alt="" />
          </Col>

        </Row>
      </Container>

      <div className="mb-4">
        <h4 className="hotOffers"> Hot Offers</h4>
        <Offers />
      </div>
      <Container>
        <Category />
      </Container>
      <Footer />
    </div>
  )
}

export default Home