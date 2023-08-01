import React, { useState, useEffect } from "react";
import "./Cart.css";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { auth } from "../firebase";

export default function Cart({ selectedItems,handleRemoveFromCart }) {
  const [CART, setCART] = useState([]);

  const user = auth?.currentUser?.email

  useEffect(() => {
    setCART(selectedItems);
  }, [selectedItems]);
  // const handleRemoveFromCart = (cartindex) => {
  //   const _CART = CART.filter((item, index) => cartindex !== index);
  //   setCART(_CART);
  // };

  const handleRemoveFromCartLocal = (cartindex) => {
    handleRemoveFromCart(cartindex); // Call the parent's function
  };


  return (
    <div>
      {selectedItems.length === 0 && <div>you have no items yet</div>}
      {CART?.map((item, cartindex) => {
        return (
          <div
            key={cartindex}
            style={{
              padding: "30px",
              display: "flex",
              justifyContent: "space-evenly",
              width: "50%",
            }}
          >
            <div>
              <img src={item.image} width={100} />
            </div>

            <div>
              <div style={{ fontWeight: "500", width: "200px" }}>
                {item.title}
              </div>
              <div style={{ display: "flex" }}>
                <Button
                  onClick={() => {
                    const _CART = CART.map((item, index) => {
                      return cartindex === index
                        ? { ...item, quantity: item.quantity + 1 }
                        : item;
                    });
                    setCART(_CART);
                  }}
                >
                  +
                </Button>
                <h5>{item.quantity}</h5>
                <Button onClick={() => {
                    const _CART = CART.map((item, index) => {
                      return cartindex === index
                        ? { ...item, quantity: item.quantity - 1 }
                        : item;
                    });
                    setCART(_CART);
                  }}>-</Button>
              </div>
              <div>₹{item.price*item.quantity}</div>

              <Button  onClick={() => handleRemoveFromCartLocal(cartindex)}
                style={{
                  backgroundColor: "navy",
                  color: "white",
                  fontSize: "8px",
                }}
              >
                Remove From Cart
              </Button>

              <hr />
            </div>
          </div>
        );
      })}
      <p>
        Total{" ₹"}
        {CART
          .map((item) => item.price * item.quantity)
          .reduce((total, value) => total + value, 0)}
      </p>

      {!user ? <Link to='/login'><Button  style={{margin:"20px",padding:"8px",color:"white",backgroundColor:"orchid"}}>Login to proceed</Button> </Link>
       : <Link to='/checkout'> <Button  style={{margin:"20px",padding:"8px",color:"white",backgroundColor:"orchid"}}>Proceed to Buy</Button> </Link>}
    </div>
  );
}
