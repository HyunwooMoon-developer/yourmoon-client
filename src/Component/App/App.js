/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from "react";
import { Route, Switch } from "react-router";
import Header from "../Header/Header";
import Main from "../../Route/MainRoute/Main";
import "./App.css";
import ShopRoute from "../../Route/ShopRoute/ShopRoute";
import ItemPageRoute from "../../Route/ItemPageRoute/ItemPageRoute";
import CartRoute from "../../Route/CartRoute/CartRoute";
import LoginPage from "../../Route/LoginRoute/LoginPage";
import RegistrationPage from "../../Route/RegistrationRoute/RegistrationPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/shop" component={ShopRoute} />
            <Route path="/shop/:category_id" component={ShopRoute} />
            <Route path="/item/:item_id" component={ItemPageRoute} />
            <Route path="/cart" component={CartRoute} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegistrationPage} />
          </Switch>
        </main>
        <footer>
          <br />
          <p>&copy; HyunwooMoon 2021</p>
          <div className="info">
            <div className="info-link">
              <h3>Support</h3>
              <a
                href={"https://github.com/HyunwooMoon-developer"}
                target="_blank"
              >
                <i className="fa fa-github"></i>
              </a>
              <a href={"https://www.linkedin.com/in/hyunwoomoon/"}>
                <i className="fa fa-linkedin-square"></i>
              </a>
              <a href={"mailto:mhw9163@gmail.com"}>
                <i className="fa fa-envelope"></i>
              </a>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
