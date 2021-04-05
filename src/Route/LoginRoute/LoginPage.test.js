import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import LoginPage from "./LoginPage";

describe(`LoginPage component`, () => {
  it(`Renders without crashing`, () => {
    const div = document.createElement("div");

    ReactDom.render(
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>,
      div
    );
    ReactDom.unmountComponentAtNode(div);
  });
});
