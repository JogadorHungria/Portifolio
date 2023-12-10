import styled from "styled-components";

export const ProjetosStyled = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: max-content;
  max-width: 1200px;
  gap: 30px;
  padding-top: 120px;

  box-sizing: border-box;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
  }

  ul {
    display: flex;
    flex-wrap: wrap;

    gap: 20px;
  }
  @media (min-width: 1051px) {
    ul {
      justify-content: center;
    }
  }

  @media (max-width: 1050px) {
    ul {
      display: flex;
      flex-wrap: nowrap;
      justify-content: baseline;
      align-items: baseline;
      overflow-y: hidden;
      width: 90vw;
      padding-bottom: 20px;
    }
    padding-bottom: 50px;
  }
`;
