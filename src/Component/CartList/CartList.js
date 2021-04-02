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

    handleDelete = (item_id) => {
        cartApiService.deleteCartList(item_id)
        .then(this.context.deleteCart(item_id))
        .catch(this.context.setError)
    }


  render() {
    const { cart } = this.props;
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
          {cart.map((c) => (
            <tbody key={c.id}>
              <tr>
                <td>
                  <div className="cart-info">
                    <img src={c.img && c.img[0]} />
                    <div className="cart-info-detail">
                      <p>{c.item_name}</p>
                      <p>Price : {c.price}</p>
                      <button onClick={() => this.handleDelete(c.id)}>Delete</button>
                    </div>
                  </div>
                </td>
                <td>
                  <p>{cart.cart_qty}</p>
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
