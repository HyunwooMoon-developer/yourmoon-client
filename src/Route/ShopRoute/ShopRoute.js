/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import CategoryList from "../../Component/CategoryList/CategoryList";
import ItemList from "../../Component/ItemList/ItemList";
import ItemContext from "../../Context/ItemContext";
import "./ShopRoute.css";

class ShopRoute extends Component {

  static contextType = ItemContext;

  render() {
    const {category = []} = this.context;
    return (
      <div className="shopping-page">
        <div className="shopping-top">
          <h2>Let's Shopping!</h2>
        </div>
        <div className="shopping-main">
          <CategoryList />
          <div className="shopping-list">
            <ul>
            <ItemList category={category}/>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default ShopRoute;
