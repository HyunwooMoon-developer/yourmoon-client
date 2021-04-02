import React, { Component } from "react";
import cartApiService from "../Service/Cart-api-service";
import CategoryApiService from "../Service/Category-api-service";
import ItemApiService from "../Service/Item-api-service";

const ItemContext = React.createContext({
  cart: [],
  category: [],
  items: [],
  item: [],
  reviews: [],
  error: null,
  setItems: () => {},
  setItem: () => {},
  clearItem: () => {},
  setCategory: () => {},
  setReviews: () => {},
  addReview: () => {},
  deleteReview: () => {},
  setCart: () => {},
  addCart: () => {},
  deleteCart : () => {},
  setError: () => {},
  clearError: () => {},
});

export default ItemContext;

export class ItemProvider extends Component {
  state = {
    cart: [],
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
    cartApiService.getCartList().then(this.setCart).catch(this.setError);
  }

  setCategory = (category) => {
    this.setState({ category });
  };

  setItem = (item) => {
    this.setState({ item });
  };

  clearItem = () => {
    this.setItem([]);
    this.setReviews([]);
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
    this.setState({
      reviews: this.state.reviews.filter((review) => review.id !== review_id),
    });
  };

  setCart = (cart) => {
    this.setState({
      cart,
    });
  };

  addCart = (item) => {
    this.setCart([...this.state.cart, item]);
  };

  deleteCart = (item_id) => {
    this.setState({
      cart : this.state.cart.filter((item) => item.id !== item_id)
    })
  }
  setError = (error) => {
    console.error(error);
    this.setState({ error });
  };
  clearError = () => {
    this.setState({ error: null });
  };

  render() {
    const itemValue = {
      cart: this.state.cart,
      category: this.state.category,
      items: this.state.items,
      item: this.state.item,
      reviews: this.state.reviews,
      error: this.state.error,
      setCategory: this.setCategory,
      setItems: this.setItems,
      setItem: this.setItem,
      clearItem: this.clearItem,
      setReviews: this.setReviews,
      deleteReview: this.deleteReview,
      addReview: this.addReview,
      setCart: this.setCart,
      addCart: this.addCart,
      deleteCart : this.deleteCart,
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
