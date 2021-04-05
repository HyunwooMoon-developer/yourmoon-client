import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import AddReview from "./AddReview";

describe.skip("AddReview component", () => {
  it(`Renders without crashing`, () => {
    const div = document.createElement("div");
    ReactDom.render(
      <BrowserRouter>
        <AddReview />
      </BrowserRouter>,
      div
    );
    ReactDom.unmountComponentAtNode(div);
  });
});
