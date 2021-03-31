import config from "../config";
import jwtDecode from "jwt-decode";

const TokenService = {
  getAuthToken() {
    return window.localStorage.getItem(config.API_ENDPOINT);
  },
  clearAuthToken() {
    window.localStorage.removeItem(config.API_ENDPOINT);
  },
  hasAuthToken() {
    return !!TokenService.getAuthToken();
  },
  makeBasicAuthToken(userName, password) {
    return window.btoa(`${userName}:${password}`);
  },
  saveAuthToken(token) {
    window.localStorage.setItem(config.API_ENDPOINT, token);
  },
  parseJwt(jwt) {
    return jwtDecode(jwt);
  },
  parseAuthToken() {
    const authToken = TokenService.getAuthToken();
    if (authToken) return TokenService.parseJwt(authToken);
    else return undefined;
  },
};

export default TokenService;
