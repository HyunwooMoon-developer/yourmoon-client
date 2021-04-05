import React, { Component } from "react";
import RegistrationForm from "../../Component/RegistrationForm/RegistrationForm";
import "./RegistrationPage.css";

class RegistrationPage extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  };

  handleRegistrationSuccess = () => {
    const { history } = this.props;
    history.push("/login");
  };

  render() {
    return (
      <div className="register-page">
        <h2>Sign up</h2>
        <RegistrationForm
          onRegistrationSuccess={this.handleRegistrationSuccess}
        />
      </div>
    );
  }
}

export default RegistrationPage;
