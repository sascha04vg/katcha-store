import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";
import { ProductConsumer } from "../context";
import NavItem from "./NavItem";

// export default class Navbar extends Component {
//   render() {

export default function NavBar() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-peach fixed-top">
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
        onClick={() => setNavOpen(!navOpen)}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className={
          navOpen ? "collapse show navbar-collapse" : "collapse navbar-collapse"
        }
      >
        <div className="navbar-nav">
          <Link
            to="/"
            className="nav-link"
            onClick={() => setNavOpen(!navOpen)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="nav-link"
            onClick={() => setNavOpen(!navOpen)}
          >
            About
          </Link>
          <Link
            to="/illustration"
            className="nav-link"
            onClick={() => setNavOpen(!navOpen)}
          >
            Illustration
          </Link>
          <Link
            to="/comics"
            className="nav-link"
            onClick={() => setNavOpen(!navOpen)}
          >
            Comics
          </Link>
          <Link
            to="/postcard"
            className="nav-link"
            onClick={() => setNavOpen(!navOpen)}
          >
            Postcard Club
          </Link>
          <Link
            to="/shop"
            className="nav-link"
            onClick={() => setNavOpen(!navOpen)}
          >
            Shop
          </Link>
        </div>
      </div>
      <ProductConsumer>
        {(value) => {
          const { cart } = value;
          if (cart.length > 0) {
            return (
              <Link to="/cart" className="ml-auto">
                <ButtonContainer>
                  <NavItem value={value} />
                  <span className="mr-2">
                    <i className="fas fa-shopping-cart"></i>
                  </span>
                  Cart
                </ButtonContainer>
              </Link>
            );
          } else {
            return (
              <Link to="/cart" className="ml-auto">
                <ButtonContainer>
                  <span className="mr-2">
                    <i className="fas fa-shopping-cart"></i>
                  </span>
                  Cart
                </ButtonContainer>
              </Link>
            );
          }
        }}
      </ProductConsumer>
    </nav>
  );
}
