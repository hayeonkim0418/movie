export const Loading = () => {
  window.addEventListener("load", () => {
    const spinner = document.querySelector(".loading");
    spinner.style.display = "none";
  });
};
