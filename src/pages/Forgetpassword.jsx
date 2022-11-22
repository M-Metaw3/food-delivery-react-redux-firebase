import React from 'react'
import { useEffect, useState } from 'react'
import { auth } from "../firebase";
// import { getAuth, updateProfile } from "firebase/auth";
import {NavLink,Link} from 'react-router-dom';

const Forgetpassword = () => {
const [email,setemail]=useState()
const [error,seterror]=useState('')
const [checkemail,setcheckemail]=useState('')



  const handelerholdemaol=(e)=>{

    
   setemail( e.target.value)
  }

const resetemail=async (e)=>{
e.preventDefault()

  try {
  await auth.sendPasswordResetEmail(email).then((res)=>{console.log(res)})
    
  setcheckemail('we send link to your email check your email to verification and reset password')

    seterror('')
    
    }
    catch (error){
     
   { error.message.includes('There is no user')?seterror("this email doesn't exsite or has been deleted"):seterror('')}
   setcheckemail('')
    }
}


  return (
    <div style={{textAlign:'center'}}>
       <form className="form mb-5" >
              <div className="form__group">
                <input
                  type="email"
                  placeholder="Enter your  Email"
                  required
                
               onChange={handelerholdemaol}
                name='email'
                />
              </div>
       
             
              <button onClick={resetemail} type="submit" className="all__btn">
               Reset password
              </button>
            {error!=''?  <p style={{fontSize:'20px',marginTop:'10px' ,color:'red'}}>{error}</p>:<div><p style={{fontSize:'20px',marginTop:'10px',color:'green'}}>{checkemail}</p>     </div>}
            <Link to="/login">
            <button  type="submit" className="all__btn">
                Login
              </button> 
         </Link>
              

         
            </form>
    </div>
  )
}

export default Forgetpassword