import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    const date = new Date().getFullYear();
    return <div className="footer">All Content {date} &copy; katcha.fun</div>;
  }
}
