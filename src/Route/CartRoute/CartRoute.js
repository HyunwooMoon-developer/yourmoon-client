/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import "./CartRoute.css";
import CartList from "../../Component/CartList/CartList";
import ItemContext from "../../Context/ItemContext";
import cartApiService from "../../Service/Cart-api-service";

class CartRoute extends Component {
  static contextType = ItemContext;
  componentDidMount() {
    cartApiService
      .getCartList()
      .then(this.context.setCart)
      .catch(this.context.setError);
  }
  render() {
    const { cart } = this.context;
    return (
      <div className="cart-page">
        <CartList cart={cart} />
      </div>
    );
  }
}

export default CartRoute;
