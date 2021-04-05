import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import ItemContext from "../../Context/ItemContext";
import ReviewApiService from "../../Service/Review-api-service";
import "./AddReview.css";

class AddReview extends Component {
  static defaultProps = {
    match: {
      params: {},
    },
    history: {
      push: () => {},
    },
  };

  static contextType = ItemContext;

  handleSubmit = (e) => {
    e.preventDefault();
    const { text, rating } = e.target;

    const { item_id } = this.props.match.params;

    ReviewApiService.postReview(item_id, text.value, parseInt(rating.value))
      .then((review) => this.context.addReview(review))
      .then(() => {
        text.value = "";
      })
      .catch(this.context.setError);
  };

  render() {
    const { user } = this.props;

    return (
      <div className="add-review">
        {user.id ? (
          <form onSubmit={this.handleSubmit} className="add-review-form">
            <div className="add-review">
              <label htmlFor="text" />
              <br />
              <textarea
                className="text-review"
                name="text"
                id="text"
                rows="4"
                placeholder="write a review here..."
                required
              />
              <br />
              <label htmlFor="rating">Rating : </label>
              <select
                name="rating"
                id="rating"
                className="add-review-rating"
                required
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              <br />
              <button type="submit">Add Review</button>
            </div>
          </form>
        ) : (
          <h4>Please login for Add to cart</h4>
        )}
      </div>
    );
  }
}

export default withRouter(AddReview);
