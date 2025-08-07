const getLikeMovies = () => {
  const likedMoviesJSON = localStorage.getItem("likedMovies");
  return likedMoviesJSON ? JSON.parse(likedMoviesJSON) : [];
};

const saveLikeMovies = (moviesArray) => {
  localStorage.setItem("likedMovies", JSON.stringify(moviesArray));
};

export const LikeChk = () => {
  const likeBtns = document.querySelectorAll(".like-chk");

  likeBtns.forEach((btn) => {
    const imdbID = btn.dataset.imdbid;

    // 버튼 초기 상태 설정 (페이지 로드 시 이미 좋아요 되어있는지 확인)
    const likedMovies = getLikeMovies();
    if (likedMovies.includes(imdbID)) {
      btn.classList.add("active");
    }

    btn.addEventListener("click", () => {
      //현재 좋아요 목록 가져오기
      let currentLikeMovies = getLikeMovies();

      if (currentLikeMovies.includes(imdbID)) {
        btn.classList.remove("active");
        currentLikeMovies = currentLikeMovies.filter((id) => id !== imdbID);
        // console.log(`remove - ${imdbID}`);
        alert("좋아요 목록에서 제거되었습니다.");
      } else {
        btn.classList.add("active");
        currentLikeMovies.push(imdbID);
        // console.log(`add - ${imdbID}`);
        alert("좋아요 목록에 추가되었습니다.");
      }
      saveLikeMovies(currentLikeMovies);
    });
  });
};
