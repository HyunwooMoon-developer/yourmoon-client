import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="logo">
          <h1>
            <Link to={'/'}>YOURMOON</Link>
          </h1>
        </div>
        <nav>
          <ul>
            <li>
              <Link to={'/shop'}>SHOP</Link>
            </li>
            <li>
              <Link to={'/login'}>LOGIN</Link>
            </li>
            <li>
              <Link to={'/register'}>REGISTER</Link>
            </li>
            <li>
              <Link to={'/cart'}><i className="fa fa-shopping-cart fa-2x"> </i></Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
