import React, { Component } from "react";
import UserContext from "../../Context/UserContext";
import AuthApiService from "../../Service/auth-api-service";

class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => {},
  };

  static contextType = UserContext;

  state = {
    error: null,
  };

  firstInput = React.createRef();

  handleSubmit = (ev) => {
    ev.preventDefault();
    const { user_name, password } = ev.target;

    this.setState({
      error: null,
    });

    AuthApiService.postLogin({
      user_name: user_name.value,
      password: password.value,
    })
      .then((res) => {
        user_name.value = "";
        password.value = "";
        this.context.processLogin(res.authToken);
        this.props.onLoginSuccess();
      })
      .catch((res) => {
        this.setState({
          error: res.error,
        });
      });
  };

  componentDidMount(){
      this.firstInput.current.focus();
  }

  render() {
      const {error} = this.state;
    return (<form className="login-form" onSubmit={this.handleSubmit}>
        <div role="alert">{error && <p>{error}</p>}</div>
        <div className="login-form-input">
            <label htmlFor="login-username-input">UserName : </label>
            <input ref={this.firstInput} id="login-username-input" name="user_name" required />    
        </div>
        <div className="login-form-input">
            <label htmlFor="login-password-input">Password : </label>
            <input id="login-password-input" name="password" type="password" required/>
        </div>
        <button type="submit">Login</button>
    </form>);
  }
}

export default LoginForm;
