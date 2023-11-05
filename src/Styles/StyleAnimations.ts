import { createGlobalStyle } from "styled-components";

export const StyledAnimations = createGlobalStyle`



  @keyframes continuousBlink {
    0% {
      box-shadow: 0px 0px 6px white;
    }
 
    60% {
      box-shadow: 0px 0px 35px white;
    }

    100% {
      box-shadow: 0px 0px 7px white;
    }
  }

  .animationContinuousBlink {
    animation: continuousBlink 0.9s infinite;
  }

  @keyframes AnimateTopToBottomMenu {
     0% {
      top: -1000px;
      opacity: 0;
    }
    100% {
      top:100px;
      opacity: 1;
    }
  }

  @keyframes AnimateTopToBottomModal {
     0% {
      top: -500px;
      opacity: 0;
    }
    100% {
      top :0px;
      opacity: 1;
    }
  }

  @keyframes effectScroll {
     0% {
      top: 100px;
    }
    100% {
      top: 0px;
      opacity: 1;
    }
  }
`;
