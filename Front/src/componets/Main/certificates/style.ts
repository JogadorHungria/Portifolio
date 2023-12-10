import styled from "styled-components";

export const StyledCertificate = styled.div`
  margin-top: 100px;
  padding: 50px;
  max-width: 1000px;

  div {
    margin-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 40px;
    min-height: max-content;
  }

  img {
    width: 450px;
    height: 300px;
    max-width: 90%;
    background-color: black;
    transition: 0.3s;

    border-radius: 12px;
  }

  img:hover {
    align-self: center;
    transition: 0.5s;
    transform: scale(1.1);
  }
`;
