import axios from "axios";
import config from "../config";
import { POST_TYPES } from "../types";
function fetchPosts() {
  const request = axios.get(
    `${config.REDUXBLOG_API_BASE_URL}/posts?key=${config.REDUXBLOG_API_KEY}`
  );
  return {
    type: POST_TYPES.FETCH_POSTS,
    payload: request,
  };
}

function createPost(values, callback) {
  const request = axios
    .post(
      `${config.REDUXBLOG_API_BASE_URL}/posts?key=${config.REDUXBLOG_API_KEY}`,
      values
    )
    .then(() => callback());

  return {
    type: POST_TYPES.CREATE_POST,
    payload: request,
  };
}

function fetchPost(id) {
  const request = axios.get(`${config.REDUXBLOG_API_BASE_URL}/posts/${id}?key=${config.REDUXBLOG_API_KEY}`);

  return {
    type: POST_TYPES.FETCH_POST
  };

}

export default { fetchPosts, createPost, fetchPost };
