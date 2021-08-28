import axios from "axios";
import config from "../config";
import { POST_TYPES } from "../types";
function fetchPosts() {
  const request = axios.get(
    `${config.REDUXBLOG_API_BASE_URL}posts?key=${config.REDUXBLOG_API_KEY}`
  );
  return {
    type: POST_TYPES.FETCH_POSTS,
    payload: request,
  };
}

export { fetchPosts };
