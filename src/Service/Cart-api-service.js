import config from "../config";
import TokenService from "./token-service";

const cartApiService = {
  getCartList() {
    return fetch(`${config.API_ENDPOINT}/user/cart`, {
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  addCartList(item_id, qty, scent, color) {
    return fetch(`${config.API_ENDPOINT}/user/cart`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        item_id: item_id,
        qty: qty,
        scent: scent,
        color: color,
      }),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  deleteCartList(cart_item_id) {
    return fetch(`${config.API_ENDPOINT}/user/cart`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({ cart_item_id }),
    });
  },
};

export default cartApiService;
