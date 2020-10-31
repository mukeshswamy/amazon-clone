import React from "react";
import "./checkoutproduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, title, image, price, rating, hideButton }) {
  const [{ basket }, dispatch] = useStateValue();
  const removefrombasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img src={image} alt="ck" className="chekoutproduct__image" />
      <div className="checkoutproduct__info">
        <p className="checkoutproduct__title">{title}</p>
        <p className="checkoutproduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutproduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span role="img" key={i}>
                🌟
              </span>
            ))}
        </div>
        {!hideButton && (
          <button onClick={removefrombasket}>Remove From Bucket</button>
        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;
