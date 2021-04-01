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
    match : {
        params : {},
    }
}

  static contextType = ItemContext;

  componentDidMount(){
    const item_id = parseInt(this.props.match.params.item_id);
    ItemApiService.getItem(item_id)
    .then(this.context.setItem)
    .catch(this.context.setError)
    ItemApiService.getItemReviews(item_id).then(this.context.setReviews).catch(this.context.setError)
}
  

  render() {
    const {item , reviews} = this.context;

    return (
      <div className="item-page">
        <ItemDetail item={item}/>
        <AddReview item={item}/>
        <Review reviews={reviews}/>
      </div>
    );
  }
}

export default ItemPageRoute;
