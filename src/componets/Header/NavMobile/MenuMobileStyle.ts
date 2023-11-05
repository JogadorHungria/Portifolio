import { animate } from "framer-motion";
import styled from "styled-components";

export const MenuMobileStyle = styled.div`
  display: none;
  height: 100vh;
  width: 100%;
  color: white;
  position: fixed;
  top: 100px;

  z-index: 8;

  @media (max-width: 850px) {
    display: flex;

    nav {
      border-top: 1px solid white;
      position: fixed;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      padding: 20px 0;
      height: max-content;
      background-color: blueviolet;
      gap: 20px;
      animation: AnimateTopToBottomMenu 0.2s;
      z-index: 8;

      a {
        font-size: 20px;
        padding-bottom: 10px;
        border-bottom: 2px solid blueviolet;
        color: var(--color-grey-5);
      }
      a:hover {
        border-bottom: 2px solid white;
      }
    }
  }
`;
