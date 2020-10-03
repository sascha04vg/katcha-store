import React, { Component } from "react";
import styled from "styled-components";
import Title from "./Title";
import Ugly from "../img/ugliest.png";
import Haesslich from "../img/haesslich.png";
export default class Comics extends Component {
  render() {
    return (
      <Comic>
        <div className="container pt-5 pb-5">
          <Title name="Digital" title="Downloads"></Title>
          <div className="mx-auto d-flex pt-5 justify-content-between align-items-center">
            <div id="r-opacity" className="comic">
              <div className="front">
                <img className="img-front" src={Ugly} alt="" />
                <div className="front-info">
                  <h3 className="name yellow-text">The Ugliest</h3>
                  <p className="blurb">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ipsa, consequuntur. Lorem ipsum, dolor sit amet consectetur
                    adipisicing elit. Ab repudiandae assumenda tenetur,
                    quibusdam vero aliquam quis aliquid animi doloremque alias
                    quae. Delectus minima veritatis nesciunt, alias praesentium
                    tempora. Ratione, deserunt amet? Facere perspiciatis sit
                    aliquam, consectetur labore quam saepe nisi quae debitis
                    vitae aut veritatis rem voluptatum quia fugiat quos? Est
                    esse amet dolores alias ex eum ipsum ullam repudiandae
                    dicta, reprehenderit ducimus dolore libero modi ratione
                    ipsa, saepe culpa delectus beatae minima nesciunt
                    consequuntur unde aliquid ipsam? Fugiat ut consectetur
                    mollitia? Maiores consequatur blanditiis sequi architecto?
                    Amet rerum cum, natus dicta cumque quos? Recusandae quod
                    porro maiores vel nihil placeat vero atque, commodi, quam
                    eligendi mollitia consequatur, velit non!
                  </p>
                </div>
              </div>
              <div className="back">
                <div className="comic-info yellow-text">
                  <div className="comic-detail">
                    <span>Price</span>€6.00
                  </div>
                  <div className="comic-detail">
                    <span>Language</span>English
                  </div>
                </div>
                <a
                  className="paypal pp-yellow a-brown"
                  href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=924SFCD6EEV66"
                  target="_blank "
                  without
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-paypal fa-lg"></i> Buy Now
                </a>
                <p className="yellow-text">
                  What's <a href="https://www.paypal.com/uk/home/">PayPal?</a>
                </p>
              </div>
              <div className="background brown"></div>
            </div>
            <div id="y-opacity" className="comic">
              <div className="front">
                <img className="img-front" src={Haesslich} alt="" />
                <div className="front-info yellow-text">
                  <h3 className="name brown-text">Das Hässlichste</h3>
                  <p className="blurb">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ipsa, consequuntur. Lorem ipsum, dolor sit amet consectetur
                    adipisicing elit. Ab repudiandae assumenda tenetur,
                    quibusdam vero aliquam quis aliquid animi doloremque alias
                    quae. Delectus minima veritatis nesciunt, alias praesentium
                    tempora. Ratione, deserunt amet? Facere perspiciatis sit
                    aliquam, consectetur labore quam saepe nisi quae debitis
                    vitae aut veritatis rem voluptatum quia fugiat quos? Est
                    esse amet dolores alias ex eum ipsum ullam repudiandae
                    dicta, reprehenderit ducimus dolore libero modi ratione
                    ipsa, saepe culpa delectus beatae minima nesciunt
                    consequuntur unde aliquid ipsam? Fugiat ut consectetur
                    mollitia? Maiores consequatur blanditiis sequi architecto?
                    Amet rerum cum, natus dicta cumque quos? Recusandae quod
                    porro maiores vel nihil placeat vero atque, commodi, quam
                    eligendi mollitia consequatur, velit non!
                  </p>
                </div>
              </div>
              <div className="back">
                <div className="comic-info brown-text">
                  <div className="comic-detail">
                    <span>Preis</span>€6.00
                  </div>
                  <div className="comic-detail">
                    <span>Sprache</span>Deutsch
                  </div>
                </div>
                <a
                  className="paypal pp-brown a-yellow"
                  href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=924SFCD6EEV66"
                  target="_blank"
                  without
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-paypal fa-lg"></i> Jetzt Kaufen
                </a>
                <p className="brown-text">
                  Was ist{" "}
                  <a
                    className="brown-text"
                    href="https://www.paypal.com/de/home/"
                  >
                    PayPal?
                  </a>
                </p>
              </div>
              <div className="background yellow"></div>
            </div>
          </div>
        </div>
      </Comic>
    );
  }
}

