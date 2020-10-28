import React from "react";
import "./product.css";
import { useStateValue } from "./StateProvider";

function Product({id, title, price, image, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    // Dispatch the item into Data Layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
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
              <span role="img" key={i}>
                🌟
              </span>
            ))}
        </div>
      </div>
      <img src={image} alt="dm" />
      <button onClick={addToBasket}>Add to Bassket</button>
    </div>
  );
}

export default Product;
