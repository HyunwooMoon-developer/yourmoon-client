import config from "../config";
import TokenService from "./token-service";

const ReviewApiService = {
  postReview(item_id, text, rating) {
    return fetch(`${config.API_ENDPOINT}/review`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        item_id: item_id,
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
    })
  }
};

export default ReviewApiService;
