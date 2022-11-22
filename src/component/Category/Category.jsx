import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'reactstrap';
import chicken1 from "../../assets/images/chicken1.png"
import pizza01 from "../../assets/images/pizzaaa1.png"
import beef from "../../assets/images/beef (1).png"
import './category.css'
import ProductCard from "../ProuductCard/ProductCard";
import { useSelector   } from 'react-redux'
const categories = [
    {
        display: "Beef",
        imgUrl: beef,
    },
    {
        display: "Pizza",
        imgUrl: pizza01,
    },
    {
        display: "Chicken",
        imgUrl: chicken1,
    },
];

function Category() {
    const products = useSelector((state)=>state.product)
     const [allproducts,setAllProducts]=useState(products);
    const [category,setCategory]=useState("All");
    useEffect(()=>{
    if(category==="All")
    {
        setAllProducts(products);
    
    }
    if(category==="Beef")
    {
        const beef_products= products.filter((product)=>
            product.category==="Beef"
        );
        setAllProducts(beef_products);
    }
    if(category==="Chicken")
    {
        const Chicken_products= products.filter((product)=>
            product.category==="Chicken"
        )
        setAllProducts(Chicken_products);
    }
    if(category==="Pizza")
    {
        const Pizza_products= products.filter((product)=>
            product.category==="Pizza"
        )
        setAllProducts(Pizza_products);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[category]);

      
    return (
        <Container>
            <Row>
            <Col lg="12">
                    <div className=' food_category d-flex align-items-center gap-4 
                    justify-content-center'>
                        <button className={`all_btn ${category==="All" ? "foodBtnActive":"" } `} onClick={()=>setCategory("All")}>All</button>
                        { categories.map((item) => (
                            <button key={item.display} 
                            className={`d-flex align-items-center gap-2 ${category===item.display ? "foodBtnActive":"" } `}
                            onClick={()=>setCategory(`${item.display}`)}>
                                <img className='w-50' src={item.imgUrl} alt="categories"
                                    width={50} height="50" />
                                {item.display}
                            </button>
                        )

                        )}

                    </div>
            </Col>
                {allproducts.map((item)=>(
                    <Col lg="3" md="4" sm="6" xs="6" key={item.id}>
                        <ProductCard item={item}/>

                    </Col>   
                ))} 

            </Row>
        </Container>
    )
}
export default Category;

