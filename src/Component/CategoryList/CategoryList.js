import React, { Component } from "react";
import { Link } from "react-router-dom";
import ItemContext from "../../Context/ItemContext";
//import CategoryContext from "../../Context/CategoryContext";
//import CategoryApiService from "../../Service/Category-api-service";
import './CategoryList.css'

class CategoryList extends Component {

  static contextType = ItemContext

  render() {
      const {category = []} = this.context;
    return (
      <div className="shopping-nav">
        <nav>
          <ul>
            <li>
              <Link to={"/shop"}>All</Link>
            </li>
            {category.map((list) => (
                <li key={list.id}>
                    <Link to={`/shop/${list.id}`}>
                        {list.category_name}
                    </Link>
                </li>
            ))}
          </ul>
        </nav>
      </div>
    );
  }
}

export default CategoryList;
