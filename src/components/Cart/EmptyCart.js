import React from "react";
import { ButtonContainer } from "../Button";
import { Link } from "react-router-dom";
export default function EmptyCart() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-10 mx-auto text-center mt-5">
          <h1>Cart Empty</h1>
          <Link to="/shop">
            <ButtonContainer>Got to Shop</ButtonContainer>
          </Link>
        </div>
      </div>
    </div>
  );
}
