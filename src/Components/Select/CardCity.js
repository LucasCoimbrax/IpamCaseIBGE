import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import {
  ContainerGeralCard,
  ContainerTitleDados,
  ContainerDados,
  CardDados,
} from "./Styled";

function CardCity(props) {
  const cityOfStates = useSelector((state) => state.allCitys.data);

  const initialCity = props.initialCity;
  const initialState = props.initialState;

  useEffect(() => {}, [initialState]);

  if (initialCity !== "" && initialState !== "") {
    const cidade =
      cityOfStates && cityOfStates.length
        ? cityOfStates.find((e, i) => {
            if (e.id.toString() === initialCity.toString()) {
              return cityOfStates[i];
            }
          })
        : null;
    console.log(cidade.municipio.microrregiao);

    return (
      <ContainerGeralCard>
        <CardDados>
          <ContainerTitleDados> Microrregião: </ContainerTitleDados>
          <ContainerDados>
            {" "}
            {cidade.municipio.microrregiao.nome}{" "}
          </ContainerDados>
        </CardDados>
        <CardDados>
          <ContainerTitleDados> Mesoregião: </ContainerTitleDados>
          <ContainerDados>
            {" "}
            {cidade.municipio.microrregiao.mesorregiao.nome}{" "}
          </ContainerDados>
        </CardDados>
        <CardDados>
          <ContainerTitleDados> Estado: </ContainerTitleDados>
          <ContainerDados>
            {" "}
            {cidade.municipio.microrregiao.mesorregiao.UF.nome}{" "}
          </ContainerDados>
        </CardDados>
        <CardDados>
          <ContainerTitleDados>Região do municipio:</ContainerTitleDados>
          <ContainerDados>
            {" "}
            {cidade.municipio.microrregiao.mesorregiao.UF.regiao.nome}{" "}
          </ContainerDados>
        </CardDados>
      </ContainerGeralCard>
    );
  }
}

export default CardCity;
