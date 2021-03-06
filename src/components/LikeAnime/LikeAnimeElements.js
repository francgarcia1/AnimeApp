import styled from "styled-components";

export const LikeButtonContainer = styled.div`
  width: 40px;
  height: 40px;
  background-color: white;
  margin-left: 25px;
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 60px;
  &:hover {
    box-shadow: 5px 5px 30px 7px crimson, -5px -5px 30px 7px rgba(0, 0, 0, 0.22);
    background-color: crimson;
  }
  text-align: center;
`;
export const LikeButton = styled.a`
  font-family: "Prompt", sans-serif;
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`;
