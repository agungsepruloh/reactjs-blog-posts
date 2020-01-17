import jsonPlaceHolder from "../apis/jsonPlaceHolder";
import _ from "lodash";

// Absolutely get the same result (good result)
export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceHolder.get("/posts");

  dispatch({
    type: "FETCH_POSTS",
    payload: response.data
  });
};

// absolutely get the same results
// export const fetchUser = id => dispatch => {
//   _fetchUser(id, dispatch);
// };

export const fetchUser = id => dispatch => _fetchUser(id, dispatch);
const _fetchUser = _.memoize(async (id, dispatch) => {
  const response = await jsonPlaceHolder.get(`/users/${id}`);

  dispatch({ type: "FETCH_USER", payload: response.data });
});

// export const fetchPosts = () => {
// Bad approach !!!
// It's will got an error

// Good after use redux-thunk
//   return async dispatch => {
//     const response = await jsonPlaceHolder.get("/posts");

//     dispatch({
//       type: "FETCH_POSTS",
//       payload: response
//     });
//   };
// };
