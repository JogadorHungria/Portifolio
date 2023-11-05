import { ReactNode } from "react";

export interface IProjetos {
  id?: number;
  img?: string;
  name?: string;
  stack?: string[];
  linkName?: string;
  link?: string;
  descricao?: string;
  repositorio?: string;
}

export interface iChildren {
  children: ReactNode;
}

export interface IContexGlobal {
  opemModal?: boolean;
  setOpemModal?: React.Dispatch<React.SetStateAction<boolean>>;
  cardSelected: IProjetos | null;
  setCardSelected: React.Dispatch<React.SetStateAction<IProjetos>>;
}

export type TTeste = Boolean;
