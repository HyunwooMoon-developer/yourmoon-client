/* eslint-disable no-const-assign */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import { Link , withRouter } from "react-router-dom";
import ItemContext from "../../Context/ItemContext";
import RatingStar from "../RatingStar/RatingStar";
import "./ItemList.css";

class ItemList extends Component {
  static defaultProps = {
    match: {
      params: {},
    },
  };


  static contextType = ItemContext;

  render() {
    const category_id = parseInt(this.props.match.params.category_id);
    const { items } = this.context;
    //console.log('items',items);

    const filteredItem = items.filter((i) => {
      //console.log( i.category_id, category_id);
      if (!category_id) {
        return items;
      }

      return i.category_id === category_id;
    });
    return (
      <>
        {filteredItem.map((i) => (
          <li className="shopping-item" key={i.id}>
            <Link to={`/item/${i.id}`}>
              <img src={i.img[0]} />
              <h3>{i.item_name}</h3>
              <RatingStar rating={i.average_review_rating} />
              <p>reviews({i.number_of_reviews})</p>
              <p>$ : {i.price}</p>
            </Link>
          </li>
        ))}
      </>
    );
  }
}

export default withRouter(ItemList);
