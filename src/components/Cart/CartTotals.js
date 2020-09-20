import React from "react";
import { Link } from "react-router-dom";
import PayPalButton from "./PayPalButton";
export default function CartTotals({ value, history }) {
  const {
    cartSubTotal,
    cartPostage,
    cartTotal,
    clearCart,
    cartItemCount,
  } = value;
  console.log(cartItemCount);
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-10 mt-2 ml-sm-5 ml md auto c-l-8 text-capitalize text-right">
            <Link to="/shop">
              <button
                className="btn btn-outline-danger text-uppercase mb-3 px-5"
                type="button"
                onClick={() => clearCart()}
              >
                clear cart
              </button>
            </Link>
            <h5>
              <span>Subtotal: </span>
              <strong>€{cartSubTotal}</strong>
            </h5>
            <h5>
              <span>Postage: </span>
              <strong>€{cartPostage}</strong>
            </h5>
            <h5>
              <span>Total: </span>
              <strong>€{cartTotal}</strong>
            </h5>
            <PayPalButton
              total={cartTotal}
              clearCart={clearCart}
              history={history}
            ></PayPalButton>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
