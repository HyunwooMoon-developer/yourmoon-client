/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import ItemContext from "../../Context/ItemContext";
import ItemApiService from "../../Service/Item-api-service";
import "./ItemList.css";

class ItemList extends Component {
  static defaultProps = {
    match: { params: {} },
  };

  static contextType = ItemContext;

  render() {
    console.log(this.props)
    const categoryId = this.props.id
    //console.log(categoryId)
    //const categoryId = this.props.category.forEach(cy => Number(cy.id));
    const {item } = this.context;
    //console.log('item', item)
    //console.log('category', category)


    const filteredItem =item.filter((i) => {
      console.log(i.category_id)
      if(!categoryId){
      return item
      }
      
       return i.category_id === categoryId
    })
    //console.log(Object.entries(item));
    //console.log(item[0].category_id)
    //console.log(this.props.match.params)
    
    //console.log("category",categoryId)
    

    /*const filteredList = item.filter((i) => {
     // console.log("category_id",i.category_id)
      if(!categoryList){
        return item
      }
      return i.category_id === categoryList
      //console.log("category_id",i.category_id)
    });*/
    //console.log(item)
    //console.log('filterd' ,filteredList);
    return (
      <>
        {filteredItem.map((i) => (
          <li className="shopping-item" key={i.id}>
            <Link to={`/item/${i.id}`}>
              <img src={i.img} />
              <h4>{i.item_name}</h4>
              <div className="shopping-rating">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-half-o"></i>
                <i className="fa fa-star-o"></i>
              </div>
              <p>$ : {i.price}</p>
            </Link>
          </li>
        ))}
      </>
    );
  }
}

export default ItemList;


