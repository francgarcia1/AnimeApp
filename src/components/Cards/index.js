import React from "react";
import { CardContainer, CardText, CardTitle, CardImg } from "./CardElements";
import LikeAnime from "../LikeAnime";
const Card = ({ title, backgroundImage, isFav, item, episode }) => {
  return (
    <CardContainer>
      <CardTitle>{title}</CardTitle>
      <CardText>Episodios:{episode}</CardText>
      <LikeAnime isFav={isFav} item={item} />
      <CardImg src={backgroundImage} alt="Portada del anime " />
    </CardContainer>
  );
};

export default Card;
