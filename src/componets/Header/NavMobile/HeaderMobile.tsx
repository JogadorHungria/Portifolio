import React from "react";
import { MenuMobileStyle } from "./MenuMobileStyle";

export const NavMobile = ({ openCloseMenu }) => {
  const closeClickDiv = (e: any) => {
    if (e.target.tagName == "DIV") {
      openCloseMenu();
    }
  };

  return (
    <MenuMobileStyle
      onClick={(e) => {
        closeClickDiv(e);
      }}
    >
      <nav id="menu" className="menu animation2">
        <a onClick={() => openCloseMenu()} className="menu" href="#start">
          Início
        </a>

        <a onClick={() => openCloseMenu()} className="menu" href="#aboutMe">
          Sobre mim
        </a>

        <a
          onClick={() => openCloseMenu()}
          className="menu"
          href="#certificates"
        >
          Certificados
        </a>

        <a onClick={() => openCloseMenu()} className="menu" href="#contacts">
          Contatos
        </a>

        <a onClick={() => openCloseMenu()} className="menu" href="#stacks">
          Habilidades
        </a>

        <a onClick={() => openCloseMenu()} className="menu" href="#projects">
          Projetos
        </a>
      </nav>
    </MenuMobileStyle>
  );
};
