/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import ItemDetail from "../../Component/ItemDetail/ItemDetail";
import Review from "../../Component/Review/Review";
import ItemContext from "../../Context/ItemContext";
import "./ItemPageRoute.css";

class ItemPageRoute extends Component {
  static contextType = ItemContext;

  

  render() {
    const {item } = this.context;

    return (
      <div className="item-page">
        <ItemDetail item={item}/>
        <Review />
      </div>
    );
  }
}

export default ItemPageRoute;
