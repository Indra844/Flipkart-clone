import DoneIcon from "@material-ui/icons/Done";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import React from "react";
import "./SingleProduct.css";
import { useStateValue } from "./StateProvider";

function SingleProduct() {
  const [{ productinfo, basket, user }, dispatch] = useStateValue();

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: productinfo.id,
        image: productinfo.image,
        title: productinfo.title,
        price: productinfo.price,
      },
    });
  };
  return (
    <div className="singleProduct">
      <div className="singleProduct__left">
        <img className="singleProduct__image" src={productinfo.image} alt="" />
        <div className="singleProduct__buttons">
          <div className="product__button" onClick={addToCart}>
            <ShoppingCartIcon />
            <button>ADD TO CART</button>
          </div>
          <div className="product__button">
            <DoneIcon />
            <button>BUY NOW</button>
          </div>
        </div>
      </div>
      <div className="singleProduct__right">
        <h4>{productinfo.title}</h4>
        <p>{productinfo.price}</p>
      </div>
    </div>
  );
}

export default SingleProduct;
