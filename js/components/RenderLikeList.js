import { LikeChk } from "./LikeChk.js";

const getLikeMovies = () => {
  const likedMoviesJSON = localStorage.getItem("likedMovies");
  return likedMoviesJSON ? JSON.parse(likedMoviesJSON) : [];
};

export const RenderLikeList = async () => {
  const likeUl = document.querySelector(".like-list");
  const movieLike = document.querySelector(".movie-like-section");

  if (!likeUl || !movieLike) return;

  const likedMovieIDs = getLikeMovies();
  likeUl.innerHTML = "";

  if (likedMovieIDs.length === 0) {
    movieLike.innerHTML = `
    <p class="no-like-txt">아직 찜한 영화가 없습니다</p>
    `;
    return;
  }
  let moviesHtml = [];
  // 각 영화 ID에 대해 OMDB API에서 상세 정보를 가져옵니다.
  for (const imdbID of likedMovieIDs) {
    try {
      const response = await fetch(`https://www.omdbapi.com/?i=${imdbID}&apikey=1633c414`);
      const movieData = await response.json();

      if (movieData.Response === "True") {
        const posterSrc = movieData.Poster === "N/A" ? "./image/noImage.png" : movieData.Poster;
        moviesHtml.push(`
          <li>
            <a href="./detail.html?id=${movieData.imdbID}">
              <img src="${posterSrc}" alt="${movieData.Title}">
              <p class="movie-title">${movieData.Title}</p>
            </a>
            <button class="like-chk active" data-imdbid="${movieData.imdbID}"></button>
          </li>
        `);
      } else {
        console.warn("이 영화는 정보를 불러올 수 없습니다");
      }
    } catch (error) {
      console.error(error);
    }
  }

  likeUl.innerHTML = moviesHtml.join("");

  // 좋아요 목록이 렌더링된 후, 좋아요 버튼에도 이벤트 리스너를 다시 등록합니다.
  LikeChk();
  // LikeChk.js의 함수를 호출하여 이벤트 리스너 다시 등록
  // };
};
