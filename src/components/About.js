import React, { Component } from "react";
import { Link } from "react-router-dom";
import selfPotrait from "../img/selportrait4.png";
import Title from "./Title";
export default class About extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container pt-5 pb-5">
          <div className="row">
            <div className="col-10 mx-auto text-center pt-5">
              <Title name="About" title="Me"></Title>
              <img
                className="ml-3 float-right d-block "
                style={{
                  width: "40%",
                  zIndex: 1,
                }}
                src={selfPotrait}
                alt="katcha"
              />
              <div className="text-left">
                <p className="lead">
                  Welcome to katcha.fun, the internet home of Kathleen Chagall,
                  a British illustrator in the Black Forest , Germany. Started
                  in 2018, katcha.fun is all about encouraging a love for comics
                  , letter writing and illustration in the very small!
                </p>

                <p className="lead">
                  Previously having created webcomics and illustration work for
                  organisations that work hard to improve children’s lives like
                  Humanists UK and Sex Positive Families, the illustrations I
                  make try and provide a realistic yet colourful view on all
                  things human!
                </p>
                <p className="lead">
                  Take a look around and please get in contact if you’d love to
                  work together!
                </p>
              </div>
              <p className="lead">
                <Link to="/">
                  <button className="btn btn-black btn-lg">Contact Me</button>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
