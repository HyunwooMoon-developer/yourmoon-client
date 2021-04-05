import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import RegistrationPage from "./RegistrationPage";

describe(`RegistrationPage component`, () => {
  it(`Renders without crashing`, () => {
    const div = document.createElement("div");

    ReactDom.render(
      <BrowserRouter>
        <RegistrationPage />
      </BrowserRouter>,
      div
    );
    ReactDom.unmountComponentAtNode(div);
  });
});
