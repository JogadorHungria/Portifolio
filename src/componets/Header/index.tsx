import React from "react";
import { HeaderStyle } from "./HeaderStyle";
import { HiMenu } from "react-icons/hi";
import { NavDesktop } from "./NavDesktop";

export const Header = ({ setMenuHamburguer, menuHamburguer }) => {
  const functionOpemMenu = () => {
    setMenuHamburguer(!menuHamburguer);
  };

  return (
    <HeaderStyle>
      <div>
        <HiMenu fontSize={35} onClick={functionOpemMenu} />
        <NavDesktop />
      </div>
    </HeaderStyle>
  );
};
