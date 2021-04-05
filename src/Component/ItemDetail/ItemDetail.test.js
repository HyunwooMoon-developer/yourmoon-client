import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import ItemDetail from "./ItemDetail";

describe.skip(`ItemDetail component`, () => {
  it(`Renders without crashing`, () => {
    const div = document.createElement("div");

    ReactDom.render(
      <BrowserRouter>
        <ItemDetail />
      </BrowserRouter>,
      div
    );
    ReactDom.unmountComponentAtNode(div);
  });
});
