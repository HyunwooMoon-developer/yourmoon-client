/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import AddReview from "../../Component/AddReview/AddReview";
import ItemDetail from "../../Component/ItemDetail/ItemDetail";
import Review from "../../Component/Review/Review";
import ItemContext from "../../Context/ItemContext";
import ItemApiService from "../../Service/Item-api-service";
import "./ItemPageRoute.css";

class ItemPageRoute extends Component {
  static defaultProps = {
    match: {
      params: {},
    },
  };

  static contextType = ItemContext;

  componentDidMount() {
    const {item_id} = this.props.match.params
    ItemApiService.getItem(item_id)
      .then(this.context.setItem)
      .catch(this.context.setError);
    ItemApiService.getItemReviews(item_id)
      .then(this.context.setReviews)
      .catch(this.context.setError);
  }

  componentWillUnmount(){
    this.context.clearItem();
  }

  

  render() {
    const { item, reviews } = this.context;

    return (
      <div className="item-page">
        <ItemDetail item={item} />
        <Review  reviews={reviews}/>
        <AddReview />
      </div>
    );
  }
}

export default ItemPageRoute;
