import React from "react";

import styled from "styled-components";

import BandeiraAC from '../../utils/Bandeiras/BandeiraAC.png'
import BandeiraAL from '../../utils/Bandeiras/BandeiraAL.png'
import BandeiraAM from '../../utils/Bandeiras/BandeiraAM.png'
import BandeiraAP from '../../utils/Bandeiras/BandeiraAP.png'
import BandeiraBA from '../../utils/Bandeiras/BandeiraBA.png'
import BandeiraCE from '../../utils/Bandeiras/BandeiraCE.png'
import BandeiraDF from '../../utils/Bandeiras/BandeiraDF.png'
import BandeiraES from '../../utils/Bandeiras/BandeiraES.png'
import BandeiraGO from '../../utils/Bandeiras/BandeiraGO.png'
import BandeiraMA from '../../utils/Bandeiras/BandeiraMA.png'
import BandeiraMG from '../../utils/Bandeiras/BandeiraMG.png'
import BandeiraMS from '../../utils/Bandeiras/BandeiraMS.png'
import BandeiraMT from '../../utils/Bandeiras/BandeiraMT.png'
import BandeiraPA from '../../utils/Bandeiras/BandeiraPA.png'
import BandeiraPB from '../../utils/Bandeiras/BandeiraPB.png'
import BandeiraPE from '../../utils/Bandeiras/BandeiraPE.png'
import BandeiraPI from '../../utils/Bandeiras/BandeiraPI.png'
import BandeiraPR from '../../utils/Bandeiras/BandeiraPR.png'
import BandeiraRJ from '../../utils/Bandeiras/BandeiraRJ.png'
import BandeiraRN from '../../utils/Bandeiras/BandeiraRN.png'
import BandeiraRO from '../../utils/Bandeiras/BandeiraRO.png'
import BandeiraRR from '../../utils/Bandeiras/BandeiraRR.png'
import BandeiraRS from '../../utils/Bandeiras/BandeiraRS.png'
import BandeiraSC from '../../utils/Bandeiras/BandeiraSC.png'
import BandeiraSE from '../../utils/Bandeiras/BandeiraSE.png'
import BandeiraSP from '../../utils/Bandeiras/BandeiraSP.png'
import BandeiraTO from '../../utils/Bandeiras/BandeiraTO.png'
import BandeiraBR from '../../utils/Bandeiras/BandeiraDoBrasil.png'

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
