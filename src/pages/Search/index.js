import React from "react";
import { useSelector } from "react-redux";
import CardList from "../../components/CardList";
import { SearchTitle } from "./SearchElements";
// import PlaceholderLoading from "react-placeholder-loading";

const Search = () => {
  const resultado = useSelector((state) => state?.anime?.searched);
  return resultado ? (
    <>
      <SearchTitle>Resultados</SearchTitle>
      <CardList list={resultado} listSize="20" />
    </>
  ) : null;
  // <PlaceholderLoading shape="circle" width={60} height={60} />
};

export default Search;
