/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import "./NewItem.css";
import sample from "../../Image/sample3.jpg";
import { Link } from "react-router-dom";

class NewItem extends Component {
  render() {
    return (
      <div className="new-products">
        <h2>New Item</h2>
        <div className="new-products-list">
          <Link to={"/shop/:item_id"}>
            <div className="new-products-item">
              <img src={sample} />
              <h4>Item 1</h4>
              <div className="new-products-rating">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-half-o"></i>
                <i className="fa fa-star-o"></i>
              </div>
              <p>$ 30.00</p>
            </div>
          </Link>
          <Link to={"/shop/:item_id"}>
            <div className="new-products-item">
              <img src={sample} />
              <h4>Item 2</h4>
              <div className="new-products-rating">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-half-o"></i>
                <i className="fa fa-star-o"></i>
              </div>
              <p>$ 30.00</p>
            </div>
          </Link>
          <Link to={"/shop/:item_id"}>
            <div className="new-products-item">
              <img src={sample} />
              <h4>Item 3</h4>
              <div className="new-products-rating">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-half-o"></i>
                <i className="fa fa-star-o"></i>
              </div>
              <p>$ 30.00</p>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default NewItem;
