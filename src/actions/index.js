import jsonPlaceHolder from "../apis/jsonPlaceHolder";
import _ from "lodash";

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  // console.log(getState().posts);

  // const userIds = _.uniq(_.map(getState().posts, "userId"));
  // console.log(userIds);
  // userIds.forEach(id => dispatch(fetchUser(id)));

  // Absolutely get the same result (good result)
  _.chain(getState().posts)
    .map("userId")
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    .value();
};

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

export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceHolder.get(`/users/${id}`);

  dispatch({ type: "FETCH_USER", payload: response.data });
};

// export const fetchUser = id => dispatch => _fetchUser(id, dispatch);
// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceHolder.get(`/users/${id}`);

//   dispatch({ type: "FETCH_USER", payload: response.data });
// });

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
