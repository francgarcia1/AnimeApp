import React from "react";
import { HeroContainer, Heroimg1, HeroText } from "./HeroElements";

const Hero = () => {
  return (
    <HeroContainer alt="Imagen de fondo">
      <Heroimg1>
        <HeroText>Bienvenidos a la pagina</HeroText>
      </Heroimg1>
    </HeroContainer>
  );
};

export default Hero;
