/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import ItemContext from "../../Context/ItemContext";
import cartApiService from "../../Service/Cart-api-service";
import "./CartList.css";

class CartList extends Component {
  static defaultProps = {
    match: {
      params: {},
    },
  };

  state = {
    tax: 0.0975,
  };

  static contextType = ItemContext;

  handleDelete = (cart_item_id) => {
    cartApiService
      .deleteCartList(cart_item_id)
      .then(this.context.deleteCart(cart_item_id))
      .catch(this.context.setError);
  };

  getCartTotalPrice = (item = []) => {
    let itemToTalPrice = 0;
    let eachItemTotal = 0;
    for (let i = 0; i < item.length; i++) {
      eachItemTotal += item[i].price * item[i].qty;
    }
    itemToTalPrice += eachItemTotal;
    return Number(itemToTalPrice.toFixed(2));
  };

  paymentAlert = () => {
    alert("Payment is under construction!!");
  };

  render() {
    const { cart = [] } = this.props;
    const { tax } = this.state;
    const itemTotalPrice = this.getCartTotalPrice(cart);
    const taxPrice = Number((itemTotalPrice * tax).toFixed(2));
    const finalPrice = Number((itemTotalPrice - taxPrice).toFixed(2));
    return (
      <>
        <div className="cart-main">
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Qty</th>
                <th>Price</th>
              </tr>
            </thead>
            {cart.map((c, index) => {
              const eachItemTotal = c.price * c.qty;

              return (
                <tbody key={index}>
                  <tr>
                    <td>
                      <div className="cart-info">
                        <img src={c.img && c.img[0]} />
                        <div className="cart-info-detail">
                          <p>{c.item_name}</p>
                          <p>Price : $ {c.price}</p>
                          <p>Color : {c.color}</p>
                          <p>Scent : {c.scent}</p>
                          <button
                            onClick={() => this.handleDelete(c.cart_item_id)}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p>{c.qty}</p>
                    </td>
                    <td>
                      <p>$ {eachItemTotal.toFixed(2)}</p>
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
        <div className="payment-main">
          <h3>Order Summary</h3>
          <div className="item-total">
            <p>Item Total : $ {itemTotalPrice}</p>
            <p>Discount : $ 0</p>
          </div>
          <div className="sub-total">
            <p>Subtotal : $ {itemTotalPrice}</p>
            <p>Tax : $ {taxPrice}</p>
          </div>
          <div className="estimate-total">
            <h4>Estimate Total : $ {finalPrice}</h4>
          </div>
          <button type="button" onClick={this.paymentAlert}>Process to Checkout</button>
        </div>
      </>
    );
  }
}

export default withRouter(CartList);
