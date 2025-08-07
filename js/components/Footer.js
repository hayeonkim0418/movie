import { IncludeHTML } from "./IncludeHTML.js";

export const Footer = () => {
  IncludeHTML("./common_html/footer.html", ".footer-container")
    .then(() => {
      console.log("footer");
    })
    .catch((error) => {
      console.error(error);
    });
};
