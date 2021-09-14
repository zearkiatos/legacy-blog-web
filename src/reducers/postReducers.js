import { mapKeys } from "lodash";
import { POST_TYPES } from "../types";

const postReducers = (state = {}, action) => {
  switch (action.type) {
    case POST_TYPES.FETCH_POSTS:
      return mapKeys(action.payload.data, "id");
    case POST_TYPES.FETCH_POST:
      return {...state, [action.payload.data.id]: action.payload.data};
    default:
      return state;
  }
};

export default postReducers;
