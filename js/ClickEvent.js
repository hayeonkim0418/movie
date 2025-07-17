export const ClickEvent = () => {
  const searchIcon = document.querySelector(".m-search");
  const selctBox = document.querySelector(".sel-div");
  // const likeChk = document.querySelector(".like-chk");

  if (!searchIcon || !selctBox) return;

  searchIcon.addEventListener("click", () => {
    selctBox.classList.toggle("active");
    searchIcon.classList.toggle("active");
  });

  // likeChk.addEventListener("click", () => {
  //   console.log(".");

  //   likeChk.classList.add("active");
  // });
};
