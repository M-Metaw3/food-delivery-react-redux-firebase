import pizza1 from "../assets/images/pizzaaa1.png"
import pizza2 from "../assets/images/pizzaaa2.png"
import pizza3 from "../assets/images/pizzaaa3.png"
import pizza4 from "../assets/images/pizzaaa4.png"
import pizza5 from "../assets/images/pizzaaa5.png"
import pizza6 from "../assets/images/pizzaaa6.png"
import pizza7 from "../assets/images/pizzaaa7.png"
import pizza8 from "../assets/images/pizzaaa8.png"
import pizza9 from "../assets/images/pizzaaa9.png"
import pizza10 from "../assets/images/pizzaaa10.png"

import beef1 from "../assets/images/beef (1).png"
import beef2 from "../assets/images/beef (2).png"
import beef3 from "../assets/images/beef (3).png"
import beef4 from "../assets/images/beef (4).png"
import beef5 from "../assets/images/beef (5).png"
import beef6 from "../assets/images/beef (6).png"
import beef7 from "../assets/images/beef (7).png"
import beef8 from "../assets/images/beef (8).png"
import beef9 from "../assets/images/beef (9).png"
import beef10 from "../assets/images/beef (10).png"
import beef11 from "../assets/images/beef (11).png"
import beef12 from "../assets/images/beef (12).png"
import beef13 from "../assets/images/beef (13).png"
import beef14 from "../assets/images/beef (14).png"

import chicken1 from "../assets/images/chicken1.png"
import chicken2 from "../assets/images/chicken2.png"
import chicken3 from "../assets/images/chicken3.png"
import chicken4 from "../assets/images/chicken4.png"
import { useEffect } from "react"
import { fire } from "../firebase"
import React from "react";



