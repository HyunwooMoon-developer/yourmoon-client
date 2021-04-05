import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import ShopRoute from "./ShopRoute";

describe(`ShopRoute component`, () => {
  it(`Renders without crashing`, () => {
    const div = document.createElement("div");

    ReactDom.render(
      <BrowserRouter>
        <ShopRoute />
      </BrowserRouter>,
      div
    );
    ReactDom.unmountComponentAtNode(div);
  });
});
