export const LINK = async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const imdbId = urlParams.get("id");
  // console.log(imdbId);

  try {
    const response = await fetch(`https://www.omdbapi.com/?apikey=1633c414&i=${imdbId}&plot=full`);
    const result = await response.json();
    // console.log(result);
    const detailList = document.querySelector(".movie-details");

    if (!detailList) return;

    detailList.innerHTML = `
    <li>
      <div class="imgDiv">
        <img src=${result.Poster === "N/A" ? "./image/noImage.png" : result.Poster}>
      </div>
      <div class="movie-info">
        <p class="title">${result.Title} </p>
        <div class="basic-info">
          <strong>기본 정보</strong>  
          <span class="type">${result.Type === "N/A" ? "-" : result.Type}</span>
          <p><span>개봉연도</span>${result.Year === "N/A" ? "-" : result.Year}</p>
          <p><span>장르</span>${result.Genre === "N/A" ? "-" : result.Genre}</p>
          <p><span>국가</span>${result.Country === "N/A" ? "-" : result.Country}</p>
          <p><span>상영 시간</span>${result.Runtime === "N/A" ? "-" : result.Runtime}</p>
          <p><span>언어</span>${result.Language === "N/A" ? "-" : result.Language}</p>
        </div>
        <div class="plot">
          <strong>줄거리</strong>
          <p>${result.Plot === "N/A" ? "-" : result.Plot}</p>
        </div>
        <div class="cast">
          <strong>감독/출연</strong>
          <p><span>감독</span>${result.Director === "N/A" ? "-" : result.Director}</p>
          <p><span>출연배우</span>${result.Actors === "N/A" ? "-" : result.Actors}</p>
        </div>
      </div>
    </li>
    `;
  } catch (error) {
    alert(error);
  }
};
