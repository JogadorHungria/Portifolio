import React, { useContext } from "react";
import { CardStyles } from "./CardStyle";
import { IProjetos } from "../../../../interface";
import { GlobalContext } from "../../../../contexts";
import { ButtonOne } from "../../../ButtonTypeOne";

export const Card = ({ projeto }: { projeto: IProjetos }) => {
  const { opemModal, setOpemModal, setCardSelected } =
    useContext(GlobalContext);

  return (
    <CardStyles>
      <img src={projeto.img} alt="Imagem" />
      <div>
        <h2>{projeto.name}</h2>

        <div className="container_buttons">
          {projeto.link != "#" && (
            <ButtonOne
              type="button"
              title={" Abrir descrição detalhada"}
              onClick={() => {
                setOpemModal(!opemModal), setCardSelected(projeto);
              }}
            />
          )}

          {projeto.repositorio != "" && (
            <ButtonOne
              type="a"
              title={"Repositório"}
              link={projeto.repositorio}
            />
          )}
          {projeto.link != "#" && (
            <ButtonOne type="a" title={"Link da página"} link={projeto.link} />
          )}
        </div>
      </div>
    </CardStyles>
  );
};
