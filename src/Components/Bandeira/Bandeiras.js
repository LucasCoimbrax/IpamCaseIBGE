import React from "react";

import styled from "styled-components";

import BandeiraAC from '../../Utils/Bandeiras/BandeiraAC.png'
import BandeiraAL from '../../Utils/Bandeiras/BandeiraAL.png'
import BandeiraAM from '../../Utils/Bandeiras/BandeiraAM.png'
import BandeiraAP from '../../Utils/Bandeiras/BandeiraAP.png'
import BandeiraBA from '../../Utils/Bandeiras/BandeiraBA.png'
import BandeiraCE from '../../Utils/Bandeiras/BandeiraCE.png'
import BandeiraDF from '../../Utils/Bandeiras/BandeiraDF.png'
import BandeiraES from '../../Utils/Bandeiras/BandeiraES.png'
import BandeiraGO from '../../Utils/Bandeiras/BandeiraGO.png'
import BandeiraMA from '../../Utils/Bandeiras/BandeiraMA.png'
import BandeiraMG from '../../Utils/Bandeiras/BandeiraMG.png'
import BandeiraMS from '../../Utils/Bandeiras/BandeiraMS.png'
import BandeiraMT from '../../Utils/Bandeiras/BandeiraMT.png'
import BandeiraPA from '../../Utils/Bandeiras/BandeiraPA.png'
import BandeiraPB from '../../Utils/Bandeiras/BandeiraPB.png'
import BandeiraPE from '../../Utils/Bandeiras/BandeiraPE.png'
import BandeiraPI from '../../Utils/Bandeiras/BandeiraPI.png'
import BandeiraPR from '../../Utils/Bandeiras/BandeiraPR.png'
import BandeiraRJ from '../../Utils/Bandeiras/BandeiraRJ.png'
import BandeiraRN from '../../Utils/Bandeiras/BandeiraRN.png'
import BandeiraRO from '../../Utils/Bandeiras/BandeiraRO.png'
import BandeiraRR from '../../Utils/Bandeiras/BandeiraRR.png'
import BandeiraRS from '../../Utils/Bandeiras/BandeiraRS.png'
import BandeiraSC from '../../Utils/Bandeiras/BandeiraSC.png'
import BandeiraSE from '../../Utils/Bandeiras/BandeiraSE.png'
import BandeiraSP from '../../Utils/Bandeiras/BandeiraSP.png'
import BandeiraTO from '../../Utils/Bandeiras/BandeiraTO.png'
import BandeiraBR from '../../Utils/Bandeiras/BandeiraDoBrasil.png'

const ContainerImage = styled.img`
    width: 20%;
    border: 1px solid black;
    border-radius: 10px;
    box-shadow: 1px 1px gray;
`

const Bandeira = (props) => {
    console.log(props.initialState)
  switch (props.initialState) {
    case "AC":
      return <ContainerImage src={BandeiraAC} />;
    case "AL":
      return <ContainerImage src={BandeiraAL} />;
    case "AM":
      return <ContainerImage src={BandeiraAM} />;
    case "AP":
      return <ContainerImage src={BandeiraAP} />;
    case "BA":
      return <ContainerImage src={BandeiraBA} />;
    case "CE":
      return <ContainerImage src={BandeiraCE} />;
    case "DF":
      return <imContainerImageg src={BandeiraDF} />;
    case "ES":
      return <ContainerImage src={BandeiraES} />;
    case "GO":
      return <ContainerImage src={BandeiraGO} />;
    case "MA":
      return <ContainerImage src={BandeiraMA} />;
    case "MG":
      return <ContainerImage src={BandeiraMG} />;
    case "MS":
      return <ContainerImage src={BandeiraMS} />;
    case "MT":
      return <ContainerImage src={BandeiraMT} />;
    case "PA":
      return <ContainerImage src={BandeiraPA} />;
    case "PB":
      return <ContainerImage src={BandeiraPB} />;
    case "PE":
      return <ContainerImage src={BandeiraPE} />;
    case "PI":
      return <ContainerImage src={BandeiraPI} />;
    case "PR":
      return <ContainerImage src={BandeiraPR} />;
    case "RJ":
      return <ContainerImage src={BandeiraRJ} />;
    case "RN":
      return <ContainerImage src={BandeiraRN} />;
    case "RO":
      return <ContainerImage src={BandeiraRO} />;
    case "RR":
      return <ContainerImage src={BandeiraRR} />;
    case "RS":
      return <ContainerImage src={BandeiraRS} />;
    case "SC":
      return <ContainerImage src={BandeiraSC} />;
    case "SE":
      return <ContainerImage src={BandeiraSE} />;
    case "SP":
      return <ContainerImage src={BandeiraSP} />;
    case "TO":
      return <ContainerImage src={BandeiraTO} />;
    default:
      return <ContainerImage src={BandeiraBR} />;
  }
};

export default Bandeira;
