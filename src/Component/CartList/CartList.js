/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import {withRouter} from 'react-router-dom';
import ItemContext from "../../Context/ItemContext";
import cartApiService from "../../Service/Cart-api-service";

class CartList extends Component {
    static defaultProps={
        match: {
            params : {},
        }
    }

    static contextType = ItemContext;

    handleDelete = (cart_item_id) => {
        cartApiService.deleteCartList(cart_item_id)
        .then(this.context.deleteCart(cart_item_id))
        .catch(this.context.setError)
    }


  render() {
    const { cart} = this.props;
    return (
      <div className="cart-main">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Qty</th>
              <th>Price</th>
            </tr>
          </thead>
          {cart.map((c,index) => (
            <tbody key={index}>
              <tr>
                <td>
                  <div className="cart-info">
                    <img src={c.img && c.img[0]} />
                    <div className="cart-info-detail">
                      <p>{c.item_name}</p>
                      <p>Price : {c.price}</p>
                      <button onClick={() => this.handleDelete(c.cart_item_id)}>Delete</button>
                    </div>
                  </div>
                </td>
                <td>
                  <p>{c.qty}</p>
                </td>
                <td>
                  <p>$ 60.00</p>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    );
  }
}

export default withRouter(CartList);
