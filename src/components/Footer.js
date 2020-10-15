import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    const date = new Date().getFullYear();
    return <div className="footer"> <div className="copy">All Content {date} &copy; katcha.fun</div> <div className="data-policy"> <a href='/privacy'>Policy</a><span> / </span><a href='/terms'>Terms</a></div></div>;
  }
}
