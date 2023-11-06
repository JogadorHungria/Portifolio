import styled from "styled-components";

export const StyledCertificate = styled.div`
  margin-top: 100px;

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
    width: 300px;
    height: 250px;
    background-color: black;
    transition: 0.3s;
  }

  img:hover {
    align-self: center;
    transition: 0.5s;
    transform: scale(1.1);
  }
`;
