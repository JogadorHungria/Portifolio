import styled from "styled-components";

export const InicioStyled = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 220px;
  font-family: "Carter One", cursive, "Inter", sans-serif;

  img {
    width: 350px;
    max-width: 90%;
    border-radius: 50%;
    margin-left: 100px;
    border-radius: 50%;
    border: 1px solid black;
    box-shadow: 0px 0px 16px white;
    background-color: rgba(9, 9, 9, 0.8);
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: baseline;
    gap: 20px;
    animation: AnimateTeste 5s alternate;

    span {
      font-size: 37px;
      color: rgba(194, 188, 188, 1);
      text-shadow: 0px 0px 8px blueviolet;
    }

    h1 {
      font-size: 60px;
      text-shadow: 0px 0px 10px blue;
    }
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    img {
      margin-top: 100px;
      margin-left: 0;
    }
  }

  @media (max-width: 800px) {
    div {
      display: flex;
      flex-direction: column;
      align-items: baseline;
      gap: 20px;

      span {
        font-size: 30px;
        color: rgba(194, 188, 188, 1);
      }

      h1 {
        font-size: 50px;
      }
    }
  }

  @media (max-width: 400px) {
    div > h1 {
      font-size: 30px;
    }

    div > span {
      font-size: 23px;
    }
  }
`;
