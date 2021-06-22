import React, { useState } from "react";
import { LikeButtonContainer, LikeButton } from "./LikeAnimeElements";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { DeleteAnime, AddAnime } from "../../storage/reducers/AnimeReducers";
import { useSelector, useDispatch } from "react-redux";

const LikeAnime = ({ isFav, item }) => {
  const dispatch = useDispatch();
  const favList = useSelector((state) => state?.anime?.favList);
  function onLike() {
    if (isFav) {
      dispatch(DeleteAnime(item, favList));
    } else {
      dispatch(AddAnime(item, favList));
    }
  }

  return (
    <LikeButtonContainer>
      <LikeButton onClick={onLike}>
        {isFav ? <AiFillHeart /> : <AiOutlineHeart />}
      </LikeButton>
    </LikeButtonContainer>
  );
};

export default LikeAnime;
