export const SearchClickEvent = () => {
  const searchIcon = document.querySelector(".m-search");
  const selctBox = document.querySelector(".sel-div");

  if (!searchIcon || !selctBox) return;

  searchIcon.addEventListener("click", () => {
    selctBox.classList.toggle("active");
    searchIcon.classList.toggle("active");
  });
};
