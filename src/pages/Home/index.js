import React, { useEffect } from "react";
import CardList from "../../components/CardList";
import Hero from "../../components/Hero";
import { HomeContainer } from "./HomeElements";
import { useDispatch, useSelector } from "react-redux";
import {
  ChargedTopAnimes,
  WeekTop,
} from "../../storage/reducers/AnimeReducers";

const Home = () => {
  const data = useSelector((state) => state?.anime?.weektop);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ChargedTopAnimes());
    dispatch(WeekTop());
  }, [dispatch]);

  return (
    <>
      <HomeContainer>
        <Hero />
        {data && (
          <CardList
            title={"Top 5 Animes de la semana "}
            list={data}
            listSize="5"
          />
        )}
      </HomeContainer>
    </>
  );
};

export default Home;
