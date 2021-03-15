/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import sample from "../../Image/sample3.jpg";
import './ShopRoute.css'

class ShopRoute extends Component {
  render() {
    return (
      <div className="shopping-page">
        <div className="shopping-top">
          <h2>All Product</h2>
          <select>
            <option value="null">-</option>
            <option value="best-selling">Best Selling</option>
            <option value="top-rated">Top Rated</option>
            <option value="price-low-to-high">Price: Low to High</option>
            <option value="price-high-to-low">Price: High to Low</option>
          </select>
        </div>
        <div className="shopping-main">
          <div className="shopping-nav">
            <nav>
              <ul>
                <li>
                  <Link to={"/shop"}>All Products</Link>
                </li>
                <li>
                  <Link to={"/shop/:list_id"}>Item 1</Link>
                </li>
                <li>
                  <Link to={"/shop/:list_id"}>Item 2</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="shopping-list">
            <div class="row1">
              <Link to={"/shop/:item_id"}>
                <div className="shopping-item">
                  <img src={sample} />
                  <h4>Item 1</h4>
                  <div className="shopping-rating">
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
                <div className="shopping-item">
                  <img src={sample} />
                  <h4>Item 2</h4>
                  <div className="shopping-rating">
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
                <div className="shopping-item">
                  <img src={sample} />
                  <h4>Item 3</h4>
                  <div className="shopping-rating">
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
            <div className="row2">
              <Link to={"/shop/:item_id"}>
                <div className="shopping-item">
                  <img src={sample} />
                  <h4>Item 4</h4>
                  <div className="shopping-rating">
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
                <div className="shopping-item">
                  <img src={sample} />
                  <h4>Item 5</h4>
                  <div className="shopping-rating">
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
                <div className="shopping-item">
                  <img src={sample} />
                  <h4>Item 6</h4>
                  <div className="shopping-rating">
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
            <div className="row3">
            <Link to={"/shop/:item_id"}>
                <div className="shopping-item">
                    <img src={sample} />
                  <h4>Item 7</h4>
                  <div className="shopping-rating">
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
                <div className="shopping-item">
                    <img src={sample} />
                  <h4>Item 8</h4>
                  <div className="shopping-rating">
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
                <div className="shopping-item">
                    <img src={sample} />
                  <h4>Item 9</h4>
                  <div className="shopping-rating">
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
        </div>
        <div className="page-button">
            <a href={'/shop'}>1</a>
            <a href={'/shop'}>2</a>
            <a href={'/shop'}>3</a>
            <a href={'/shop'}>4</a>
        </div>
      </div>
    );
  }
}

export default ShopRoute;
