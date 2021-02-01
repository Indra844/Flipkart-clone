import React from "react";
import "./SubTotal.css";
import { useStateValue } from "./StateProvider";
import CurrencyFormat from "react-currency-format";
import { basketTotal } from "./reducer";

function SubTotal() {
  const [{ basket }, dispatch] = useStateValue();
  const getTotal = basketTotal(basket);
  return (
    <div className="subTotal">
      <h3>PRICE DETAILS</h3>
      <div className="subTotal__details">
        <CurrencyFormat
          renderText={(value) => (
            <>
              <p>price({basket.length})</p>
              <p>
                <strong>{`${value}`}</strong>
              </p>
            </>
          )}
          decimalScale={2}
          value={getTotal}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"RS "}
        />
      </div>
      <div className="subTotal__details">
        <h2>Total Amount</h2>
        <p>Rs {getTotal}</p>
      </div>
    </div>
  );
}

export default SubTotal;
