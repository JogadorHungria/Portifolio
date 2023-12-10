import React from "react";
import { MainStyleds } from "./MainStyled";
import { Inicio } from "./inicio";
import { Tecnologias } from "./stack";
import { SobreMin } from "./sobreMim";
import { Projetos } from "./projetos";
import { Modal } from "./modal";
import { useContext } from "react";
import { GlobalContext } from "../../contexts";
import { Contacts } from "./Contacts";
import { Certificates } from "./certificates";
export const Main = () => {
  const { opemModal } = useContext(GlobalContext);

  return (
    <MainStyleds>
      {opemModal && <Modal />}
      <Inicio />
      <SobreMin />
      <Certificates />
      <Tecnologias sizeIcon={70} />
      <Projetos />
      <Contacts />
    </MainStyleds>
  );
};
