import React, { Component } from "react";
import fbLogo from "../img/FBbuttonred.png";
import twitLogo from "../img/twitterbuttonred.png";
import instaLogo from "../img/Instabuttonred.png";

export default class Contact extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container pt-5">
          <div className="row">
            <div className="col-10 mx-auto text-center pt-5">
              <h2>Catch me on social media:</h2>
              <ul className="contact-form">
                <li className="contact-form-li">
                  <a
                    href="https://www.facebook.com/katcha.fun/"
                    role="button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="none"
                      src={fbLogo}
                      style={{ height: "70px" }}
                      alt="fb_logo"
                    />
                  </a>
                </li>
                <li className="contact-form-li">
                  <a
                    href="https://twitter.com/katcha_fun"
                    role="button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="none"
                      src={twitLogo}
                      style={{ height: "70px" }}
                      alt="twit_logo"
                    />
                  </a>
                </li>
                <li className="contact-form-li">
                  <a
                    href="https://www.instagram.com/katcha.fun/"
                    role="button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="none"
                      src={instaLogo}
                      style={{ height: "70px" }}
                      alt="insta_logo"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr className="my-4" />
        </div>
      </React.Fragment>
    );
  }
}
