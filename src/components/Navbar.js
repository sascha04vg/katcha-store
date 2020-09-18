import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ButtonContainer } from "./Button";

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-lg navbar-dark bg-peach fixed-top">
        <Link to="/" className="navbar-brand">
          katcha.fun
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/about" className="nav-link">
              About
            </Link>
            <Link to="/" className="nav-link">
              Comics
            </Link>
            <Link to="/" className="nav-link">
              Illustration
            </Link>
            <Link to="/" className="nav-link">
              Postcard Club
            </Link>
            <Link to="/shop" className="nav-link">
              Shop
            </Link>
            <Link to="/" className="nav-link">
              Talk To Me
            </Link>
          </div>
        </div>
        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <span className="mr-2">
              <i className="fas fa-cart-plus"></i>
            </span>
            Cart
          </ButtonContainer>
        </Link>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav``;
