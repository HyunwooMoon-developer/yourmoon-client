import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Component/App/App";
import { BrowserRouter } from "react-router-dom";
import { ItemProvider } from "./Context/ItemContext";
import { UserProvider } from "./Context/UserContext";

ReactDOM.render(
  <BrowserRouter>
    <UserProvider>
      <ItemProvider>
        <App />
      </ItemProvider>
    </UserProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
