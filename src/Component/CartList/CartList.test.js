import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import CartList from "./CartList";

describe(`CartList component`, () => {
  it(`Renders without crashing`, () => {
    const div = document.createElement("div");

    ReactDom.render(
      <BrowserRouter>
        <CartList />
      </BrowserRouter>,
      div
    );
    ReactDom.unmountComponentAtNode(div);
  });
});
