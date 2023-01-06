import React from "react";
import { ContainerHeader, ContainerImage, ContainerTitle } from "./styled";

import BandeiraDoBrasil from "../../Utils/Bandeiras/BandeiraDoBrasil.png";

const Header = () => {
  return (
    <ContainerHeader>
      <ContainerImage src={BandeiraDoBrasil}></ContainerImage>
      <ContainerTitle> <h1> Dados sobre as regiões do Brasil </h1> </ContainerTitle>
    </ContainerHeader>
  );
};

export default Header;
