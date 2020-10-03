import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const {
            id,

            img,
            info,
            price,
            title,
            inCart,
            size,
          } = value.detailProduct;
          return (
            <div className="container py-5 ">
              {/* title */}
              <div className="row">
                <div className="col-10 mx-auto text-center my-5">
                  <h1>{title}</h1>
                </div>
              </div>
              {/* endTitle */}
              {/* product Info */}
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img src={img} className="img-fluid" alt="zine"></img>
                </div>
                <div className="col-10 mx-auto col-md-6 my-3">
                  <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                    Size: <span className="text-uppercase">{size}</span>
                  </h4>
                  <h4 className="text-capitalize">
                    <strong>
                      price: <span>€</span>
                      {price}
                    </strong>
                  </h4>
                  <p className="text-capitalize font-weight-bold mt-3 mb-2">
                    Details
                  </p>
                  <p className="text-muted lead">{info}</p>
                  {/* buttons */}
                  <div>
                    <Link to="/shop">
                      <ButtonContainer>Back to Products</ButtonContainer>
                    </Link>
                    <ButtonContainer
                      cart
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addToCart(id);
                        value.openModal(id);
                      }}
                    >
                      {inCart ? "in Cart" : "add to Cart"}
                    </ButtonContainer>
                  </div>
                </div>
              </div>
              {/* Product Info End */}
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
