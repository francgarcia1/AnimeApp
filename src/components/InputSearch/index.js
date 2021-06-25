import React, { useState } from "react";
import { SearchBar, SercharBarContainer, SearchButton } from "./SearchElements";
import { SearchedAnimes } from "../../storage/reducers/AnimeReducers";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { BiSearchAlt } from "react-icons/bi";

const InputSearch = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [searchAnime, setSearchAnime] = useState("");
  function onSearch() {
    if (searchAnime.length < 3) {
      alert("More than 3 characters");
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
      <SearchButton onClick={onSearch}>
        <BiSearchAlt alt="Icono de busqueda" />
      </SearchButton>
    </SercharBarContainer>
  );
};

export default InputSearch;
