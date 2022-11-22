import React from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./productcart.css";
import { auth, fire } from "../../firebase";
const ProductCart = () => {
  const hamada = useSelector((state) => state.AddTocart);
  // const qont = useSelector((state) => state.AddTocart);
  const totalQuantity = useSelector((state) => state.totalQuantity);

  const show = useSelector((state) => state.cartShow);
  const totalAmount = useSelector((state) => state.tot);
  const [qoty, setQoty] = useState();
  // const[col,setCol] = useState(1)
  const dispatch = useDispatch();
  const uid = useSelector((state) => state.uid);
  const [add, setAdded] = useState([]);
  const handeldel = (i, el) => {
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
        console.log(e.data())
      })
      :
      setAdded([])  
    })
  },[uid])
  const handelQty = (e, el, i) => {
    hamada.map((item) =>
      el.id === item.id ? { ...item, quantity: setQoty(el.quantity) } : item
    );

    console.log(hamada);
    console.log(el.quantity);
    console.log(hamada);
    console.log(totalQuantity);
    console.log("totalQuantity");
  };
  const handeler = () => {
    const obj = {
      type: "showCart",
    };
    dispatch(obj);
  };

  return (
    <div>
      {!show ? (
        <div className="floatty">
        <div className="cart__close">
          <span onClick={handeler}>
            <i class="ri-close-fill"></i>
          </span>
        </div>
          <h3>{totalAmount}</h3>
          {add.map((el, i) => (
           
            <div className="styler-0">
              <div className="styler-1">
                <div className="styler-2">
                  <div className="styler-3">
                    <img
                      alt=""
                      aria-hidden="true"
                      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTAiIGhlaWdodD0iOTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+"
                      className="styler-4"
                    />
                  </div>
                  <img
                    src={el.img}
                    alt="img"
                    className="styler-5"
                  />
                  <noscript className="styler-6"></noscript>
                </div>
                <div className="styler-7">
                  <div className="styler-8">
                    <span className="styler-9">{el.title}</span>
                    <div className="styler-10">
                      <button className="styler-16" onClick={()=>{handeldel(i,el)}}>
                      <svg
                        className="styler-11"
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        data-testid="CloseIcon"
                      >
                        <path
                          d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                          className="styler-12"
                        ></path>
                      </svg>
                      </button>
                      
                    </div>
                  </div>
                  <div className="styler-13">
                    <span className="styler-14">EGP {el.price}</span>
                    <div className="styler-15">
                      <button className="styler-16">
                        <svg
                          className="styler-17"
                          focusable="false"
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          data-testid="RemoveCircleOutlineIcon"
                        >
                          <path
                            d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                            className="styler-18"
                          ></path>
                        </svg>

                      </button>
                      <span className="styler-19">{el.quantity}</span>
                      <button className="styler-20">
                        <svg
                          className="styler-21"
                          focusable="false"
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          data-testid="AddCircleOutlineIcon"
                        >
                          <path
                            d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                            className="styler-22"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  //   <div className="cart__container">
  //   {/* <ListGroup className="cart">
  //     <div className="cart__close">
  //       <span onClick={toggleCart}>
  //         <i class="ri-close-fill"></i>
  //       </span>
  //     </div>

  //     <div className="cart__item-list">
  //       {cartProducts.length === 0 ? (
  //         <h6 className="text-center mt-5">No item added to the cart</h6>
  //       ) : (
  //         cartProducts.map((item, index) => (
  //           <CartItem item={item} key={index} />
  //         ))
  //       )}
  //     </div>

  //     <div className="cart__bottom d-flex align-items-center justify-content-between">
  //       <h6>
  //         Subtotal : <span>${totalAmount}</span>
  //       </h6>
  //       <button>
  //         <Link to="/checkout" onClick={toggleCart}>
  //           Checkout
  //         </Link>
  //       </button>
  //     </div>
  //   </ListGroup> */}
  // </div>
  );
};

export default ProductCart;
        /* <h5 className="text-center">Your cart is empty</h5>*/