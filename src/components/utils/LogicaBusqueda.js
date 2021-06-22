import React, { useState, useEffect } from 'react';
import BarraBusqueda from '../Busqueda/BarraBusqueda';
import ResultadoBusqueda from '../Busqueda/ResultadoBusqueda.js'


const LogicaBusqueda = (props) => {
  const [animeList,SetAnimeList] =useState([]);
  const [search,SetSearch] = useState("")
  
  const HandleSearch = e => {
	e.preventDefault();
	FetchAnime(search);
}

const FetchAnime = async (query) => {
	const temp = await fetch(`https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=10`)
		.then(res => res.json());
	console.log(temp.results);
	SetAnimeList(temp.results);
}
  
    return (
      <>
        <BarraBusqueda 
         HandleSearch={HandleSearch}
         search={search}
         SetSearch={SetSearch}
         animeList={animeList}
        />
      </>
  ); 
}


export default LogicaBusqueda;