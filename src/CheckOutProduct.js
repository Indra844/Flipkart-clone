import React from "react";
import "./CheckOutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckOutProduct({ id, image, title, price }) {
  const [{ basket }, dispatch] = useStateValue();

  const removefromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkOutProduct">
      <img src={image} />
      <div className="product__info">
        <h3>{title}</h3>
        <p>{price}</p>
        <button onClick={removefromBasket}>Remove from cart</button>
      </div>
    </div>
  );
}

export default CheckOutProduct;
