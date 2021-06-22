import styled from "styled-components";
import { Link } from "react-router-dom";

export const SercharBarContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
export const SearchButton = styled.a`
  font-family: "Prompt", sans-serif;
  font-size: 20px;
  color: white;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-weight: bold;
`;

export const SearchBar = styled.input`
  width: 150px;
  height: 50px;
  outline: none;
  border: none;
  background: crimson;
  color: white;
  text-shadow: 0 0 10px crimson;
  border-radius: 25px;
  display: flex;
  font-weight: bolder;
  ::placeholder {
    color: grey;
    text-align: center;
  }
  &:hover {
    box-shadow: 0 0 25px 0 crimson, 0 20px 25px 0 rgba(0, 0, 0, 0.2);
  }
`;
