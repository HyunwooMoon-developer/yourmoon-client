/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import "./CartRoute.css";
import CartList from "../../Component/CartList/CartList";
import ItemContext from "../../Context/ItemContext";
import cartApiService from "../../Service/Cart-api-service";

class CartRoute extends Component {
  static contextType = ItemContext;
  componentDidMount() {
    cartApiService.getCartList().then(this.context.setCart).catch(this.context.setError);
  }
  render() {
    const { cart} = this.context;
    return (
      <div className="cart-page">
        <CartList cart={cart} />
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
