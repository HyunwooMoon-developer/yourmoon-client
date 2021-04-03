import React, { Component } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../Context/UserContext";
import TokenService from "../../Service/token-service";
import "./Header.css";

class Header extends Component {
  static contextType = UserContext;

  handleLogoutClick = () => {
    this.context.processLogout();
  };

  renderLogoutLink() {
    return (
      <>
      <li>
        <Link to="/login" onClick={this.handleLogoutClick}>
          Logout
        </Link>
      </li>
      <li><h2>{this.context.user.full_name }</h2></li>
      </>
    );
  }

  renderLoginLink() {
    return (
      <>
        <li>
          <Link to={"/login"}>LOGIN</Link>
        </li>
        <li>
          <Link to={"/register"}>REGISTER</Link>
        </li>
      </>
    );
  }

  render() {
    return (
      <header>
        <div className="logo">
          <h1>
            <Link to={"/"}>YOURMOON</Link>
          </h1>
        </div>
        <nav>
          <ul>
            <li>
              <Link to={"/shop"}>SHOP</Link>
            </li>
            {TokenService.hasAuthToken()
              ? this.renderLogoutLink()
              : this.renderLoginLink()}
            <li>
              <Link to={"/cart"}>
                <i className="fa fa-shopping-cart fa-2x"> </i>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
