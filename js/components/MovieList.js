import { LikeChk } from "./LikeChk.js";

export const MovieList = (array) => {
  const movieList = document.querySelector(".movie-list");
  const movieSection = document.querySelector(".movie-results-section");
  if (!movieList || !movieSection) return;

  if (!array) {
    movieSection.innerHTML = `
    <p class="noSearch"><span>검색결과가 없습니다.</span></p>
    `;
    movieList.innerHTML = "";
    return;
  } else {
    movieList.innerHTML = array
      .map(({ Poster, Title, imdbID }) => {
        return `
         <li>
            <a href="./detail.html?id=${imdbID}">
            <img src=${Poster === "N/A" ? "./image/noImage.png" : Poster} alt="${Title}">
            <p class="movie-title">${Title}</p>
            </a>
            <button class="like-chk" data-imdbid="${imdbID}"></button>
         </li>
        `;
      })
      .join("");
  }
  LikeChk();
};
