import React, { forwardRef } from "react";
import "./Checkout.css";
import Subtotal from "../Subtotal/Subtotal";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import { useStateValue } from "../../Context/contextProvider";
import FlipMove from "react-flip-move";

function Checkout() {
  const [{ basket, user }] = useStateValue();
  // console.log(basket);
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <div>
          <h3 className="checkout__user">
            Hello, {user ? user?.email : "Guest"}
          </h3>
          <h2 className="checkout__title"> Your Shopping Basket</h2>
          <FlipMove>
            {basket.length === 0 ? (
              <p className="checkout__empty">Your basket is empty!</p>
            ) : (
              basket.map((item, i) => (
                <CheckoutProduct
                  key={i}
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              ))
            )}
          </FlipMove>
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
