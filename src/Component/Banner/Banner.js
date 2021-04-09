/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import banner from '../../Image/yourmoon-banner.jpg';
import "./Banner.css";

class Banner extends Component {
  render() {
    return (
      <div className="banner">
        <div className="banner-info">
            <img src={banner} />
          <button className="banner-button">
            <Link to={"/shop"}>Shop Now</Link>
          </button>
        </div>
      </div>
    );
  }
}

export default Banner;
