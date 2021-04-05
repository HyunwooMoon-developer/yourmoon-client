import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import CartRoute from "./CartRoute";

describe(`CartRoute component`, () => {
  it(`Renders without crashing`, () => {
    const div = document.createElement("div");

    ReactDom.render(
      <BrowserRouter>
        <CartRoute />
      </BrowserRouter>,
      div
    );
    ReactDom.unmountComponentAtNode(div);
  });
});
