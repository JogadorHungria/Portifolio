import styled from "styled-components";

export const SobreMinStyle = styled.section`
  display: flex;
  flex-direction: column;
  width: 1000px;
  max-width: 95%;
  align-items: center;
  justify-content: center;
  gap: 30px;
  padding-top: 120px;

  div {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  div > div {
    display: flex;
    flex-direction: column;
    padding: 30px;
    gap: 20px;
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 5px;
    border: 1px solid var(--color-1);
  }

  span {
    color: blueviolet;
  }

  p {
    font-size: 20px;
    text-align: justify;
    line-height: 150%;
    color: var(--color-grey-4);
    text-indent: 10px;
  }

  @media (max-width: 800px) {
    div {
      padding: 30px;
    }

    margin-top: 50px;
  }

  @media (max-width: 400px) {
    div {
      padding: 15px;
    }

    h3 {
      font-size: var(--font-title-2);
    }

    p {
      font-size: 16px;
    }
  }

  @media (max-width: 300px) {
    h3 {
      font-size: var(--font-title-3);
    }
  }
`;
