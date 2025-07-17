// 내가 검색한  키워드 값이 나와야함
import { GetMovieData } from "./GetMovieData.js";

export const MovieSearch = () => {
  const form = document.querySelector("#search");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const selectType = document.querySelector(".select-type select").value;
    const searchName = document.querySelector(".search-div input").value;
    const searchDate = document.querySelector(".date-sch input").value;
    // console.log(selectType);
    // console.log(searchDate);
    // console.log(searchName);
    GetMovieData(searchName, selectType, searchDate);
  });
};
