import React from "react";
import { FooterContainer, FooterSubFill, FooterFill } from "./FooterElements";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterFill>
        Unete a la Comunidad
        <FooterSubFill>Entra a nuestro DC</FooterSubFill>
      </FooterFill>
      <FooterFill>
        Sigueme en Instagram
        <FooterSubFill>
          <FaInstagram />
          Trashman_64
        </FooterSubFill>
      </FooterFill>
      <FooterFill>
        Made by :<FooterSubFill>Francisco Martinez</FooterSubFill>
      </FooterFill>
    </FooterContainer>
  );
};
export default Footer;
