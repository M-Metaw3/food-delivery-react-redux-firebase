import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'
import { auth, fire } from '../firebase'
import { useSelector} from 'react-redux';

function UserProfile() {
  const uid = useSelector((state) => state.uid);
    const[user , setuser]=useState(false)
    const[name , setName]=useState('')
    const[email , setEmail]=useState('')
    const[adresss , setAdresss]=useState('')
    const[img , setImg]=useState("")
    const[orders , setOrders]=useState([])

    const x = useNavigate() ;   
    const hadelerlog= async ()=>{

      try {

        await auth.signOut().then(()=>
         {x('/login')}
        )
      }   
      catch (error){
        error.message.includes('There is no user record')? console.log('err'):console.log("er")
      
      }   
   window.location.reload(true) 
    }
    useEffect(()=>{
        auth.onAuthStateChanged((userr)=>{  
          userr?  fire.doc('/users/'+userr.uid).onSnapshot((e)=>{
          setuser(true)
          setName(e.data().name)
          setEmail(userr.email)
          setAdresss(e.data().adresss)
          setImg(e.data().imagee)
            console.log(e.data())
          }):setuser(false)      
            })
      },[]) 

   
    useEffect(()=>{
      auth.onAuthStateChanged((userr)=>{
        userr?fire.doc("/added/" + uid).onSnapshot((e)=>{setOrders(e.data().addedd)}):setOrders([])  
      })
    },[uid])
    return (
        <div >
          <div className=' text-center w-50 m-auto' >
            <h3>Welcome {name} </h3> 
          </div>
        <Row>
          <Col>
          <div className=' text-left w-50 m-auto' >
            <Container >
                <div>
                    <img src={img} width='70px' alt='' style={{borderRadius:"35px"}} className="border" />
                    <p style={{fontWeight:"700"}}> {name} </p>
                    <p>Email: <span>{email}</span></p>
                    <p>Adresss: <span>{adresss}</span></p>
                    <button className=' add_btn' onClick={hadelerlog}>log out</button>
                 </div>
            </Container>     
    </div>
          </Col>
          <Col className="bg-white "style={{borderRadius:"20px"}}>
          <div className='p-2'style={{color:"#ff5f00"}} >
            <h5>Your Order</h5>
          </div>
          <div className=' text-left w-50 m-auto' >
                {
                  orders.map((item,idx)=>(
                    <div className=" w-100 d-flex align-items-center gap-4 justify-content-between">
                          <div>
                          <h6 className="cart__product-title">{item.title}</h6>
                          <p className=" d-flex align-items-center gap-5 cart__product-price">
                            {item.quantity}x <span>EGP {item.price}</span>
                          </p>
                          </div>

                    </div>
                  ))

                }
                
            </div>
          </Col>
        </Row>
         </div>
  )
}

export default UserProfile