/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import NotFound from "../../Image/404NotFound.png";
import "./NotFoundPage.css";

class NotFoundPage extends Component {
  render() {
    return (
      <div className="not-found">
        <img src={NotFound} />
      </div>
    );
  }
}

export default NotFoundPage;
