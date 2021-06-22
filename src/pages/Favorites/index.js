import React from "react";
import Cardlist from "../../components/CardList";
import { useSelector } from "react-redux";

const Favorites = () => {
  const data = useSelector((state) => state.anime.favList);

  return (
    <>
      {data && (
        <Cardlist title={"Liked Animes"} list={data} listSize={data.lenght} />
      )}
    </>
  );
};

export default Favorites;
