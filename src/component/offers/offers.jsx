import React from "react";
import { Container, Row, Col } from "reactstrap";
import Slider from "react-slick";
import offer1 from "../../assets/images/offers.jpg";
import offer2 from "../../assets/images/offer2.jpg";
import offer3 from "../../assets/images/offer3.jpg";
import offer4 from "../../assets/images/offer4.jpg";
import offer5 from "../../assets/images/offer5.jpg";
import offer6 from "../../assets/images/offer6.jpg";
import '../offers/offers.css'


const settings = {
    dots: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows:true,}
    
function Offers() {
  return (
    <Container>
   
    <Row>
    <Slider {...settings}>  <Col > <img className="offer" src={offer1} alt="offer" /></Col>
    <Col > <img className="offer" src={offer2} alt="offer" /></Col>
    <Col > <img className="offer" src={offer3} alt="offer" /></Col>
    <Col > <img className="offer" src={offer4} alt="offer" /></Col>
    <Col > <img className="offer" src={offer5} alt="offer" /></Col>
    <Col > <img className="offer" src={offer6} alt="offer" /></Col>
    </Slider>
  </Row>
    </Container>
  )

  
}

export default Offers;
