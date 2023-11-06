import { Title } from "../../Titles";
import { StyledCertificate } from "./style";

export const Certificates = () => {
  const teste = [
    "src/assets/imagens/certificados/Full-stack.png",
    "src/assets/imagens/certificados/certificate.png",
    "src/assets/imagens/certificados/certificate-back-end.png",
    "src/assets/imagens/certificados/certificado-maratona.png",
  ];

  return (
    <div className="effectScrollMonitoring">
      <StyledCertificate>
        <Title text={"Certificados"} />
        <div>
          {teste.map((image) => (
            <img src={image} alt="imagem" />
          ))}
        </div>
      </StyledCertificate>
    </div>
  );
};