const Comic = styled.div`
  :root {
    --transition: transform 250ms cubic-bezier(0, 0.49, 0.35, 1);
  }

  a {
    color: #d49f46;
  }

  a:hover {
    color: #5f2c20 !important;
    text-decoration: underline !important;
  }

  p {
    font-size: 0.8em;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  .pp-img {
    width: 30px;
  }

  .paypal {
    cursor: pointer;
    border: 0;
    font-weight: bold;
    font-size: 1.5rem;
    margin-top: 1.5em;
    padding: 0.5rem 3.5rem;
    font-size: 1.25rem;
    line-height: 1.5;
    border-radius: 0.3rem;
  }

  .pp-brown {
    color: #fff;
    background: #7f3a2b;
    border-color: #5f2c20;
  }

  .pp-brown:hover {
    color: #fff;
    background: #6d3225;
    border-color: #5f2c20;
    transform: 250ms linear;
  }

  .pp-yellow {
    color: #fff;
    background: #d49f46;
    border-color: #af863f;
  }

  .img-front {
    max-width: 300px;
  }

  .body {
    display: grid;
    height: 100%;
    place-items: center;
    margin: 100px 0 100px 0;
  }

  .name,
  .front-info,
  .comic-detail,
  .paypal {
    margin-bottom: 1em;
  }

  .front-info {
    display: grid;
  }

  .comic-info {
    columns: 2;
    column-rule: 1px solid rgba($color: #ffffff, $alpha: 0.3);
    margin: 1em 0;
  }

  .comic-detail {
    font-size: 1rem;
    text-align: center;
  }

  span {
    font-size: 1.5rem;
    display: block;
  }

  .back {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .intro {
    margin: 4rem;
    text-align: center;
  }

  .blurb {
    margin: 1rem;
    text-align: left;
  }

  .front {
    display: grid;
    place-items: center;
    text-align: center;
  }

  @media (min-width: 1000px) {
    p {
      margin: initial;
    }

    .blurb {
      display: none;
    }

    .body {
      min-height: 100vh;
      display: flex;
      justify-content: space-evenly;
      place-items: center;
    }

    .comic {
      position: relative;
      width: 32em;
      cursor: pointer;
    }

    .front-info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: inherit;
    }

    .y-opacity {
      opacity: 0;
      transition: transform 250ms, opacity 150ms linear;
    }

    .r-opacity {
      opacity: 0;
      transition: transform 250ms, opacity 150ms linear;
    }

    .front {
      display: grid;
      align-items: center;
      justify-content: center;
      transition: 250ms;

      .name,
      .price {
        margin: 0.7em;
      }

      .price {
        font-size: 1.5em;
      }
    }

    .img-front {
      max-width: 100%;
    }

    .back {
      opacity: 0;
      position: absolute;
      top: 13em;
      left: 0;
      right: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 1.5em;
      transform: translateY(35%);

      .comic-info {
        columns: 2;
        column-rule: 1px solid rgba($color: #ffffff, $alpha: 0.3);
        margin: 1em 0;
      }

      .comic-detail {
        font-size: 2rem;
        text-align: center;

        span {
          font-size: 1.5rem;
          display: block;
        }
      }
    }

    .background {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      z-index: -1;
      border-radius: 1em;
      opacity: 0;
    }

    .brown-text {
      color: #7f3a2b;
    }

    .yellow-text {
      color: #d49f46;
    }

    .comic:hover {
      background: initial;

      .language-container {
        transform: translate(100%, -60%);
      }

      .front {
        transform: translateY(-35%) scale(0.7);

        .name {
          animation: comicName 250ms forwards;
        }

        .price {
          opacity: 0;
        }

        .front-info {
          display: initial;
        }
      }

      .back {
        opacity: 1;
        transition: transform 250ms, opacity 150ms linear;
        transform: translateY(0);
      }

      .background {
        transition: var(--transition), opacity 100ms linear;
        transform: scale(2.6, 1.2);
        opacity: 1;
      }

      .yellow {
        animation: yellowBackground 250ms forwards;
      }

      .brown {
        animation: brownBackground 250ms forwards;
      }
    }

    @keyframes comicName {
      0% {
        text-align: left;
        opacity: 1;
      }

      20% {
        text-align: left;
        opacity: 0;
      }

      50% {
        text-align: center;
        opacity: 0;
      }

      100% {
        text-align: center;
        opacity: 1;
        transform: scale(1.4);
      }
    }

    @keyframes yellowBackground {
      0% {
        width: 0;
        height: 0;
        right: 450px;
      }

      20% {
        width: 200px;
        height: 150px;
        right: 450px;
      }

      50% {
        width: 500px;
        height: 250px;
        right: 450px;
      }

      100% {
        width: 600px;
        height: 350px;
        right: 450px;
        background-image: url("img/WEBSITEMOLERATBG.png");
        height: 100%;
        width: 100%;
        background-size: 100% 100%;
      }
    }

    @keyframes brownBackground {
      0% {
        width: 0;
        height: 0;
        left: 450px;
      }

      20% {
        width: 200px;
        height: 150px;
        right: 450px;
      }

      50% {
        width: 500px;
        height: 250px;
        left: 450px;
      }

      100% {
        width: 600px;
        height: 350px;
        left: 450px;
        background-image: url("img/WEBSITEMOLERATBGRED.png");
        height: 100%;
        width: 100%;
        background-size: 100% 100%;
      }
    }
  }
`;
