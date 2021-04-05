import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import ItemPageRoute from "./ItemPageRoute";

describe(`ItemPageRoute component`, () => {
  it(`Renders without crashing`, () => {
    const div = document.createElement("div");

    ReactDom.render(
      <BrowserRouter>
        <ItemPageRoute />
      </BrowserRouter>,
      div
    );
    ReactDom.unmountComponentAtNode(div);
  });
});
