import React from "react";
import {
  BannerTopContainer,
  BannerTopTittle,
  BannerTopImg,
  BannerTopSubTittle,
} from "./BannerTopElements";
const BannerTop = () => {
  return (
    <BannerTopContainer>
      <BannerTopTittle>Top Anime</BannerTopTittle>
      <BannerTopSubTittle>Mejores 20 Animes de la historia</BannerTopSubTittle>
      <BannerTopImg />
    </BannerTopContainer>
  );
};

export default BannerTop;
