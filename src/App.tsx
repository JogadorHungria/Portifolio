import { Header } from "./componets/Header";
import { Main } from "./componets/Main";
import React, { useState } from "react";
import { NavMobile } from "./componets/Header/NavMobile/HeaderMobile";
import { BackDrop } from "./componets/BackDrop";
import { Footer } from "./componets/Footer";

function App() {
  const [menuMobile, setMenuMobile] = useState(false);

  const openCloseMenu = () => {
    setMenuMobile(false);
  };

  return (
    <div className="App">
      <BackDrop />
      <Header
        setMenuMobile={setMenuMobile}
        menuMobile={menuMobile}
      />
      {menuMobile && <NavMobile openCloseMenu={openCloseMenu} />}
      <Main />
      <Footer />
    </div>
  );
}

export default App;
