/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'
import CommonSection from '../component/common-section/common-section'
import Helmet from '../component/Helmet'
import ProductCard from '../component/ProuductCard/ProductCard'
import { fire } from '../firebase'
import "../Styles/food-details.css"
import { auth } from '../firebase';
import { GoogleAuthProvider } from 'firebase/auth'
import '../App.css'


const FoodDetails = () => {
const[emaila , setemaila]=useState('')
const[userid , setuserid]=useState('')
const uid = useSelector((state) => state.uid);

  useEffect(()=>{
    auth.onAuthStateChanged((userr)=>{
      
      
      setemaila(userr.email)
      console.log(userr.uid)
      setuserid(userr.uid)
  
  
        })
  },[]) 

  const {id}=useParams();
  const products= useSelector((state)=>state.product);
  const product=products.find((product)=>product.id===id);
  const userdata =useSelector((state)=>state.userdata);
  console.log(new Date().toLocaleString())

    const {title,price,category,desc,image01,image02,image03}=product;
    const [tab,setTab]=useState("Description");
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [review,setReview]=useState('');
    const [reviews,setReviews]=useState([]);
/////////////////////////////////////////////////////////////////////////////
    // const [dataaaa,setdaaa]=useState(["",1,550]);
///////////////////////////////////////////////////////////////////////////////
    // const [reviews,setReviews]=useState(JSON.parse(localStorage.getItem('reviews')));
    const [reviewsById,setReviewsById]=useState([]);
    const [mainImg ,setMainImg]=useState(image01);
    const relatedProduct = products.filter((item) =>
     category === item.category && price===item.price&& title!==item.title);
     ///////////////////////////////////////////////////////////////
// fire.doc('/users/'+userid).onSnapshot((e)=>{
//   console.log(e.data())
//   // setdaaa(e.data())
// })
////////////////////////////////////////////////////////////////////////////
    const addReview=(e)=>{
      e.preventDefault();
/////////////////////////////////////////////////////////////////////////////
      // fire.doc('/users/'+userid).set({
      //   name: dataaaa
      // })
  //////////    //////////////////////////////////////////////////////////////////////////////////
      fire.collection('/reviws').add({
        id: id,
        name:name,
        email:emaila,
        review:review,
        userrr:userdata,
        date:new Date().toLocaleString()

     })
      // setReviews([...reviews,{id:id,name:name,email:email,review:review}]);
      // localStorage.setItem('reviews',JSON.stringify([...reviews,{id:id,name:name,email:email,review:review}]));
      setName("");
      setEmail("");
      setReview("");
    }
 
    
    useEffect(()=>{


    //   localStorage.setItem('reviews',JSON.stringify([...reviews,{id:id,name:name,email:email,review:review}]));
    fire.collection('/reviws').onSnapshot((el)=>{
      setReviews(el.docs.map((el)=>({dataa: el.data(),id:el.id})))
    })
    },[]);

// console.log(reviews[0].dataa)
    useEffect(()=>{
      //  const reviews =JSON.parse(localStorage.getItem('reviews'));
      if(reviews){
        const reviewsById= reviews.filter((item)=>id===item.dataa.id)
        setReviews(reviews);
        setReviewsById(reviewsById)
      }
    },[product,reviews]);

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [product,reviews]);
    // const {id,title,image01,price,quantity}=props.item;s
    const dispatch = useDispatch();

    function addCartHandeler(img,idd,tit,pric,qty){
            
      const obj = {
          type:"cart",
          payload:{id:idd,
              title:tit,
              img:img,
              price:pric,
              quantity:qty
          }
      }
      
      dispatch(obj);
}
  return (
    <Helmet title="Product-details">
    <CommonSection title={title} />
    <Container className='pt-3'>
      <Row>
        <Col lg="2" md="2" >
          <div className='product_imgs'>
            <div className='img mb-3' onClick={()=>setMainImg(image01)}>
              <img src={image01} alt="" className='w-50'/>
            </div>
            <div className='img mb-3' onClick={()=>setMainImg(image02)}>
              <img src={image02} alt="" className='w-50'/>
            </div>
            <div className='img mb-3' onClick={()=>setMainImg(image03)}>
              <img src={image03} alt="" className='w-50'/>
            </div>
          </div>
        </Col>
        <Col lg="3" md="3" >
            <div className='main_img'>
              <img src={mainImg} alt="" className='w-100'/>
            </div>
        </Col>
        <Col lg="6" md="6">
          <div className='product_content px-5 pb-3'>
            <h2 className='mb-3'>{title}</h2>
            <p className='product_price mb-0'>
            price: <span>EGP {price}</span>
            </p>
            <p className='product_category'>
            Category:<span>{category}</span>
            </p>
            <button onClick={()=>{addCartHandeler(image01,id,title,price)}} className="add_btn">
              Add To Cart
            </button>
          </div>
        </Col>
        <Col lg="12">
          <div className='tab d-flex gap-5 align-items-center py-2'>
            <h6 className={`${tab==="Description"? 'tabed':""}`} 
            onClick={()=>setTab("Description")}>
              Description
            </h6>
            <h6 className={`${tab==="Review"? 'tabed':""}`} 
            onClick={()=>setTab("Review")}>
              Review
            </h6>
          </div>
          {
            tab==="Description" ? (
              <div className='tab_desc'>
                  <p>{desc}</p>
              </div>
            ):(
              <div class="box-container">
                {
                  
                  reviewsById.map((item,idx)=>(










                    <div class="box">
                    <p>{item.dataa.date}</p>
                    <img src={item.dataa.userrr.imagee} style={{width:'50px',borderRadius:'50%'}}  alt=""/>
                    <h6>{item.dataa.userrr.name}</h6>

                    <p>{item.dataa.review}</p>
                    

                   
                </div>
        
           
                //   <div className='tab_rev mb-3' key={idx}>
                //   <Row lg="4" className="review ps-3"  style={{width:'100%'}}>
                //  <img style={{width:'50px',borderRadius:'50%'}} src={item.dataa.userrr.imagee} alt="" />
                //     <p className=" text-danger">{item.dataa.userrr.name}</p>
                //     {/* <p className="mb-0 "> {item.dataa.email}</p> */}
                //     <p className="mb-0"> {item.dataa.name}</p>
                //     <p className=" text-danger">{item.dataa.review}</p>


                //   </Row>  
                //   </div>                   
                
                ))
              }
   
                      </div>
            )
          }
                       <form className='form' onSubmit={addReview} style={{marginTop:'10px'}}>
                  <div className=' form_group'>
                    <input
                      type={'email'}
                    placeholder={emaila}
                      value={emaila}
                      required
                      // onChange={(e)=>setEmail(e.target.value)}
                    />                    
                  </div>
                  <div className=' form_group'>
                    <input 
                      type={'text'}
                      placeholder='Enter your name'
                      value={name}
                      onChange={(e)=>setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className=' form_group'>
                    <textarea
                      type={'text'}
                      placeholder='Write your review'
                      value={review}
                      onChange={(e)=>setReview(e.target.value)}
                      required
                      />
                  </div>
                  <button type='submit' className='add_btn'>
                      Add Review
                  </button>
                </form>
        </Col>
        <Col lg='12' className='mb-5 mt-5'>
            <h2 className='related_Product'>
              You might also like
            </h2>
            </Col>
            {
              relatedProduct.map((item)=>(
                <Col lg="3" md="4" sm="6" xs="6" className="mb-4" key={item.id}>
                  <ProductCard item={item} />
                </Col>
              ))
            }
      </Row>
    </Container>
    </Helmet>
  )
}

export default FoodDetails