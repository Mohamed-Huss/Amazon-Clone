import React from "react";
import "./Product.css";
import { useStateValue } from "../../Context/contextProvider";
import toast from "react-hot-toast";
function Product({ id, title, image, price, rating }) {
  const [, dispatch] = useStateValue();
  // console.log(basket);
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_Basket",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
    toast("Product added to your basket", {
      icon: "🛒",
      style: {
        borderRadius: "10px",
        background: "#f0c14b",
        color: "#111",
      },
    });
  };

  return (
    <div className="product" id={id}>
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
