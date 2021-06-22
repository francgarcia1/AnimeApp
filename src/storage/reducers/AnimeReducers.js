import jikan from "jikanjs";

// types
export const CHARGED_TOP_ANIMES = "anime/anime/CHARGED_TOP_ANIMES";
export const SEARCHED_ANIMES = "anime/anime/SEARCHED_ANIMES";
export const WEEK_TOP_ANIMES = "anime/anime/WEEK_TOP_ANIMES";
export const LIKE_ANIMES = "anime/anime/LIKE_ANIMES";
export const DELETE_ANIMES = "anime/anime/DELETE_ANIMES";
// reducer
export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    case CHARGED_TOP_ANIMES:
      return { ...state, top: action.payload };
    case SEARCHED_ANIMES:
      return { ...state, searched: action.payload };
    case WEEK_TOP_ANIMES:
      return { ...state, weektop: action.payload };
    case LIKE_ANIMES:
      return { ...state, favList: action.payload };
    case DELETE_ANIMES:
      return { ...state, favList: action.payload };
    default:
      return state;
  }
}
// acciones
export function ChargedTopAnimes() {
  return (dispatch, getState) => {
    const favList = getState().anime.favList;
    async function callbak() {
      const data = await jikan.loadTop("anime");
      return dispatch({
        type: CHARGED_TOP_ANIMES,
        payload: validateFav(data.top, favList),
      });
    }
    callbak();
  };
}

export function SearchedAnimes(searched) {
  return (dispatch, getState) => {
    const favList = getState().anime.favList;
    async function callback() {
      const data = await jikan.search("anime", `q=${searched}`);
      return dispatch({
        type: SEARCHED_ANIMES,
        payload: validateFav(data.results, favList),
      });
    }
    callback();
  };
}
export function WeekTop() {
  return (dispatch, getState) => {
    const favList = getState().anime.favList;
    async function callback() {
      const dataweek = await jikan.loadTop("anime", 1, "airing");
      return dispatch({
        type: WEEK_TOP_ANIMES,
        payload: validateFav(dataweek.top, favList),
      });
    }
    callback();
  };
}

export function AddAnime(anime, list = []) {
  return (dispatch, getState) => {
    anime.isFav = true;
    list.push(anime);

    dispatch({
      type: CHARGED_TOP_ANIMES,
      payload: validateFav(getState().anime?.top, list),
    });
    dispatch({
      type: SEARCHED_ANIMES,
      payload: validateFav(getState().anime?.searched, list),
    });
    dispatch({
      type: WEEK_TOP_ANIMES,
      payload: validateFav(getState().anime?.weektop, list),
    });
    return dispatch({ type: LIKE_ANIMES, payload: list });
  };
}

export function DeleteAnime(anime, list = []) {
  return (dispatch, getState) => {
    dispatch({
      type: CHARGED_TOP_ANIMES,
      payload: validateFav(getState().anime?.top, list),
    });
    dispatch({
      type: SEARCHED_ANIMES,
      payload: validateFav(getState().anime?.searched, list),
    });
    dispatch({
      type: WEEK_TOP_ANIMES,
      payload: validateFav(getState().anime?.weektop, list),
    });
    const newfavs = list.filter((item) => item.mal_id !== anime.mal_id);
    return dispatch({ type: DELETE_ANIMES, payload: newfavs });
  };
}

export function validateFav(list = [], favList = []) {
  const favIds = favList.map((item) => item.mal_id);
  const searchResults = list.map((anime) => {
    return { ...anime, isFav: favIds.includes(anime.mal_id) };
  });
  return searchResults;
}
