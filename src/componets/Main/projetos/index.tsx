import { useState } from "react";
import { projetos } from "../../../mock";
import { Card } from "./CardProjeto";
import { ProjetosStyled } from "./projetosStyled";
import { Title } from "../../Titles";

export const Projetos = () => {
  const [modal, opemModal] = useState(false);

  return (
    <ProjetosStyled id="projects">
      <div className="effectScrollMonitoring">
        <Title text={"Projetos"} />
        <ul>
          {projetos.map((projeto) => (
            <Card key={projeto.id} projeto={projeto} />
          ))}
        </ul>
      </div>
    </ProjetosStyled>
  );
};
