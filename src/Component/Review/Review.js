import React, { Component } from "react";
import './Review.css';

class Review extends Component {
  render() {
    return (
      <div className="item-reviews">
        <div className="item-review">
          <h3>user1</h3>
          <h4>Reviewed Date : 03/14/2021</h4>
          <div className="review-rating">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star-half-o"></i>
            <i className="fa fa-star-o"></i>
          </div>
          <p>Very Good!!</p>
        </div>
      </div>
    );
  }
}

export default Review;
