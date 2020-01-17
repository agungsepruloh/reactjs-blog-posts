import jsonPlaceHolder from "../apis/jsonPlaceHolder";

export const fetchPosts = async () => {
  // Bad approach !!!
  // It's will got an error
  const response = await jsonPlaceHolder.get("/posts");

  return {
    type: "FETCH_POSTS",
    payload: response
  };
};
