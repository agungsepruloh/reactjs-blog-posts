import jsonPlaceHolder from "../apis/jsonPlaceHolder";

// Absolutely get the same result (good result)
export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceHolder.get("/posts");

  dispatch({
    type: "FETCH_POSTS",
    payload: response.data
  });
};

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
