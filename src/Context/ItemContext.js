import React, { Component } from "react";
import CategoryApiService from "../Service/Category-api-service";
import ItemApiService from "../Service/Item-api-service";

const ItemContext = React.createContext({
  category: [],
  item: [],
  error: null,
  setItem: () => {},
  setCategory: () => {},
  setError: () => {},
  clearError: () => {},
});

export default ItemContext;

export class ItemProvider extends Component {
  state = {
    category: [],
    item: [],
    error: null,
  };

  componentDidMount(){
      this.clearError();
      CategoryApiService.getAllCategories()
      .then(this.setCategory)
      .catch(this.setError)
    ItemApiService.getAllItems()
    .then(this.setItem)
    .catch(this.setError)
  }

  setCategory = (category) => {
    this.setState({ category });
  };

  setItem = (item) => {
    this.setState({ item });
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
        category : this.state.category,
      item: this.state.item,
      error: this.state.error,
      setCategory:this.setCategory,
      setItem: this.setItem,
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
