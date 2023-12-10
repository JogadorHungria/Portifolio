import styled from "styled-components";

export const TecnologiasStyle = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 800px;
  max-width: 90vw;
  min-height: max-content;
  padding-top: 120px;
  gap: 50px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    max-width: 100%;
    gap: 50px;

    ul {
      width: 1200px;
      max-width: 90%;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      gap: 20px;

      li {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
        text-align: center;
        border: solid 1px blueviolet;
        padding: 10px;
        border-radius: 6px;
        height: 80px;
        width: 80px;
        background-color: black;

        h3 {
          font-weight: 400;
        }
      }
    }
  }
`;
