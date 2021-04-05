import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthApiService from "../../Service/auth-api-service";
import "./RegistrationForm.css";

class RegistrationForm extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => {},
  };

  state = { error: null };

  firstInput = React.createRef();

  handleSubmit = (ev) => {
    ev.preventDefault();
    const { full_name, user_name, password } = ev.target;
    AuthApiService.postUser({
      full_name: full_name.value,
      user_name: user_name.value,
      password: password.value,
    })
      .then((user) => {
        full_name.value = "";
        user_name.value = "";
        password.value = "";
        this.props.onRegistrationSuccess();
      })
      .catch((res) => {
        this.setState({
          error: res.error,
        });
      });
  };

  componentDidMount() {
    this.firstInput.current.focus();
  }

  render() {
    const { error } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className="registration-form">
        <div role="alert">{error && <p>{error}</p>}</div>
        <div className="registration-form-input">
          <label htmlFor="registration-name-input">Full Name </label>
          <input
            ref={this.firstInput}
            id="registration-name-input"
            name="full_name"
            required
          />
        </div>
        <div className="registration-form-input">
          <label htmlFor="registration-username-input">User Name </label>
          <input id="registration-username-input" name="user_name" required />
        </div>
        <div className="registration-form-input">
          <label htmlFor="registration-password-input">Password </label>
          <input
            id="registration-password-input"
            name="password"
            type="password"
            required
          />
        </div>
        <button type="submit">Sign Up</button> <br />
        <Link to="/login">Already have an account?</Link>
      </form>
    );
  }
}

export default RegistrationForm;
