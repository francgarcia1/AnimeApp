import styled from "styled-components";

export const CardContainer = styled.section`
  background-color: white;
  width: 220px;
  height: 275px;
  margin-top: 25px;
  margin-bottom:115px;
  border-radius: 10px;
  box-shadow: 5px 5px 30px 7px rgba(0, 0, 0, 0.25),
    -5px -5px 30px 7px rgba(0, 0, 0, 0.22);
  cursor: pointer;
  transition: 0.4s;
  &:hover {
      transform: scale(1.1, 1.1);
      box-shadow: 5px 5px 30px 15px rgba(0, 0, 0, 0.25),
        -5px -5px 30px 15px rgba(0, 0, 0, 0.22);        
    }
  }
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: "Prompt", sans-serif;
  font-weight: bold;
`;
export const CardTitle = styled.div`
  color: black;
  text-align: center;
  text-overflow: ellipsis;
  border-radius: 0px 0px 40px 40px;
  font-family: "Prompt", sans-serif;
  font-weight: bolder;
  font-size: 17px;
  height: 40px;
`;
export const CardImg = styled.img`
  width: inherit;
  height: inherit;
`;
export const CardText = styled.div`
  padding: 10px;
  margin-left: 10px;
  color: black;
  font-family: "Prompt", sans-serif;
  font-size: 15px;
`;
