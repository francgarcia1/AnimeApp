import React from "react";
import {
  NavContainer,
  LinkLogo,
  LinksContainer,
  NavLink,
} from "./NavBarElements";
import InputSearch from "../InputSearch";

const Navbar = () => {
  return (
    <NavContainer>
      <LinkLogo to="/">Circles</LinkLogo>
      <LinksContainer>
        <NavLink to="/TopAnimes">Top Animes</NavLink>
        <NavLink to="/Favorites">Liked</NavLink>
        <InputSearch />
      </LinksContainer>
    </NavContainer>
  );
};

export default Navbar;
