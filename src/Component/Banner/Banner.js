/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Banner.css";

class Banner extends Component {
  render() {
    return (
      <div className="banner">
        <div className="banner-info">
          <h2>About Mall</h2>
          <p>This app is modeled after an e-commerce shopping mall.</p>
          <p>This app sells candles and other products.</p>
          <p>
            Users can search for items and leave the reviews on items through
            this app.
          </p>
          <p>And users can add or delete any item they want in the cart.</p>
          <button className="banner-button">
            <Link to={"/shop"}>Shop Now</Link>
          </button>
        </div>
      </div>
    );
  }
}

export default Banner;
