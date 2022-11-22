import React from "react";
// import Store from "../../store/Store";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import Routers from "../../routes/Routers";
// import Checkout from "../../pages/Checkout";
import ProductCart from "../ProductCart/productCart";
// import { Route } from "react-router-dom";


const Layout = () => {
 
  return (
    <div>
      
    <Header/>
    <ProductCart/>
    <Routers/>
    </div>
  );
};

export default Layout;