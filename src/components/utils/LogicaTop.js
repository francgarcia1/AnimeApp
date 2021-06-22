import React from "react";
import { useState, useEffect } from "react";
import Cards from "../Cards";

const LogicaTop = () => {
  const [topAnime, SetTopAnime] = useState([]);

  const GetTopAnime = async () => {
    const temp = await fetch(
      "https://api.jikan.moe/v3/top/anime/1/bypopularity"
    ).then((res) => res.json());
    SetTopAnime(temp.top.slice(0, 5));
  };
  useEffect(() => {
    GetTopAnime();
  }, []);

  return (
    <div>
      <Cards topAnime={topAnime} />
    </div>
  );
};

export default LogicaTop;
