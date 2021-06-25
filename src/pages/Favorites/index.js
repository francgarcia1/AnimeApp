import React from "react";
import Cardlist from "../../components/CardList";
import { useSelector } from "react-redux";
import BannerTop from "../../components/BannerTop";

const Favorites = () => {
  const data = useSelector((state) => state.anime.favList);

  return (
    <>
      <BannerTop
        title={"Liked Animes"}
        subTitle={"Your favorites animes in one place"}
      />
      {data && <Cardlist title={""} list={data} listSize={data.lenght} />}
    </>
  );
};

export default Favorites;
