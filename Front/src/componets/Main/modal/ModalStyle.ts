import styled from "styled-components";

export const ModalStyled = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 12;
  top: 0;

  button {
    position: absolute;
    right: 15px;
    top: 20px;
    padding: 6px 15px;
    font-weight: 800;
    width: max-content;
  }

  h2 {
    font-size: 30px;
    padding-bottom: 10px;
  }

  p {
    text-align: justify;
    line-height: 150%;
  }

  .container_modal {
    position: relative;
    animation: AnimateTopToBottomModal 0.5s;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    gap: 30px;
    padding: 20px;
    box-sizing: border-box;
    margin: 20px;
    max-width: 800px;
    height: max-content;
    background-color: rgba(117, 11, 189, 0.8);

    border-radius: 8px;
  }

  .container__Stack {
    display: flex;
    flex-direction: column;

    gap: 20px;
    text-align: center;

    ul {
      display: flex;
      flex-wrap: wrap;
      gap: 30px;
      justify-content: center;

      li {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 5px;
        height: 70px;
        width: 100px;
        border: solid 1px;
        padding: 10px 10px;
        border-radius: 6px;
        background-color: rgba(0, 0, 0, 0.3);
        align-items: center;
        text-align: center;
      }
    }
  }

  .container_links {
    display: flex;
    gap: 10px;
  }

  @media (max-width: 800px) {
    h2 {
      font-size: 25px;
    }
  }

  @media (max-width: 600px) {
    .container_modal {
      gap: 8px;
      max-width: 90%;
    }

    h2 {
      font-size: 20px;
      align-self: baseline;
    }

    button {
      font-size: 16px;
      padding: 2px 8px;
    }

    p {
      font-size: 14px;
    }

    .container__Stack {
      ul {
        flex-direction: column;
        overflow-y: auto;
        width: 80vw;
        max-height: 150px;
        padding-bottom: 20px;
      }
    }
  }

  @media (max-width: 400px) {
    .container_links {
      flex-direction: column;
      align-items: center;
    }

    a {
      width: 100%;
    }
  }
`;
