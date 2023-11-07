import { IconContext } from "react-icons";
import {
  SiCss3,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiStyledcomponents,
  SiTypescript,
  SiReactrouter,
} from "react-icons/si";
import { GlobalContext } from "../../../contexts";
import { ButtonOne } from "../../ButtonTypeOne";
import { ModalStyled } from "./ModalStyle";
import { useContext } from "react";
export const Modal = () => {
  const { setOpemModal, cardSelected } = useContext(GlobalContext);

  const sizeIcon: number = 40;

  return (
    <ModalStyled>
      <div className="container_modal">
        <ButtonOne
          type="button"
          onClick={() => setOpemModal((opemModal) => !opemModal)}
          title="X"
        />
        <h2>{cardSelected.name}</h2>
        <p>{cardSelected.descricao}</p>

        <div className="container__Stack">
          <h2>Stack</h2>

          <ul>
            {cardSelected.stack.find((e) => e == "React") && (
              <li>
                <SiReact fontSize={sizeIcon} />
                <h3>React</h3>
              </li>
            )}

            {cardSelected.stack.find((e) => e == "Javascript") && (
              <li>
                <SiJavascript fontSize={sizeIcon} />
                <h3>Javascript</h3>
              </li>
            )}

            {cardSelected.stack.find((e) => e == "Typescript") && (
              <li>
                <SiTypescript fontSize={sizeIcon} />
                <h3>Typescript</h3>
              </li>
            )}

            {cardSelected.stack.find((e) => e == "HTML") && (
              <li>
                <SiHtml5 fontSize={sizeIcon} />
                <h3>HTML</h3>
              </li>
            )}

            {cardSelected.stack.find((e) => e == "CSS") && (
              <li>
                <SiCss3 fontSize={sizeIcon} />
                <h3>Css 3</h3>
              </li>
            )}

            {cardSelected.stack.find((e) => e == "Styled-Componet") && (
              <li>
                <SiStyledcomponents fontSize={sizeIcon} />
                <h3>Styled-component</h3>
              </li>
            )}

            {cardSelected.stack.find((e) => e == "Github") && (
              <li>
                <SiGithub fontSize={sizeIcon} />
                <h3>Github</h3>
              </li>
            )}

            {cardSelected.stack.find((e) => e == "Node.js") && (
              <li>
                <SiNodedotjs fontSize={sizeIcon} />
                <h3> Node.js</h3>
              </li>
            )}

            {cardSelected.stack.find((e) => e == "PostgreSQL") && (
              <li>
                <SiPostgresql fontSize={sizeIcon} />
                <h3>PostgreSQL</h3>
              </li>
            )}

            {cardSelected.stack.find((e) => e == "react-router-dom") && (
              <li>
                <SiReactrouter fontSize={sizeIcon} />
                <h3>react-router-dom</h3>
              </li>
            )}

            {cardSelected.stack.find((e) => e == "Contex-Api") && (
              <li>Contex-Api</li>
            )}

            {cardSelected.stack.find((e) => e == "React-toastify") && (
              <li>React-toastify</li>
            )}

            {cardSelected.stack.find((e) => e == "express") && <li>express</li>}

            {cardSelected.stack.find((e) => e == "yup") && <li>yup</li>}
          </ul>
        </div>
        <div className="container_links">
          <ButtonOne
            type="a"
            title={"Link da página"}
            link={cardSelected.link}
          />

          {cardSelected.repositorio && (
            <ButtonOne
              type="a"
              title={"Link do repositório"}
              link={cardSelected.repositorio}
            />
          )}
        </div>
      </div>
    </ModalStyled>
  );
};
