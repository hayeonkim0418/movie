import { MovieList } from "./MovieList.js";
// import { LikeChk } from "../LikeChk.js";

export const GetMovieData = async (keyword, type = "movie", year = null, page) => {
  try {
    const response = await fetch(`https://www.omdbapi.com/?apikey=1633c414&s=${keyword}&type=${type}&y=${year}&page=${page}`);
    const data = await response.json();
    // console.log(data.Search);

    MovieList(data.Search);
  } catch (error) {
    alert(error);
    // console.log(error);
  }
  // LikeChk();
};
