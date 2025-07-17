// import { GetMovie } from "./GetMovie.js";
// import { GetMovie } from "./GetMovie.js";
// import { GetMovie2 } from "./GetMovie2.js";
// import { RenderList } from "./RenderList.js";
// import { Search } from "./Search.js";
// import { Search2 } from "./Search2.js";
// GetMovie();
// RenderList();
// Search();
// GetMovie2();
// Search2();

/* --------------------------------------------- */
import { Loading } from "./Loading.js";
import { ClickEvent } from "./ClickEvent.js";
import { GetMovieData } from "./GetMovieData.js";
import { MovieSearch } from "./MovieSearch.js";
import { LINK } from "./LINK.js";
import { ANI } from "./ANI.js";

Loading();
ClickEvent();
GetMovieData();
MovieSearch();
LINK().then(() => {
  ANI();
});
