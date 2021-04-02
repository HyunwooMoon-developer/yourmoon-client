import config from "../config";
import TokenService from "./token-service";

const cartApiService = {
  getCartList() {
    return fetch(`${config.API_ENDPOINT}/cart/user`, {
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  addCartList(item_id, cart_qty) {
    return fetch(`${config.API_ENDPOINT}/cart/user`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        item_id,
        cart_qty,
      }),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  deleteCartList(item_id){
      return fetch(`${config.API_ENDPOINT}/cart` , {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${TokenService.getAuthToken()}`,
        },
        body : JSON.stringify({item_id})
      })
  }
};

export default cartApiService;
