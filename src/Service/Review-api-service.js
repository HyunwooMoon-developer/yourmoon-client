import config from "../config";
import TokenService from "./token-service";

const ReviewApiService = {
  postReview(itemId, text, rating) {
    return fetch(`${config.API_ENDPOINT}/review`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        item_id: itemId,
        rating,
        text,
      }),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  deleteReview(review_id) {
    return fetch(`${config.API_ENDPOINT}/review/${review_id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  }
};

export default ReviewApiService;
