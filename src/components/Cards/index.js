import React from "react";
import {
  CardContainer,
  CardText,
  CardTitle,
  CardImg,
  CardInfo,
} from "./CardElements";
import LikeAnime from "../LikeAnime";
const Card = ({ title, backgroundImage, isFav, item, episode }) => {
  return (
    <CardContainer>
      <CardTitle>{title}</CardTitle>
      <CardInfo>
        <CardText>Episodes: {episode}</CardText>
        <LikeAnime isFav={isFav} item={item} />
      </CardInfo>
      <CardImg src={backgroundImage} alt="Portada del anime " />
    </CardContainer>
  );
};

export default Card;
