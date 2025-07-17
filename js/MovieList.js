export const MovieList = (array) => {
  const movieList = document.querySelector(".movie-list");
  const movieSection = document.querySelector(".movie-results-section");
  if (!movieList || !movieSection) return;

  if (!array) {
    movieSection.innerHTML = `
    <p class="noSearch"><span>검색결과가 없습니다.</span></p>
    `;
    return;
  } else {
    movieList.innerHTML = array
      .map(({ Poster, Title, imdbID }) => {
        return `
         <li>
          <span class="like-chk"></span>
          <a href="./detail.html?id=${imdbID}" target="_blank">
            <img src=${Poster === "N/A" ? "./image/noImage.png" : Poster}>
            <p class="movie-title">${Title}</p>
          </a>
         </li>
        `;
      })
      .join("");
  }
};
