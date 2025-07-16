import { MovieList } from "./MovieList.js";

export const GetMovieData = async (keyword, type = "movie", year = null) => {
  try {
    const response = await fetch(`https://www.omdbapi.com/?apikey=1633c414&s=${keyword}&type=${type}&y=${year}`);
    const data = await response.json();
    console.log(data.Search);

    MovieList(data.Search);
  } catch (error) {
    console.log(error);
  }
};
