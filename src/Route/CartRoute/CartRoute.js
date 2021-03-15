/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import "./CartRoute.css";
import sample from "../../Image/sample3.jpg";

class CartRoute extends Component {
  render() {
    return (
      <div className="cart-page">
        <div className="cart-main">
          <table>
            <tr>
              <th>Product</th>
              <th>Qty</th>
              <th>Price</th>
            </tr>
            <tr>
              <td>
                <div className="cart-info">
                  <img src={sample} />
                  <div className="cart-info-detail">
                    <p>Item 1</p>
                    <p>Price : $ 30.00</p>
                    <button>Delete</button>
                  </div>
                </div>
              </td>
              <td>
                  <p>2</p>
              </td>
              <td>
                  <p>$ 60.00</p>
              </td>
            </tr>
          </table>
        </div>
        <div className="payment-main">
            <h3>Order Summary</h3>
            <div className="item-total">
                <p>Item Total : $ 60.00</p>
                <p>Discount : $ 0.00</p>
            </div>
            <div className="sub-total">
                <p>Subtotal : $ 60.00</p>
                <p>Tax : $ 5.40</p>
            </div>
            <div className="estimate-total">
                <h4>Estimate Total : $ 65.40</h4>
            </div>
            <button>Process to Checkout</button>
        </div>
      </div>
    );
  }
}

export default CartRoute;
