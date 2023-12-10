import styled from "styled-components";

export const ButtonOneStyle = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(146, 15, 235, 0.5);
  color: white;
  border: none;
  padding: 5px;
  border-radius: 4px;
  font-size: 16px;
  border: solid 1px rgba(146, 15, 235, 1);
  width: 100%;
  text-align: center;

  :hover {
    background-color: rgba(146, 15, 235, 1);
    border: solid 1px;
  }
`;

export const AStyle = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: rgba(146, 15, 235, 0.5);
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
  margin-top: 5px;
  text-align: center;
  border: solid 1px rgba(146, 15, 235, 1);
  width: max-content;
  text-align: center;

  :hover {
    background-color: rgba(146, 15, 235, 1);
    border: solid 1px;
  }
`;
