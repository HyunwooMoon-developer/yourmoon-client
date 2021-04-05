import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import CategoryList from "./CategoryList";

describe(`CategoryList component`, () => {
  it(`Renders without crashing`, () => {
    const div = document.createElement("div");

    ReactDom.render(
      <BrowserRouter>
        <CategoryList />
      </BrowserRouter>,
      div
    );
    ReactDom.unmountComponentAtNode(div);
  });
});
