import React, { Component } from "react";
import Images from "../images";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default class IllustrationList extends Component {
  constructor() {
    super();
    this.state = Images.imgData;
  }
  render() {
    return (
      <div className="illustration-gallery">
        <ul className="cropped-images pl-0">
          {this.state.initialData.map(function (item, index) {
            return (
              <li className="li-illustration" key={index}>
                <a href="illustrations/{item.image}" data-lightbox="mygallery">
                  <LazyLoadImage src={item.image} alt="illustrations" />
                </a>
              </li>
            );
          }, this)}
        </ul>
      </div>
    );
  }
}
