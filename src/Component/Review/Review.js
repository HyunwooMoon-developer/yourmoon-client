import React, { Component } from "react";
import ItemContext from "../../Context/ItemContext";
import RatingStar from "../RatingStar/RatingStar";
import { withRouter } from "react-router-dom";
import { format } from "date-fns";
import "./Review.css";
import ReviewApiService from "../../Service/Review-api-service";

class Review extends Component {
  static defaultProps = {
    match: {
      params: {},
    },
    history : {
      push : () => {}
    }
  };

  static contextType = ItemContext;

  handleClickDelete = (review_id) => {
    console.log(review_id)
    const item_id = Number(this.props.match.params.item_id);
    //console.log(item_id)

    ReviewApiService.deleteReview(review_id)
      .then(this.context.deleteReview)
      .then(() => {
        return this.props.history.push(`/item/${item_id}`);
      })
      .catch(this.context.setError);
  };

  render() {
    const { reviews } = this.props;
    //console.log(reviews)
    return (
      <ul className="item-reviews">
        {reviews.map((review) => (
          <li className="item-review" key={review.id}>
            <RatingStar rating={review.rating} />
            <h3>{review.user.full_name}</h3>
            <h4>
              Date : {format(new Date(review.date_created), "MM/dd/yyyy")}
            </h4>
            <p>{review.text}</p>
            <button type="button" onClick={() => this.handleClickDelete(review.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

export default withRouter(Review);
