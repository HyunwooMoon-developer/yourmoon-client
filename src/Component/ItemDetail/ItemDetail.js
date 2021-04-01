/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import ItemContext from "../../Context/ItemContext";
import { withRouter } from "react-router-dom";
import "./ItemDetail.css";

class ItemDetail extends Component {
  static contextType = ItemContext;

  render() {
    const { item } = this.props;
    //console.log(item.img)

    return (
      <div className="item-main">
        <div className="item-left">
          <div className="item-image-main">
            <img src={item.img} />
          </div>
          <div className="item-image-select">
            <button>
              <img src={item.img} />
            </button>{" "}
            <button>
              <img src={item.img} />
            </button>{" "}
            <button>
              <img src={item.img} />
            </button>{" "}
            <button>
              <img src={item.img} />
            </button>
          </div>
        </div>
        <div className="item-right">
          <h2>{item.item_name}</h2>
          <h3>{item.price}</h3>
          <form className="select-item">
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
            <label htmlFor="select-qty">Qty : </label>
            <select className="select-qty">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            <br />
            <button>Add to Cart</button>
          </form>
          <h3>Description</h3>
          <p>{item.description}</p>
        </div>
      </div>
    );
  }
}

export default withRouter(ItemDetail);
