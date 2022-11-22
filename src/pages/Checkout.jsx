import React from 'react';
import { Container,Row, Col } from 'reactstrap';
import { useSelector,useDispatch } from 'react-redux';
import CommonSection from '../component/common-section/common-section'
import Helmet from '../component/Helmet'
import '../Styles/checkout.css';
import { useState } from 'react';
import { auth } from '../firebase';
import {fire} from '../firebase'


const Checkout = () => {
  const useremail=auth.currentUser.email;
  const [enterName, setEnterName] = useState("");
  const [se, set] = useState("");
  const [disc, setdisc] = useState("");
  const [enterEmail, setEnterEmail] = useState(useremail);
  const [enterNumber, setEnterNumber] = useState("");
  const [enterCountry, setEnterCountry] = useState("");
  const [enterCity, setEnterCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  
  const obj ={name:'',email:'',number:'',country:'',city:'',PostalCode:''}
  const [usersss, setusersss] = useState('');
  const [age, setage] = useState('');
  const [checker, setchecker] = useState(false);
  // const [inpu, setinpu] = useState('');
  const dispatch = useDispatch();

  // const [offerss, setoffers] = useState('');


  const porceed= useSelector((state) => state.order);

  const hamada = useSelector((state) => state.AddTocart);

  
  
  const shippingInfo = [];
  const cartTotalAmount = useSelector((state) => state.tot);
  const offers = useSelector((state) => state.offers);
  const [inpu, setinpu] = useState(offers);



  // console.log(offers)
// setoffers(offers)
  const shippingCost = 15;
  const [totalAmount ,settotalAmount] =useState( cartTotalAmount + Number(shippingCost));

  
//   const discountcode=["Bufflo20"]
//   if (!discountCode) {
//     setNoDiscountCode(true)
//     setInvalidDiscountCode(false)
// } else {

// }



  const submitHandler = (e) => {
    e.preventDefault();
    setusersss({name:enterName,email:enterEmail,number:enterNumber,country:enterCountry,city:enterCity,PostalCode:postalCode})     
     const userShippingAddress = {
      name: enterName,
      email: enterEmail,
      phone: enterNumber,
      country: enterCountry,
      city: enterCity,
      postalCode: postalCode,
    };
    shippingInfo.push(userShippingAddress);
    console.log(shippingInfo);
    // fire.collection('/orders').add({shippingInfo:shippingInfo})
    setEnterCity("")
    setEnterCountry("")
    setEnterName("")
    setPostalCode("")
    setEnterNumber("")
    fire.collection('/orders').add({
      ordersss:hamada,
      shippingInfo:userShippingAddress,
      totalPrice:totalAmount,
      uid:auth.currentUser.uid})


    const payment = {
      type: "payment",
      payload: shippingInfo,
    };
    dispatch(payment);
  
 


  };
// const porcee=()=>{
//     fire.collection('/orders').add([{
//       porceed

//   }])
// }

  const handelerchangediscount=(e)=>{
    if (e.target.value===offers) {
      setchecker(true)
    

    }else{
      setchecker(false)
    }
console.log(e.target.value)


  }
const hadelerapplay=()=>{
if (checker) {
  console.log('ijodfjoohi')
  setdisc('25%')
  setinpu('')
 
        settotalAmount ( cartTotalAmount + Number(shippingCost)*0.15);
  offers=''
}else{

  settotalAmount ( cartTotalAmount + Number(shippingCost));
      console.log('hi wrong')

}




}
  
  return(

    <Helmet title ="Checkout">
    <CommonSection title= "Checkout"/>
    <section>
        <Container>
          <Row>
            <Col lg="8" md="6">
              <h6 className="shipping">Shipping Address</h6>
           <form className="checkout__form" onSubmit={submitHandler}>
                <div className="form__group">
                  <input className='input'
                    type="text"
                    placeholder="Enter your name"
                    required
                    value={enterName}
                    onChange={(e) => setEnterName(e.target.value)}
                     name=''
                  />
                </div>

                <div className="form__group">
                  <input className='input'
                    type="email"
                    placeholder="Enter your email"
                    required
                    value={enterEmail}
                    readOnly
                    // onChange={(e) => setEnterEmail(e.target.value)}
                   
                  />
                </div>
                <div className="form__group">
                  <input className='input'
                    type="number"
                    placeholder="Phone number"
                    required
                    value={enterNumber}

                    onChange={(e) => setEnterNumber(e.target.value)}

                    
                   
                  />
                </div>
                <div className="form__group">
                  <input className='input'
                    type="text"
                    placeholder="Country"
                    required
                    value={enterCountry}
                    onChange={(e) => setEnterCountry(e.target.value)}
                   
                  />
                </div>
                <div className="form__group">
                  <input className='input'
                    type="text"
                    placeholder="City"
                    required
                    value={enterCity}
                    onChange={(e) => setEnterCity(e.target.value)}

                  />
                </div>
                <div className="form__group">
                  <input  className='input'
                    type="number"
                    placeholder="Postal code"
                    required
                    value={enterNumber}
                    onChange={(e)=>setPostalCode(e.target.value)}

                   
                  />
                </div>
                <button type="submit" className='submit' >
                  Payment
                </button>
                {/* <button onClick={()=>{porcee()}}>ddd</button> */}
              </form>
              </Col>
             

              <Col lg="4" md="6">
              <Col lg="4" md="6">
              <h5 className='dis' style={{color:'black'}}>discount code:  <span style={{color:'orange',fontSize:'30px'}}>{ inpu}</span> </h5>

              <h5 className='dis'>Do you have a discount code..?</h5>
              <input  className='inputDis'
                    type="text"
                    placeholder="Discount code"
                    onChange={handelerchangediscount}
                    
                    />
                    <button className='apply' onClick={hadelerapplay}>Apply</button>
              </Col>
                <div className="checkout__bill">
                  <h6 className="d-flex align-items-center justify-content-between mb-3">
                    Subtotal: <span>${cartTotalAmount}</span>
                  </h6>
                  <h6 className="d-flex align-items-center justify-content-between mb-3">
                    Shipping: <span>${shippingCost}</span>
                  </h6>
                  <h6 className="d-flex align-items-center justify-content-between mb-3">
                    discount: <span>${disc}</span>
                  </h6>
                  <div className="checkout__total">
                    <h5 className="d-flex align-items-center justify-content-between">
                      Total: <span>${totalAmount}</span>
                    </h5>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
    </Helmet>

/* 
    
    <input className='input'
                    type="text"
                    placeholder="Enter your name"
                    required
                    onChange={(e) => setEnterName(e.target.value)}
                     name=''
                  
                    <input className='input'
                    type="text"
                    placeholder="Enter your name"
                    required
                    onChange={(e) => set(e.target.value)}
                     name=''
                  <button onClick={hade}>submit</button>
                  <p>{usersss}</p>
                  <p>{age}</p>
                  </> */
   
    );
  
}

export default Checkout