import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'reactstrap'
import { fire } from '../../firebase';
import Admain from '../../pages/Admain';
import "./order.css"
function Ordedrs() {
    // const orders=JSON.parse(localStorage.getItem('orders'));
    const [selectedValue, setselectedValue] = useState("Waiting");
    // const [orders,setOrders]=useState(JSON.parse(localStorage.getItem('orders')));

     const [orders,setOrders]=useState([]);

    const saveOrder=(id,i)=>{
        if(selectedValue==="Done")
        {
            fire.collection('/orders').doc(id).delete();
               fire.doc("/added/" + orders[i].dataa.uid).delete();
            //  console.log(orders[i].dataa.uid,"5555555")
                // console.log("oerdwrr",orders,i)
        }
        if(selectedValue==="Waiting")
        {
            console.log(selectedValue)
        }
        if(selectedValue==="Cancle")
        {
            console.log(selectedValue);
            fire.collection('/orders').doc(id).delete();
        }
        else return 0;
    }
        useEffect(()=>{
            fire.collection('/orders').onSnapshot((el)=>{
                 setOrders(el.docs.map((el)=>({dataa: el.data(),id:el.id})))           
                // el.docs.map((el)=>  fire.collection('/orders').doc(el.id).delete())
            })

            },[]);

console.log("ord",orders)  
        return (
            <Container>
                 <div className="w-100 m-auto text-center">
                        <h4>
                        number of ordders
                        <div className="style-4">
                                {orders.length}
                         </div>

                        </h4>
                    </div>
                <div className='cont'>
    {
        orders.map((item,idx)=>(
                  <div className='mb-3' key={idx}>
                  <div >
                  <h5 className=' text-dark'>
                        <span>order's code </span> 
                        <span style={{
                            color: "#979797",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}>
                         ( {item.id} )
                        </span>
                  </h5> 
                  </div>
                  <Row className="justify-content-center m-4 user-data">
                  <Col lg="12" className=" d-flex text-center">
                    <div className="admin-content-text py-2 "> Order data</div>
                  </Col>
                  {item.dataa.ordersss.map((order,id)=>(
                   <Row key={id}>
                  <Col lg="6" className=" d-flex">
                  <div
                        style={{
                            color: "#555550",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}>
                        product:
                        <span style={{
                            color: "#979797",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}
                        className="mx-2">
                            {order.title}
                        </span>         
                    </div>                        
                  </Col>
                  <Col lg="6" className=" d-flex">
                  <div
                        style={{
                            color: "#555550",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}>
                        price:
                        <span style={{
                            color: "#979797",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}
                        className="mx-2">
                            EGP {order.price}
                        </span>         
                    </div>                        
                  </Col>
                   </Row>

                  ))}
             {/* <div key={id}>product: {order.title}, price = EGP {order.price}</div> */}
                  {/* <Row className="justify-content-center mt-4 user-data"> */}
                  <Col lg="12" className=" d-flex">
                  <div className="admin-content-text py-2 "> user data</div>
                  </Col>
                  <Col lg="12" className=" d-flex">
                  <div
                        style={{
                            color: "#555550",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}>
                        Name:
                        <span style={{
                            color: "#979797",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}
                        className="mx-2">
                         {item.dataa.shippingInfo.name}
                        </span>         
                    </div>                        
                  </Col>  
                  <Col xs="6" className="d-flex">
                    <div
                        style={{
                            color: "#555550",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}>
                        Postal Code :
                    </div>

                    <div
                        style={{
                            color: "#979797",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}
                        className="mx-2">
                        {item.dataa.shippingInfo.postalCode}
                    </div>
                  </Col>
                  <Col xs="6" className="d-flex">
                    <div
                        style={{
                            color: "#555550",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}>
                        Phone number:
                    </div>

                    <div
                        style={{
                            color: "#979797",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}
                        className="mx-2">
                        {item.dataa.shippingInfo.phone}
                    </div>
                </Col>
                <Col xs="12" className="d-flex">
                    <div
                        style={{
                            color: "#555550",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}>
                        Email:
                    </div>

                    <div
                        style={{
                            color: "#979797",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}
                        className="mx-2">
                        {item.dataa.shippingInfo.email}
                    </div>
                </Col>
                <Col xs="6" className="d-flex">
                    <div
                        style={{
                            color: "#555550",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}>
                        Country:
                    </div>

                    <div
                        style={{
                            color: "#979797",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}
                        className="mx-2">
                        {item.dataa.shippingInfo.country}
                    </div>
                </Col>
                <Col xs="6" className="d-flex">
                    <div
                        style={{
                            color: "#555550",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}>
                        City:
                    </div>

                    <div
                        style={{
                            color: "#979797",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}
                        className="mx-2">
                        {item.dataa.shippingInfo.city}
                    </div>
                </Col>
                <div className=" d-inline px-4 border text-center pt-2">
                    Total Price:
                    <span
                      style={{
                            color: "#ff5f00",
                            fontSize: "16px",
                        }}> EGP{item.dataa.totalPrice}</span>
                </div>
                <div className="d-flex m-2 justify-content-center">
                    <select
                        className="select input-form-area text-center px-2 w-50"
                        onChange={(e)=>setselectedValue(e.target.value)} >
                        <option >Order stuts</option>
                        <option value="Waiting">Waiting</option>
                        <option value="Done">Done</option>
                        <option value="Cancle">Cancle</option>
                    </select>
                    <button className="btn-a px-3 d-inline mx-2"
                     onClick={()=>saveOrder(item.id,idx)}>save</button>
                    </div>
                  </Row>
                  {/* </Row> */}

                  </div>  
                                   
              ))
              }

              
    </div>
   
    </Container>
  )
}

export default Ordedrs