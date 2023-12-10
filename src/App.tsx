import { Header } from "./componets/Header";
import { Main } from "./componets/Main";
import React, { useState } from "react";
import { NavMobile } from "./componets/Header/NavMobile/HeaderMobile";
import { BackDrop } from "./componets/BackDrop";
import { Footer } from "./componets/Footer";

function App() {
  const [menuHamburguer, setMenuHamburgeur] = useState(false);

  const openCloseMenu = () => {
    setMenuHamburgeur(false);
  };

  return (
    <div className="App">
      <BackDrop />
      <Header
        setMenuHamburguer={setMenuHamburgeur}
        menuHamburguer={menuHamburguer}
      />
      {menuHamburguer && <NavMobile openCloseMenu={openCloseMenu} />}
      <Main />
      <Footer />
    </div>
  );
}

export default App;
