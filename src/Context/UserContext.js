import React, { Component } from "react";
import TokenService from "../Service/token-service";

const UserContext = React.createContext({
  user: {},
  error: null,
  setError: () => {},
  clearError: () => {},
  setUser: () => {},
  processLogin: () => {},
  processLogout: () => {},
});

export default UserContext;

export class UserProvider extends Component {
  constructor(props) {
    super(props);
    const state = {
      user: {},
      error: null,
    };

    const jwtPayload = TokenService.parseAuthToken();

    if (jwtPayload)
      state.user = {
        id: jwtPayload.user_id,
        full_name: jwtPayload.full_name,
        user_name: jwtPayload.user_name,
      };

    this.state = state;
  }

  setError = (error) => {
    console.error(error);
    this.setState({
      error,
    });
  };

  clearError = () => {
    this.setState({
      error: null,
    });
  };
  setUser = (user) => {
    this.setState({
      user,
    });
  };

  processLogin = (authToken) => {
    TokenService.saveAuthToken(authToken);
    const jwtPayload = TokenService.parseAuthToken();
    this.setUser({
      id: jwtPayload.user_id,
      full_name: jwtPayload.full_name,
      user_name: jwtPayload.user_name,
    });
  };
  processLogout = () => {
    TokenService.clearAuthToken();
    this.setUser({});
  };

  render() {
    const userValue = {
      user: this.state.user,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setUser: this.setUser,
      processLogin: this.processLogin,
      processLogout: this.processLogout,
    };
    return (
      <UserContext.Provider value={userValue}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
