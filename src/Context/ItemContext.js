import React, { Component } from "react";
import CategoryApiService from "../Service/Category-api-service";
import ItemApiService from "../Service/Item-api-service";

const ItemContext = React.createContext({
  category: [],
  items: [],
  item: [],
  reviews: [],
  error: null,
  setItems: () => {},
  setItem: () => {},
  setCategory: () => {},
  setReviews: () => {},
  addReview: () => {},
  deleteReview: () => {},
  setError: () => {},
  clearError: () => {},
});

export default ItemContext;

export class ItemProvider extends Component {
  state = {
    category: [],
    items: [],
    item: [],
    reviews: [],
    error: null,
  };

  componentDidMount() {
    this.clearError();
    CategoryApiService.getAllCategories()
      .then(this.setCategory)
      .catch(this.setError);
    ItemApiService.getAllItems().then(this.setItems).catch(this.setError);
  }

  setCategory = (category) => {
    this.setState({ category });
  };

  setItem = (item) => {
    this.setState({ item });
  };

  setItems = (items) => {
    this.setState({ items });
  };

  setReviews = (reviews) => {
    this.setState({ reviews });
  };

  addReview = (review) => {
    this.setReviews([...this.state.reviews, review]);
  };

  deleteReview = (review_id) => {
    this.setReviews({
      reviews: this.state.reviews.filter((review) => review.id !== review_id),
    });
  };

  setError = (error) => {
    console.error(error);
    this.setState({ error });
  };
  clearError = () => {
    this.setState({ error: null });
  };

  render() {
    const itemValue = {
      category: this.state.category,
      items: this.state.items,
      item: this.state.item,
      reviews: this.state.reviews,
      error: this.state.error,
      setCategory: this.setCategory,
      setItems: this.setItems,
      setItem: this.setItem,
      setReviews: this.setReviews,
      deleteReview: this.deleteReview,
      addReview: this.addReview,
      setError: this.setError,
      clearError: this.clearError,
    };
    return (
      <ItemContext.Provider value={itemValue}>
        {this.props.children}
      </ItemContext.Provider>
    );
  }
}
