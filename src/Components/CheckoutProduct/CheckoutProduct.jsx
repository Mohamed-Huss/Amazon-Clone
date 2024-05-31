import React, { forwardRef } from "react";
import { useStateValue } from "../.././Context/contextProvider";
import "./CheckoutProduct.css";
import toast from "react-hot-toast";

const CheckoutProduct = forwardRef(
  ({ id, image, title, price, rating, hideButton }, ref) => {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
      dispatch({
        type: "REMOVE_FROM_BASKET",
        id: id,
      });
      toast("Product removed from your basket", {
        icon: "🛒",
        style: {
          borderRadius: "10px",
          background: "#f0c14b",
          color: "#111",
        },
      });
    };

    return (
      <div className="checkoutProduct" ref={ref}>
        <img className="checkoutProduct__image" src={image} alt="" />

        <div className="checkoutProduct__info">
          <p className="checkoutProduct__title">{title}</p>
          <p className="checkoutProduct__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>

          <div className="checkoutProduct__rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p key={i}>⭐</p>
              ))}
          </div>
          {!hideButton && (
            <button onClick={removeFromBasket}>Remove from basket</button>
          )}
        </div>
      </div>
    );
  }
);

export default CheckoutProduct;
