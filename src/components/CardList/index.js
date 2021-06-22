import React from "react";
import Card from "../Cards";
import {
  CardListContainer,
  CardListTittle,
  ListContainer,
} from "./CardListElements";

const CardList = ({ list, title, listSize }) => {
  return (
    <CardListContainer>
      <CardListTittle>{title}</CardListTittle>
      <ListContainer>
        {list.slice(0, listSize).map((item) => (
          <Card
            backgroundImage={item.image_url}
            title={item.title}
            episode={item.episodes}
            key={item.mal_id} //Para diferenciar los hijos a mismo nivel
            item={item}
            isFav={item.isFav}
          />
        ))}
      </ListContainer>
    </CardListContainer>
  );
};

export default CardList;
