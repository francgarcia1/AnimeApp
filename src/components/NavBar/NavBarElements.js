import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavContainer = styled.nav`
  background-color: #121212;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  position: sticky;
`;

export const LinkLogo = styled(Link)`
  font-family: "Prompt", sans-serif;
  margin-left: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: white;
  font-size: 32px;
  cursor: pointer;
  &:hover {
    color: #fd661d;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  text-decoration: none;
  margin-right: 100px;
  align-items: center;
`;

export const NavLink = styled(Link)`
  font-family: "Prompt", sans-serif;
  padding-left: 45px;
  padding-right: 45px;
  text-decoration: none;
  color: white;
  font-size: 25px;
  &:hover {
    color: #fd661d;
  }
`;
