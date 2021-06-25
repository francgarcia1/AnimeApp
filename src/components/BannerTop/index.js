import React from "react";
import {
  BannerTopContainer,
  BannerTopTittle,
  BannerTopImg,
  BannerTopSubTittle,
} from "./BannerTopElements";
const BannerTop = ({ title, subTitle }) => {
  return (
    <BannerTopContainer>
      <BannerTopTittle>{title}</BannerTopTittle>
      <BannerTopSubTittle>{subTitle}</BannerTopSubTittle>
      <BannerTopImg />
    </BannerTopContainer>
  );
};

export default BannerTop;
