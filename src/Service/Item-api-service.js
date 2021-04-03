import config from "../config";

const ItemApiService = {
  getAllItems(page = 1) {
    return fetch(`${config.API_ENDPOINT}/item/?page=${page}`, {
      headers: {
        "content-type": "application/json",
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  getItem(itemId) {
    return fetch(`${config.API_ENDPOINT}/item/${itemId}`, {
      headers: {
        "content-type": "application/json",
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  getItemReviews(itemId) {
    return fetch(`${config.API_ENDPOINT}/item/${itemId}/reviews`, {
      headers: {
        "content-type": "application/json",
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
};

export default ItemApiService;
