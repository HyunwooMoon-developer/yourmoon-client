/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import AddReview from "../../Component/AddReview/AddReview";
import ItemDetail from "../../Component/ItemDetail/ItemDetail";
import Review from "../../Component/Review/Review";
import ItemContext from "../../Context/ItemContext";
import UserContext from "../../Context/UserContext";
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
    const { item_id } = this.props.match.params;
    ItemApiService.getItem(item_id)
      .then(this.context.setItem)
      .catch(this.context.setError);
    ItemApiService.getItemReviews(item_id)
      .then(this.context.setReviews)
      .catch(this.context.setError);
  }

  componentWillUnmount() {
    this.context.clearItem();
  }

  render() {
    const { item, reviews } = this.context;
    return (
      <>
        <UserContext.Consumer>
          {({ user }) => (
            <div className="item-page">
              <div>
                <ItemDetail item={item} user={user} />
              </div>
              <Review reviews={reviews} user={user} />
              <AddReview user={user} />
            </div>
          )}
        </UserContext.Consumer>
      </>
    );
  }
}

export default ItemPageRoute;
