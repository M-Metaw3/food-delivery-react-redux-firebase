import { Container, Row, Col } from "reactstrap";
import { Link, NavLink, Outlet } from "react-router-dom";
import { useEffect, useState } from 'react'
import { auth } from "../firebase";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector ,useDispatch  } from 'react-redux'
import "../Styles/login.css";
import CommonSection from "../component/common-section/common-section";


const Login = () => {
// auth.signInWithPopup(auth.currentUser,new GoogleAuthProvider()).then((e)=>console.log(e))

  // const dispatch=useDispatch()
const initial ={email:'',password:''}
const[inp,setinp]=useState(initial)
const[user , setuser]=useState(false)

const[dat , setdat]=useState([])
// useEffect(()=>{
//   auth.sendPasswordResetEmail('dd1e60577f@inboxmail.life').then((res)=>{
//     console.log(res)
//   })

// },[])

useEffect(()=>{
  auth.onAuthStateChanged((userr)=>{
    
    userr?
    setuser(true):setuser(false)

      })
},[]) 
       

const x= useNavigate()
const[err,seterr]=useState('')
const hadelerlogin=(e)=>{
setinp({...inp,[e.target.name]:e.target.value})
}

  const hadelersub= async (e)=>{
    e.preventDefault()
      
try {
await auth.signInWithEmailAndPassword(inp.email,inp.password).then((res)=>{
  x('/')

}
)




}
catch (error){
  error.message.includes('There is no user record')? seterr('this account not excited please register'):seterr('incorrect password or email')

}
  }
  



//  const handelerdel=(e)=>
//  {
//   fire.collection('/product').doc(e).delete()

//  }





  
  return (
   
    <section>
  
      <CommonSection/>
      <Container >
      {!user?
        <Row>
          <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <div>
              <form className="form mb-9 w-100 myform " onSubmit={hadelersub}>
              <h3 className="login">Log in</h3>
              <p className="pLogin">login here using your email and password</p>
              <div className="form__group">
              <i className="ri-user-line"></i>      
           <input
                
                  className="inputLogin"
                  type="email"
                  placeholder="Email"
                  required
                  onChange={(event) => {
                    hadelerlogin(event);
                  }}
                  name="email"
                />
              </div>
              <div className="form__group">
              <i className="ri-lock-2-line"></i> 
              <input
              className="inputLogin"
                  type="password"
                  placeholder="Password"
                  required
                  onChange={(event) => {
                    hadelerlogin(event);
                  }}
                  name="password"
                />
              </div>

              <button  type="submit" className="all__btn">
                Login
              </button>
              <div className="forget">
              <Link  to="/forgetpassword">forget password</Link>
            </div>
              <p>{err}</p>
              <div>
              <h3>Or log in via :</h3>
              <i className="ri-facebook-circle-fill iconLogin"></i>
              <i className="ri-twitter-fill iconLogin"></i>
              <i className="ri-linkedin-box-fill iconLogin"></i>
              
              </div>
              <div>
              <div className="createAccount">
             
                Don't have an account?  <Link to="/register"><span > Create an account</span>
              </Link>
              </div>
            </div>
           
            </form>
            
              
               </div>
            </Col>
            </Row>
               :
                <Row className='py-3'>
                    <Col sm="3" xs="2" md="2">
                        <div className="sidebar">
                            <div className="d-flex flex-column">
                                <NavLink to="/Login/UserProfile" style={{ textDecoration: 'none' }}>
                                    <div className="admin-side-text mt-3 border-bottom p-2 mx-auto text-center">
                                        Account
                                    </div>
                                </NavLink>
                                <NavLink to="/Login/Updadeting" style={{ textDecoration: 'none' }}>
                                    <div className="admin-side-text mt-3 border-bottom p-2 mx-auto text-center">
                                        Update profile
                                    </div>
                                </NavLink>
                                <NavLink to="/Login/Updatepassord" style={{ textDecoration: 'none' }}>
                                    <div className="admin-side-text mt-3 border-bottom p-2 mx-auto text-center">
                                    Update password
                                    </div>
                                </NavLink>
                            </div>

                        </div>

                    </Col>
          <Col sm="9" xs="10" md="10"  style={{background:"#f8f5f4"}}>
            <div className=" m-3 p-3">
                  <Outlet />
            </div>
           </Col>
          
                </Row>
              }

            </Container>
            
    </section>

  )
}

export default Login