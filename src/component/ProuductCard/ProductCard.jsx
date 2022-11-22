import React from 'react'
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import './product-card.css'
import { useSelector,useDispatch} from 'react-redux';
import { useState } from 'react';
import {fire, auth} from '../../firebase'



export default function ProductCard(props) {

  const uid = useSelector((state) => state.uid);
    
     const {id,title,image01,price,quantity}=props.item;
    //  const [category, setCategory] = useState("ALL");
    const dispatch = useDispatch()

    const hamada = useSelector((state) => state.AddTocart);
  const totalAmount = useSelector((state) => state.tot);

    const [added, setAdded] = useState("Add ");
    
    function addCartHandeler(img,idd,tit,pric,qty){
        setAdded("Done");

            const obj = {
                type:"cart",
                payload:{id:idd,
                    title:tit,
                    img:img,
                    price:pric,
                    quantity:qty,    
                }
            }
            
            dispatch(obj);

            auth.currentUser?  fire.doc("/added/" +uid ).set({ addedd: hamada }):console.log("hi")
    

    }

     return (
    <Container>
        <div className='product_card text-center w-100'>
            <div className='product_img '>
            <Link className=' text-black' to={`/foods/${id}`}>
                <img className="w-50" src={image01}  alt="product"/>
            </Link>
            </div>
        <div className='product_content mb-2'>
        <h6>
            <Link className=' text-black' to={`/foods/${id}`}>{title}</Link>
        </h6>
            <div className='d-flex align-items-center justify-content-between '>
                <span className='product_price'>
                    EGP {price}
                </span>   

               

                <button className={added} onClick={()=>{
                    addCartHandeler(image01,id,title,price,quantity);
                }}>{added}</button>

            </div>
        </div>
        </div>

    </Container>
  )
}