import { ButtonOneStyle, AStyle } from "./ButtonOneStyle";

interface IButtonOne {
  title?: string;
  onClick?: any;
  type?: "a" | "button";
  link?: string;
}

export const ButtonOne = ({ title, onClick, type, link }: IButtonOne) => {
  if (type !== "button") {
    return (
      <AStyle href={link} target="_blank">
        {title}
      </AStyle>
    );
  }

  return <ButtonOneStyle onClick={onClick}>{title}</ButtonOneStyle>;
};
