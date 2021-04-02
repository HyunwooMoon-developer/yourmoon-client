/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import ItemContext from "../../Context/ItemContext";
import { withRouter } from "react-router-dom";
import "./ItemDetail.css";
import cartApiService from "../../Service/Cart-api-service";

class ItemDetail extends Component {
  static defaultProps = {
    match: {
      params: {},
    },
  };

  static contextType = ItemContext;

  state = {
    index: 0,
  };

  handleChangeImage = e => {
    e.preventDefault()
    const number = parseInt(e.target.name);
    this.setState({
      index : number
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { qty } = e.target;
    const { item_id } = this.props.match.params;

    console.log("paramsId", this.props.match.params);
    console.log("cart_qty", qty.value);

    cartApiService
      .addCartList(item_id, parseInt(qty.value))
      .then(this.context.addCart)
      .then(() => {
        qty.value = 1;
      })
      .catch(this.context.setError);
  };

 

  render() {
    const { item } = this.props;
    return (
      <div className="item-main">
        <div className="item-left">
          <div className="item-image-main">
            <img src={item.img && item.img[this.state.index]} />
          </div>
          <div className="item-image-select">
            <button onClick={this.handleChangeImage}>
              <img src={item.img && item.img[0]} name="0"/>
            </button>{" "}
            <button onClick={this.handleChangeImage}>
              <img src={item.img && item.img[1]} name="1"/>
            </button>{" "}
            <button onClick={this.handleChangeImage}>
              <img src={item.img && item.img[2]} name="2"/>
            </button>{" "}
            <button onClick={this.handleChangeImage}>
              <img src={item.img && item.img[3]} name="3"/>
            </button>
          </div>
        </div>
        <div className="item-right">
          <h2>{item.item_name}</h2>
          <h3>{item.price}</h3>
          <form className="select-item" onSubmit={this.handleSubmit}>
            <label htmlFor="select-color">Color : </label>
            <select className="select-color">
              <option value="null">-</option>
              <option value="red">Red</option>
              <option value="White">White</option>
            </select>
            <br />
            <label htmlFor="select-scent">Scent : </label>
            <select className="select-scent">
              <option value="null">-</option>
              <option value="lavendar">Lavendar</option>
              <option value="Mint">Mint</option>
            </select>
            <br />
            <label htmlFor="qty">Qty : </label>
            <select className="select-qty" name="qty" id="qty" required>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            <br />
            <button type="submit">Add to Cart</button>
          </form>
          <h3>Description</h3>
          <p>{item.description}</p>
        </div>
      </div>
    );
  }
}

export default withRouter(ItemDetail);
