import React from 'react'
import Slider from "react-slick";
import slider1 from "../../assets/images/slider3.webp"
import slider2 from "../../assets/images/slider2.webp"
import slider3 from "../../assets/images/slider1.webp"
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Container } from 'reactstrap';
// import {NextArrow ,PrevArrow} from "react-icons"

function HomeSlider() {
  // const NextArrow= ({onClick}) => {
  //   return (
  //     <div className="arrow next" onClick={onClick}>
  //       <FaArrowRight />
  //     </div>
  //   )
  // }

  // const PrevArrow = ({onClick}) => {
  //   return (
  //     <div className="arrow prev" onClick={onClick}>
  //       <FaArrowLeft />
  //     </div>
  //   )
  // }
  
  const settings = {
    dots: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:true,
    //  nextArrow: <NextArrow />, 
    //  prevArrow: <SamplePrevArrow/>,
  };
  return (
    <div className="">
    <Slider {...settings}>    
     <div> 
         <img src={slider1} alt="avatar" className='w-100' />
     </div>
     <div>
         <img src={slider2} alt="avatar"  className='w-100'/>
     </div>
     <div>  
         <img src={slider3} alt="avatar" className='w-100' />
     </div>
   </Slider>
    </div>
     
  )
}

export default HomeSlider