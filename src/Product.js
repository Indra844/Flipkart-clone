import React from "react";
import "./Product.css";
import { useHistory } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Product({ id, image, title, price, offer }) {
  const [{ productinfo }, dispatch] = useStateValue();
  const history = useHistory();

  const handleClick = () => {
    dispatch({
      type: "ADD_TO_PRODUCTINFO",
      info: {
        id: id,
        image: image,
        title: title,
        price: price,
        offer: offer,
      },
    });
    history.push("/productinfo");
  };
  return (
    <div className="product">
      <div className="product__container" onClick={handleClick}>
        <img className="product__image" src={image} alt="" />
        <p className="product__title">{title}</p>
        <p>{offer}</p>
        <p>{price}</p>
      </div>
    </div>
  );
}

export default Product;
