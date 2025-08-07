import { IncludeHTML } from "./IncludeHTML.js";
import { SearchClickEvent } from "./SearchClickEvent.js";
import { MovieSearch } from "./MovieSearch.js";
import { RenderLikeList } from "./RenderLikeList.js";

export const Header = () => {
  IncludeHTML("./common_html/header.html", ".header-container")
    .then(() => {
      //   console.log("Header loaded");
      MovieSearch();
      SearchClickEvent();
      RenderLikeList();
    })
    .catch((error) => {
      console.error(error);
    });
};
