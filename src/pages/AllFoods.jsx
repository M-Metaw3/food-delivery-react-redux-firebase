/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Col, Container, Row } from 'reactstrap'
import ProductCard from '../component/ProuductCard/ProductCard';
 import ReactPaginate from 'react-paginate';
import "../Styles/all_food.css"
import Helmet from '../component/Helmet';
import CommonSection from '../component/common-section/common-section';
const AllFoods = () => {
  const [searchValue, setSearchValue] = useState("");
  const products= useSelector((state)=>state.product);
  const [selectedValue, setselectedValue] = useState("");
  const [showenProducts,setshowenProducts]=useState(products);
  const [pageNumber, setPageNumber] = useState(0);

  // const [searchedProdut,setSearchedProdut]=useState(products)
    
  const productPerPage = 8;
  const visitedPage = pageNumber * productPerPage;
  const displayPage = showenProducts.slice(
    visitedPage,
    visitedPage + productPerPage
  );

  const pageCount = Math.ceil(showenProducts.length / productPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  const searchedProduct=products.filter((product) => {
    if(searchValue===""){
      return product;
    }
    if(product.title.toLowerCase().includes(searchValue.toLowerCase()))
    {
      return product;
    }
    else
    {
      return 0;
    }
  });

  useEffect(() => {
      if(selectedValue==="Default")
      {
        setshowenProducts(products);
      }
      else if(selectedValue==="descending")
      {
        const sortByDescendingName=[...showenProducts].sort((a,b)=>a.title>b.title ?-1:1); 
         setshowenProducts(sortByDescendingName);
      }
      else if(selectedValue==="ascending")
      {
        const sortByAscendingName=[...showenProducts].sort((a,b)=>a.title>b.title ?1:-1); 
        setshowenProducts(sortByAscendingName);
      }
      else if(selectedValue==="high-price")
      {
        const sortingByHighPrice=[...showenProducts].sort((a,b)=>b.price - a.price)
        setshowenProducts(sortingByHighPrice);
      }
      else if(selectedValue==="low-price")
      {
        const sortingByLowPrice= [...showenProducts].sort((a,b)=>a.price - b.price);;
        setshowenProducts(sortingByLowPrice);
      }
      else {
        setshowenProducts(products);
      }
  }, [selectedValue,products]);

  useEffect(() => { 
    if(searchValue)
    setshowenProducts(searchedProduct);
    else
    {
      setshowenProducts(products);
    }
  },[searchValue]);
    // high price
  // const sortingArray= products.sort((a,b)=>a.price - b.price); 
  // const sortingArray= products.sort((a,b)=>b.price - a.price); 

  // Z-A
  //  const sortByDescendingName= [...products].sort((a,b)=>(a.title>b.title)?-1:1); 
  // A-Z
  // const sortByDescendingName=[...products].sort((a,b)=>(a.title>b.title)?1:-1); 

  return (
    <Helmet title="All-Foods">
      <CommonSection title="All Foods">
      </CommonSection>
      <section>
      <Container>
        <Row>
          <Col lg="6" md="6" sm="6" xs="12">
          <div className="search d-flex align-items-center justify-content-between ">
              <input 
                type={"text"}
                placeholder="I'm looking for..."
                // value={searchValue}
                onChange={(e)=>setSearchValue(e.target.value)}
              />
              <span>
                <i className="ri-search-line"></i>
              </span>
            </div>
          </Col>
          <Col lg="6" sm="6" xs="12" className='mb-5'>
            <div className='select text-end'>
              <select className='w-50' onChange={(e)=>setselectedValue(e.target.value)}>
                <option value="Default">Default</option>
                <option value="ascending">Alphabetically: A-Z</option>
                <option value="descending">Alphabetically: Z-A</option>
                <option value="high-price">High Price</option>
                <option value="low-price">Low Price</option>
              </select>
            </div>
          </Col>
          {displayPage.map((item)=>(
            <Col lg="3" md="4" sm="6"
             xs="6" key={item.id} >
            <ProductCard item={item}/>
            </Col>
          ))}

          <div>
              <ReactPaginate
                pageCount={pageCount}
                onPageChange={changePage}
                previousLabel={"<<"}
                nextLabel={">>"}
                containerClassName=" paginationBttns "
              />
            </div>

        </Row>
      </Container>
    </section>
  
    </Helmet>

  );
};

export default AllFoods