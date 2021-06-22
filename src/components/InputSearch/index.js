import React, { useState } from "react";
import { SearchBar, SercharBarContainer, SearchButton } from "./SearchElements";
import { SearchedAnimes } from "../../storage/reducers/AnimeReducers";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

const InputSearch = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [searchAnime, setSearchAnime] = useState("");
  function onSearch() {
    if (searchAnime.length < 3) {
      alert("ptm");
      return;
    }
    dispatch(SearchedAnimes(searchAnime));
    history.push("/Busqueda");
  }
  return (
    <SercharBarContainer>
      <SearchBar
        placeholder="Search Animes"
        onChange={(e) => setSearchAnime(e.target.value)}
      />
      <SearchButton onClick={onSearch}>Buscar</SearchButton>
    </SercharBarContainer>
  );
};

export default InputSearch;
