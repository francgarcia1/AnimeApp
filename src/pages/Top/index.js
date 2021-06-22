import React from "react";
import BannerTop from "../../components/BannerTop";
import CardList from "../../components/CardList";
import { useSelector } from "react-redux";
const Top = () => {
  const data = useSelector((state) => state.anime.top);

  return (
    <>
      <BannerTop />
      <CardList list={data} />
    </>
  );
};

export default Top;
