import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import ItemList from "./ItemList";

describe(`ItemList component`, () => {
  it(`Renders without crashing`, () => {
    const div = document.createElement("div");

    ReactDom.render(
      <BrowserRouter>
        <ItemList />
      </BrowserRouter>,
      div
    );
    ReactDom.unmountComponentAtNode(div);
  });
});
