import React, { Component } from "react";
import {withRouter} from 'react-router-dom';
import ItemContext from "../../Context/ItemContext";
import ReviewApiService from "../../Service/Review-api-service";

class AddReview extends Component {
  static defaultProps = {
    match: {
      params : {}
    },
    history: {
      push: () => {},
    },
  };

  static contextType = ItemContext;

  handleSubmit = (e) => {
    e.preventDefault();
    const { text, rating } = e.target;

    const item_id = parseInt(this.props.match.params.item_id);

    ReviewApiService.postReview(item_id, text.value, parseInt(rating.value))
      .then(this.context.addReview)
      .then(() => {
        text.value = "";
      })
      .then(this.props.history.push(`/item/${item_id}`))
      .catch(this.context.setError);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="add-review-rating add-review">
          <label htmlFor="rating">Rating :</label>
          <select name="rating" id="rating" required>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div className="add-review-text add-review">
          <label htmlFor="text">Writing Review : </label>
          <textarea
            name="text"
            id="text"
            cols="25"
            rows="4"
            placeholder="write a review here..."
            required
          />
        </div>
        <button type="submit">Add Review</button>
      </form>
    );
  }
}

export default withRouter(AddReview);
