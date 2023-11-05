import styled from "styled-components";

export const ContactsStyled = styled.section`
  > div {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
    gap: 40px;
    padding-top: 120px;
  }

  .containerIcons {
    display: flex;
    gap: 25px;
    background-color: rgba(0, 0, 0, 0.7);
    border: solid 2px blueviolet;
    padding: 8px 14px;
    border-radius: 6px;
    width: max-content;

    a {
      display: block;
      color: rgba(300, 300, 300, 0.9);
      display: flex;
      gap: 10px;
      align-items: center;
      font-size: 18px;
      font-weight: 600;
      padding: 5px;
      transition: 0.2s;
      padding: 10px;
      border: 1px solid transparent;
    }

    a:hover {
      transform: scale(1.1);
      border: 1px solid white;
      background-color: rgba(138, 43, 226, 0.2);
      border-radius: 6px;
    }
  }

  @media (max-width: 710px) {
    .containerIcons {
      flex-direction: column;
    }
  }
`;
