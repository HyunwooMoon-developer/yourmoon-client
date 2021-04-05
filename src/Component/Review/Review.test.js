import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Review from "./Review";

describe(`Review component`, () => {
  it(`Renders without crashing`, () => {
    const div = document.createElement("div");

    ReactDom.render(
      <BrowserRouter>
        <Review />
      </BrowserRouter>,
      div
    );
    ReactDom.unmountComponentAtNode(div);
  });
});