const products = [{
        id: "01",
        title: "Cheese pizza",
        price: 90.0,
        image01: pizza1,
        image02: pizza2,
        image03: pizza3,
        category: "Pizza",
        desc: "Cheese pizza Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque. ",
        quantity: 1
    },
    {
        id: "02",
        title: "Vegetarian Pizza",
        price: 90.0,
        image01: pizza2,
        image02: pizza3,
        image03: pizza4,
        category: "Pizza",

        desc: "Vegetarian Pizza Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
        quantity: 1
    },
    {
        id: "03",
        title: "Seafood Pizza",
        price: 85.0,
        image01: pizza3,
        image02: pizza2,
        image03: pizza3,
        category: "Pizza",

        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
        quantity: 1
    },
    {
        id: "04",
        title:"Pizza With Mushroom",
        price: 85.0,
        image01: pizza4,
        image02: pizza2,
        image03: pizza3,
        category: "Pizza",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
        quantity: 1
    },
    {
        id: "05",
        title: "Maxican Green Wave",
        price: 65.0,
        image01: pizza5,
        image02: pizza2,
        image03: pizza3,
        category: "Pizza",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
        quantity: 1
    },
    {
        id: "06",
        title: "Double Cheese Margherita",
        price: 75.0,
        image01: pizza6,
        image02: pizza2,
        image03: pizza3,
        category: "Pizza",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
        quantity: 1
    },
    {
        id: "07",
        title: "Pizza With Mushroom",
        price: 75.0,
        image01: pizza7,
        image02: pizza2,
        image03: pizza3,
        category: "Pizza",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
        quantity: 1
    },
    {
        id: "08",
        title: "Pizza With Mushroom",
        price: 85.0,
        image01: pizza8,
        image02: pizza2,
        image03: pizza3,
        category: "Pizza",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
        quantity: 1
    },
    {
        id: "09",
        title: "Pizza With Mushroom",
        price: 95.0,
        image01: pizza9,
        image02: pizza2,
        image03: pizza3,
        category: "Pizza",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
        quantity: 1
    },
    {
        id: "10",
        title: "Pizza",
        price: 85.0,
        image01: pizza10,
        image02: pizza2,
        image03: pizza3,
        category: "Pizza",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
        quantity: 1
    },
    {
        id: "11",
        title: "Beef With Mushroom",
        price: 70.0,
        image01: beef1,
        image02: beef10,
        image03: beef3,
        category: "Beef",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
        quantity: 1
    },

    {
        id: "12",
        title: "Beef Double Cheese",
        price: 70.0,
        image01: beef2,
        image02: beef10,
        image03: beef3,
        category: "Beef",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
        quantity: 1
    },

    {
        id: "13",
        title: "Beef With Mushroom",
        price: 65.0,
        image01: beef3,
        image02: beef10,
        image03: beef1,
        category: "Beef",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
        quantity: 1
    },

    {
        id: "14",
        title: "Beef",
        price: 80.0,
        image01: beef4,
        image02: beef10,
        image03: beef1,
        category: "Beef",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
        quantity: 1
    },

    {
        id: "15",
        title: "Beef With Mushroom",
        price: 55.0,
        image01: beef5,
        image02: beef10,
        image03: beef1,
        category: "Beef",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
        quantity: 1
    },

    {
        id: "16",
        title: "Beef With Mushroom",
        price: 55.0,
        image01: beef6,
        image02: beef10,
        image03: beef1,
        category: "Beef",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
        quantity: 1
    },

    {
        id: "17",
        title: "Beef With Mushroom",
        price: 50.0,
        image01: beef7,
        image02: beef10,
        image03: beef1,
        category: "Beef",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
        quantity: 1
    },

    {
        id: "18",
        title: "Beef With Mushroom",
        price: 70.0,
        image01: beef8,
        image02: beef10,
        image03: beef1,
        category: "Beef",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
        quantity: 1
    },

    {
        id: "19",
        title: "Beef Double Cheese",
        price: 80.0,
        image01: beef9,
        image02: beef10,
        image03: beef1,
        category: "Beef",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
        quantity: 1
    },

    {
        id: "20",
        title: "Beef With Mushroom",
        price: 70.0,
        image01: beef10,
        image02: beef1,
        image03: beef2,
        category: "Beef",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
        quantity: 1
    },

    {
        id: "21",
        title: "Beef With Mushroom",
        price: 60.0,
        image01: beef11,
        image02: beef10,
        image03: beef1,
        category: "Beef",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
        quantity: 1
    },

    {
        id: "22",
        title: "Beef With Mushroom",
        price: 80.0,
        image01: beef12,
        image02: beef10,
        image03: beef1,
        category: "Beef",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
        quantity: 1
    },

    {
        id: "23",
        title: "Beef With Mushroom",
        price: 80.0,
        image01: beef13,
        image02: beef2,
        image03: beef1,
        category: "Beef",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
        quantity: 1
    },

    {
        id: "24",
        title: "Beef With Mushroom",
        price: 80.0,
        image01: beef14,
        image02: beef1,
        image03: beef2,
        category: "Beef",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
        quantity: 1
    },

    {
        id: "25",
        title: "Chicken With Mushroom",
        price: 70.0,
        image01: chicken1,
        image02: chicken2,
        image03: chicken3,
        category: "Chicken",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
        quantity: 1
    },
    {
        id: "26",
        title: "Chicken With Mushroom",
        price: 80.0,
        image01: chicken2,
        image02: chicken4,
        image03: chicken1,
        category: "Chicken",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
        quantity: 1
    },
    {
        id: "27",
        title: "Chicken",
        price: 70.0,
        image01: chicken3,
        image02: chicken1,
        image03: chicken2,
        category: "Chicken",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
        quantity: 1
    },

    {
        id: "28",
        title: "Chicken Double Cheese",
        price: 80.0,
        image01: chicken4,
        image02: chicken1,
        image03: chicken2,
        category: "Chicken",
        desc: `Chicken Double Cheese Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.`,
        quantity: 1
    },

];


export function getProducts() {

 
    // useEffect(()=>{
    //     fire.collection('/product').onSnapshot((el)=>{
    //       el.docs.map((el)=> {
    
    //         const prd=products.filter((el)=>el.id===el.data().id)
    // if(prd.length==0){
    //         products.push(el.data())
    // }else{console.log('hi')}
    
    //     }
    //       )
    //     } )
      
    //   },[])
      
}
   



export default products;

