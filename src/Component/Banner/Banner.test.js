import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Banner from "./Banner";

describe(`Banner component`, () => {
  it(`Renders without crashing`, () => {
    const div = document.createElement("div");

    ReactDom.render(
      <BrowserRouter>
        <Banner />
      </BrowserRouter>,
      div
    );
    ReactDom.unmountComponentAtNode(div);
  });
});
