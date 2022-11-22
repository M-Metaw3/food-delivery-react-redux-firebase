import React from 'react'
import { Container,Row, Col,ListGroup,ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/icon1.png';
import '../../Styles/Footer.css'

const Footer = () => {
  return (
    <footer  className='footer'>
    <Container >
    <Row >
      <Col lg="3" md="4" sm="6">
        <div className=" footer__logo text-start">
          <img src={logo} alt="logo" />
          
          <p  className='pFooter'>
            
          </p>
        </div>
      </Col>

      <Col lg="3" md="4" sm="6">
        <h5 className="footer__title">Delivery Time</h5>
        <ListGroup className="deliver__time-list">
          <ListGroupItem className=" delivery__time-item border-0 ps-0">
            <span>Sunday - Thursday</span>
            <p>10:00am - 11:00pm</p>
          </ListGroupItem>

          <ListGroupItem className=" delivery__time-item border-0 ps-0">
            <span>Friday - Saturday</span>
            <p  className='pFooter'>Off day</p>
          </ListGroupItem>
        </ListGroup>
      </Col>

      <Col lg="3" md="4" sm="6">
        <h5 className="footer__title">Contact</h5>
        <ListGroup className="deliver__time-list">
          <ListGroupItem className=" delivery__time-item border-0 ps-0">
            <p>Location: Assuit </p>
          </ListGroupItem>
          <ListGroupItem className=" delivery__time-item border-0 ps-0">
            <span>Phone: 01012345678</span>
          </ListGroupItem>

          <ListGroupItem className=" delivery__time-item border-0 ps-0">
            <span>Email: fooddelivery@gmail.com</span>
          </ListGroupItem>
        </ListGroup>
      </Col>

      <Col lg="3" md="4" sm="6">
        <h5 className="footer__title">Food Delivery</h5>
        <p className='pFooter' >Subscribe our FoodDelivery</p>
        <div className="newsletter">
  
          <input className='email' type="email" placeholder="Enter your email" />
          <span>
            <i className="ri-send-plane-line"></i>
          </span>
        </div>
      </Col>
    </Row>

    <Row className="mt-5 ">
      <Col lg="6" md="6">
        <p className="copyright__text">
          Copyright - 2022, website made by Muhibur Rahman. All Rights
          Reserved.
        </p>
      </Col>
      <Col lg="6" md="6">
        <div className="social__links d-flex align-items-center gap-4 justify-content-end">
          <p    className="m-0 follow">Follow: </p>
          <span>
            {" "}
            <Link to="https://www.facebook.com/muhib160">
              <i className="ri-facebook-line"></i>
            </Link>{" "}
          </span>

          <span>
            <Link to="https://github.com/muhib160">
              <i className="ri-github-line"></i>
            </Link>
          </span>

          <span>
            {" "}
            <Link to=" https://www.youtube.com/c/MuhibsTechDiary">
              <i className="ri-youtube-line"></i>
            </Link>{" "}
          </span>

          <span>
            {" "}
            <Link to=" https://www.linkedin.com/in/muhib160/">
              <i className="ri-linkedin-line"></i>
            </Link>{" "}
          </span>
        </div>
      </Col>
    </Row>
  </Container>

    </footer>
   
  )
}

export default Footer