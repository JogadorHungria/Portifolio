import React, { useState, createContext, useEffect } from "react";
import { IContexGlobal, IProjetos, iChildren } from "../interface";

export const GlobalContext = createContext({} as IContexGlobal);

export const GlobalProvider = ({ children }: iChildren) => {
  const [opemModal, setOpemModal] = useState(false);
  const [cardSelected, setCardSelected] = useState<IProjetos>(null);

  const options = {
    rootMargin: "10px",
    threshold: 1,
  };

  const observe = new IntersectionObserver((entries) => {
    entries.map((element) => {
      if (element.intersectionRatio > 0) {
        element.target.classList.add("effectScroll");
      } else if (element.intersectionRatio == 0) {
        element.target.classList.remove("effectScroll");
      }
    });
    options;
  });

  useEffect(() => {
    Array.from(document.querySelectorAll(".effectScrollMonitoring")).map(
      (element) => observe.observe(element)
    );
  }, []);

  return (
    <GlobalContext.Provider
      value={{ opemModal, setOpemModal, cardSelected, setCardSelected }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
