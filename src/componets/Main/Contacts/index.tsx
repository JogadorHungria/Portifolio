import React from "react";

import {
  BsEnvelopeFill,
  BsFillTelephoneFill,
  BsGithub,
  BsLinkedin,
} from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { Title } from "../../Titles";
import { ContactsStyled } from "./CardContacts";

export const Contacts = () => {
  const iconSize = 50;

  return (
    <ContactsStyled id="contacts">
      <div className="effectScrollMonitoring ">
        <Title text={"Contatos"} />

        <div className="containerIcons animationContinuousBlink">
          <a
            href="https://www.linkedin.com/in/joilson-hungria-934182220/"
            target="_blank"
          >
            {<BsLinkedin color="#0e76a8" fontSize={iconSize} />}
            Linkedin
          </a>

          <a href="https://github.com/JogadorHungria" target="_blank">
            {<BsGithub fontSize={iconSize} />} GitHub
          </a>

          <a href="mailto:joilsonhungrianv@gmail.com" target="_blank">
            {<BsEnvelopeFill fontSize={iconSize} />} E-mail
          </a>

          {/* <a href="tel:+71991301551">
            <BsFillTelephoneFill fontSize={iconSize} /> Celular
          </a> */}

          <a
            href="https://api.whatsapp.com/send?phone=71991301551"
            target="_blank"
          >
            <IoLogoWhatsapp color="green" fontSize={iconSize} /> WhatsApp
          </a>
        </div>
      </div>
    </ContactsStyled>
  );
};
