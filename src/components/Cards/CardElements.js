import styled from "styled-components";

export const CardContainer = styled.section`
  background-color: white;
  width: 220px;
  height: 275px;
  margin-top: 25px;
  margin-bottom:95px;
  border-radius: 20px;
  box-shadow: 5px 5px 30px 7px rgba(0, 0, 0, 0.25),
    -5px -5px 30px 7px rgba(0, 0, 0, 0.22);
  cursor: pointer;
  transition: 0.4s;
  &:hover {
      transform: scale(0.9, 0.9);
      box-shadow: 5px 5px 30px 15px rgba(0, 0, 0, 0.25),
        -5px -5px 30px 15px rgba(0, 0, 0, 0.22);
        
    }
  }
`;
export const CardTitle = styled.div`
  color: black;
  text-align: center;
  border-radius: 0px 0px 40px 40px;
  font-family: "Prompt", sans-serif;
  font-weight: bold;
  font-size: 20px;
  height: 40px;
`;
export const CardImg = styled.img`
  width: inherit;
  height: inherit;
  border-radius: 20px;
`;
export const CardText = styled.div`
  color: black;
  font-family: "Prompt", sans-serif;
  font-size: 15px;
`;
