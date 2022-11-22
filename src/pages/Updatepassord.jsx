import React from 'react'
import { getAuth, updatePassword } from "firebase/auth";
import  { useEffect, useState } from 'react'
import { Container } from 'reactstrap';
import { auth } from '../firebase';
import { useNavigate } from "react-router-dom";

const Updatepassord = () => {
const Navigat= useNavigate()

const [update,setupdate]=useState()
const [reupdate,setreupdate]=useState()
const [message,setmessage]=useState()
const[email , setemail]=useState('')

useEffect(()=>{
  auth.onAuthStateChanged((userr)=>{    
    setemail(userr.email)

      })
},[])   


 const updateprofile=()=>{


if (update===reupdate){

  setupdate('')
  setreupdate('')
  auth.signOut().then(()=>console.log("login out"))
setmessage("your password updated plese login again")
updatePassword(auth.currentUser,update).then((res)=>{
})

setTimeout(()=>{
  Navigat('/login')
},3000)


}
else{
  
setmessage("password not match")


 }
        }   
  return (
    <div style={{textAlign:'center'}}>
            <div className="form__group">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  readOnly
                name='email'
                />
              </div>
       
              <div className="form__group">
                <input
                  type="password"
                  placeholder=" New Password"
                  required
                  onChange={(e)=>setupdate(e.target.value)}
              
               name='password'

                />
              </div>
              <div className="form__group">
                <input
                  type="password"
                  placeholder=" Renter Password"
                  required
              onChange={(e)=>setreupdate(e.target.value)}
               name='password'

                />
              </div>
             
              <button onClick={updateprofile} type="submit" className="all__btn">
          Submit
              </button>

              <p>{message}</p>



    </div>
  )
}

export default Updatepassord