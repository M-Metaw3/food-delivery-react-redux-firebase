
import React from 'react';
import { Container } from 'reactstrap';
import Logo from '../../assets/images/icon1.png'
import { useSelector,useDispatch} from 'react-redux';
import {NavLink,Link} from 'react-router-dom';
import '../../Styles/Header.css'
import { useEffect, useState } from 'react'
import { auth } from '../../firebase';
import { fire } from '../../firebase'






const nav__links = [

  {
    display: "Home",
    path: "/home",
  },
  {
    display: "Foods",
    path: "/foods",
  },
  {
    display: "Cart",
    path: "/cart",
  },
  {
    display: "Contact",
    path: "/contact",
  },
];
const Header = () => {



//   useEffect(()=>{
//     fire.doc('/users/'+auth.currentUser.uid).onSnapshot((e)=>{
//   console.log(e.data().name)
//   // setdaaa(e.data())
// })
  // },[])
  var cartTotal = useSelector((state)=>state);
const [a,seta]=useState(null)
const [email,setemail]=useState('')
const [imgg,setimgg]=useState('')

const[show , setshow]=useState(false)
const dispatch = useDispatch();
// const user=useSelector((state)=>state.userauto)
const [add, setAdded] = useState([]);


useEffect(()=>{
  auth.onAuthStateChanged((userr)=>{
 userr? 
  fire.doc('/users/'+userr.uid).onSnapshot((e)=>{
      setemail(e.data().name)
      setimgg(e.data().imagee)
      console.log(userr.uid)
const ui={
  type:"ui",
  payload:userr.uid
}
      const storeee={
        type:"user data",
        payload:e.data()
      }
      dispatch(storeee)
      dispatch(ui)
}):
 setemail('');
  userr.email==='metaea@gmail.com'?setshow(true):setshow(false);
      })
},[]) 


useEffect(()=>{
  auth.onAuthStateChanged((userr)=>{
 userr? 
fire.doc("/added/" + userr.uid).onSnapshot((e)=>{e.data() ? setAdded(e.data().addedd):setAdded([])}):setAdded([])
})

},[]) 
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
},[]) 

  // const user=useSelector((state)=>state.userauto)

  const handeler = () => {
    const obj = {
      type: "showCart",
    };
    dispatch(obj);
  };
  return (
    <header className="header">
      <Container>
        <div className="nav-wrapper d-flex align-items-center justify-content-between">
          <div className="logo">
            <img src={Logo} alt="logo" />
            {/* <h5> Tasty Treat</h5>*/}
          </div>

          <div className="navigation">
            <div className="menu d-flex align-items-center gap-5">
              {nav__links.map((item, index) => (
                <NavLink
                  to={item.path}
                  key={index}
                  className={(navClass) =>
                    navClass.isActive ? "active__menu" : ""
                  }
                >
                  {item.display}
                </NavLink>
              ))}
              {show ? <NavLink to={"/admain"}
              className={(navClass) =>
                navClass.isActive ? "active__menu" : ""
              }>
              Admin
              </NavLink> : ""}
            </div>
          </div>
  


       {/* nav right icons */}
       <div className="nav__right d-flex align-items-center gap-4">
     
       <span className="cart__icon "onClick={()=>{handeler()}}>
         <i className="ri-shopping-basket-line"></i>
         <span className="cart__badge">  {add.length}</span>
       </span>
       <span className="user" >
         <Link to="/Login">
           <i className="ri-user-line" ><span style={{fontSize:'10px'}}>{email}</span></i>     
         </Link>
       </span>
       <img src={imgg} style={{width:'30px',borderRadius:'50%' }} alt="" srcSet="" />
       <span className="mobile__menu">
         <i className="ri-menu-line"></i>
       </span>
     </div>
      </div>
  </Container>
  </header>
  )
}
export default Header


