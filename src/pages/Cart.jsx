import React from "react";
import { useSelector, useDispatch
 } from "react-redux";
import { NavLink, useParams } from 'react-router-dom'
import { Link } from "react-router-dom";
import "../Styles/cart.css";
import { useState,useEffect } from "react";

import { fire,auth} from '../firebase'


const Cart = () => {
  const uid = useSelector((state) => state.uid);
  const [orders , setorders]=useState([])
const [count, setCount] = useState([]);
const [ord, setord] = useState([]);
const [val, setVal] = useState([]);
const [total, setTotal] = useState(0);
const [add, setAdded] = useState([]);
let TotalPrice=0;
  const hamada = useSelector((state) => state.AddTocart);  
  const totalQuantity = useSelector((state) => state.totalQuantity);
  const totalAmount = useSelector((state) => state.tot);
  console.log(totalAmount)
  const dispatch = useDispatch();
  const handeldel = (i, el) => {
    
    
   
    // onSnapshot((e)=>{setAdded(e.data().addedd.filter((e,index)=>e.id!=el.id))})
    console.log(add)
    const dele = {
      type: "del",
      payload: {  
        index: i,
        element: el,
        
      },
    };
    dispatch(dele);
    fire.doc("/added/" +uid ).update({addedd:add.filter(addedd=>addedd.id!=el.id)})

  };
  useEffect(()=>{
    auth.onAuthStateChanged((userr)=>{
      userr?fire.doc("/added/" + uid).onSnapshot((e)=>{
        setAdded(e.data().addedd)
        add.map((e)=>{
          TotalPrice+= e.price
        })
        // setTotal(e.data().tot)
        console.log(e.data())
      })
      :
      setAdded([])  
      setTotal("")
    })
  },[uid])


var qool;

const handelplus=(e,el)=>{
  
  setVal(e.target.previousSibling.stepUp());
  console.log(e.target.previousSibling.value); 
   hamada.map((item)=>
  el.id=== item.id ? {...item, quantity: el.quantity=  e.target.previousSibling.value * el.price} : item
  ,setCount(el.quantity)
  )
  const qont = {
    type: "qont",
    payload: count,
  };
  dispatch(qont);        
}
const handelminus=(e,el)=>{
  
  setVal(e.target.nextSibling.stepDown());
  console.log(e.target.nextSibling.value); 
   hamada.map((item)=>
  el.id=== item.id ? {...item, quantity: el.quantity=  e.target.nextSibling.value * el.price} : item
  ,setCount(el.quantity)
  )
  const qont = {
    type: "qont",
    payload: count,
  };
  dispatch(qont);        
}

   



  return (
    <div>
      {/* <h1 style={{ color: "red" }}> counter: {hamada.length}</h1> */}
      <div className="w-100 m-auto text-center">
          <div className="style-3">Cart</div>
          <div className="style-4"> {add.length}</div>
      </div>

      <div className="style-0 mt-2 mb-2">
      <h1> total:{totalAmount}</h1>
        {add.map((el, i) => (
          <div key={i}>
            {/* <h1>{el.price}</h1>
          <img src={el.img} alt="" />
          <button onClick={() => handeldel(i, el)}>delete</button> */}

            <div className="style-0">
              <div className="style-1">
                <div className="style-2">
                  {/* <div className="style-3">Cart</div>
            <div className="style-4"> {hamada.length}</div> */}
                </div>
                <div className="style-5">Qty</div>
                <div className="style-6">Total</div>
                <div className="style-6">
                  <button onClick={() => handeldel(i, el)}>delete</button>
                </div>
              </div>

              <div className="style-7">
                <div
                  className="style-8"
                  data-bedrock-inline="justify:start align:start"
                >
                  <div className="style-9">
                    <div className="style-10">
                      <div className="style-11">
                        <img
                          alt=""
                          src={el.img}
                          aria-hidden="true"
                          className="style-12"
                        />
                      </div>
                
                      <noscript className="style-14"></noscript>
                    </div>
                  </div>
                  <div className="style-15">
                    <div className="style-16">{el.title}</div>
                    <div className="style-16">
                      EGP{el.price}
                    </div>
                    <div className="style-17" fontSize="16px">
                      {el.description}
                    </div>
                  </div>
                </div>
                <div className="style-18">
                  <div className="style-19">
                  
                    <h1>{qool}</h1>
                    <span className="style-23">{qool}</span>
                    <link rel="stylesheet" 
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w==" 
            crossOrigin="anonymous"/>

<div className="number-input">
  <button onClick={(e)=>{handelminus(e,el)}} className="minus"></button>
  <input className=" inpot" name="quantity"  readOnly type="number" value={val} min="1" />
  <button onClick={(e)=>{handelplus(e,el)}} className="plus"></button>
</div>
                    {/* <input type="number" className="inpot" 
                            min="1" max="50" 
                    onChange={(e) => handelPlus(e,el,i)}/> */}
         
                    {/* <button className="style-24">
                      <svg
                        className="style-25"
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        data-testid="AddCircleOutlineIcon"
                      >
                        <path
                          d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                          className="style-26"
                        ></path>
                      </svg>
                    </button> */}
                  </div>
                </div>
                <div className="style-27">
                      {
                        (el.quantity=="1")?
                      <div className="style-28">
                      EGP{el.price}
                      </div>
                      :
                      <div className="style-28">
                       EGP{el.quantity}
                       </div>
                      } 
                  
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <button className="addTOCart__btn">
          <Link to="/checkout" onClick={()=>finito()}>Proceed to checkout</Link>
            </button> */}
            <div className="w-100 m-auto text-center">

             <button className="add_btn">
               <NavLink to="/checkout" style={{ color:"white" , textDecoration:"none"}}>Proceed to checkout</NavLink>
           </button>
           </div>
                     
    </div>
  );
};



export default Cart;