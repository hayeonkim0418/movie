export const DetailsList = () => {
  const detailList = document.querySelector(".movie-details");

  if (!detailList) return;

  detailList.innerHTML = `
    <li>
        <p>제목 : ${result.Title}</p>
        <p>개봉연도 : ${result.Year}</p>
    </li>
    `;
};
