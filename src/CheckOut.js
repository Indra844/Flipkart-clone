import React from "react";
import { useHistory } from "react-router-dom";
import "./CheckOut.css";
import { useStateValue } from "./StateProvider";
import CheckOutProduct from "./CheckOutProduct";
import SubTotal from "./SubTotal";

function CheckOut() {
  const [{ basket, user }, dispatch] = useStateValue();
  const history = useHistory();

  const placeOrder = () => {
    if (basket.length == 0) {
      window.alert("Add Items first");
    } else {
      history.push("/details");
    }
  };
  return (
    <div className="checkOut">
      <div className="checkOut__page">
        <h2>My cart({basket.length})</h2>
        {basket.length === 0 ? (
          <h3>Your Cart Is Empty</h3>
        ) : (
          basket.map((item) => (
            <CheckOutProduct
              id={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
            />
          ))
        )}
        <button onClick={placeOrder}>Place Order</button>
      </div>

      <SubTotal />
    </div>
  );
}

export default CheckOut;
