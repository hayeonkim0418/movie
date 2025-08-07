export const Loading = () => {
  const loading = document.createElement("div");
  const spinner = document.createElement("div");

  loading.className = "loading";
  spinner.className = "spinner";
  document.body.append(loading);
  loading.append(spinner);

  window.addEventListener("load", () => {
    setTimeout(() => {
      loading.remove();
      spinner.remove();
    }, 3000);
  });
};
