import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";
import PropTypes from "prop-types";

export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;

    const shortTitle = title.substring(0, 25);
    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          <ProductConsumer>
            {(value) => (
              <div
                className="img-container"
                onClick={() => {
                  value.handleDetail(id);
                }}
              >
                <Link to="/details">
                  <img
                    src={img}
                    alt="product"
                    className="card-img-top p-2"
                  ></img>
                </Link>
                <button
                  className="cart-btn"
                  disabled={inCart ? true : false}
                  onClick={() => {
                    value.addToCart(id);
                    value.openModal(id);
                  }}
                  value=""
                >
                  {inCart ? (
                    <Link className="cart-link" to="/cart">
                      <p className="text-capitalize mb-0" disabled>
                        In Cart
                      </p>
                    </Link>
                  ) : (
                    <i class="fas fa-shopping-cart"></i>
                  )}
                </button>
              </div>
            )}
          </ProductConsumer>
          <div className="card-footer">
            <p className="align-self-center mb-1 text-uppercase">
              {shortTitle}...
            </p>
            <div className="d-flex justify-content-between">
              <h5 className="mb-0 font-weight-bold">
                <span className="mr-1">€</span>
                {price}
              </h5>
              <span className="postage-badge">Free Postage</span>
            </div>
          </div>
        </div>
      </ProductWrapper>
    );
  }
}

Product.propType = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool,
  }).isRequired,
};

const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 0.5s linear;
  }

  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 0.2s linear;
  }

  &:hover {
    .card {
      border: 0.04rem solid var(--peach);
    }
    .card-footer {
      background: var(--peach);
      color: var(--light);
    }
    .cart-btn {
      transform: translate(0, 0);
    }

    .postage-badge {
      background: var(--light);
      color: var(--peach);
    }
  }

  .img-container {
    position: relative;
    overflow: hidden;
    max-height: 180px;
    text-align: center;
    display: block;
  }
  .card-img-top {
    transition: all 0.2s linear;
  }
  .img-container:hover card-img-top {
    transform: scale(1.2);
  }

  .cart-btn {
    position: absolute;
    top: 0;
    right: 0;
    padding: 0.4rem 0.6rem;
    background: var(--peach);
    border: none;
    color: var(--light);
    font-size: 1.4rem;
    border-radius: 0 0 0 0.5rem;
    transform: translate(100%, -100%);
    transition: all 0.2s linear;
  }

  .cart-link {
    color: var(--light) !important;
  }

  .postage-badge {
    font-size: 11px;
    font-weight: bold;
    min-width: 17px;
    padding-top: 3px;
    padding-bottom: 3px;
    padding-left: 6px;
    padding-right: 6px;
    border-radius: 15px;
    color: inherit;
    display: inline-block;
    word-break: break-word;
    line-height: 1;
    font-size: 13px;
    font-weight: normal;
    padding-top: 6px;
    padding-bottom: 6px;
    padding-left: 9px;
    padding-right: 9px;
    min-width: 25px;
    background: var(--peach);
    color: var(--light);
  }

  .cart-btn:hover {
    color: var(--peach-hover);
    cursor: pointer;
  }
`;
