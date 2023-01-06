import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getAllStates } from "../../Store/fetchActions/fetchState";
import { getAllCitys } from "../../Store/fetchActions/fetchCitys";

import CardCity from "./CardCity";

import Bandeira from '../Bandeira/Bandeiras'
import tamandua from '../../utils/Tamandua/TamanduaBandeira.png'

import {
  ContainerGeral,
  ContainerTitleSelect,
  ContainerSelect,
  ContainerSelectState,
  Selected,
  ContainerTamandua,
} from "./Styled";

function SelectState() {
  const stateOfCountrys = useSelector((state) => state.allStates.data);
  const cityOfStates = useSelector((state) => state.allCitys.data);
  const dispatch = useDispatch();

  const [initialState, setInitialState] = useState("");
  const [initialCity, setInitialCity] = useState("");

  useEffect(() => {
    dispatch(getAllStates());
  }, []);

  const OptionState =
    stateOfCountrys && stateOfCountrys.length
      ? stateOfCountrys.map((e) => {
          return (
            <option key={e.id} value={e.sigla}>
              {e.nome}
            </option>
          );
        })
      : null;

  const handleChangeState = (event) => {
    setInitialState(event.target.value);
    setInitialCity("");
  };

  useEffect(() => {
    dispatch(getAllCitys(initialState));
  }, [initialState]);

  const OptionCity =
    cityOfStates && cityOfStates.length
      ? cityOfStates.map((e) => {
          return (
            <option key={e.id} value={e.id}>
              {e.nome}
            </option>
          );
        })
      : null;

  const handleChangeCity = (event) => {
    setInitialCity(event.target.value);
  };

  return (
    <div>
      <ContainerGeral>
        <ContainerSelect>
          <ContainerTitleSelect> 1. Selecione um Estado: </ContainerTitleSelect>
          <ContainerSelectState>
            <Selected onChange={handleChangeState}>
              <option> Selecione um Estado </option>
              {OptionState}
            </Selected>
            <Bandeira initialState={initialState} />
          </ContainerSelectState>
        </ContainerSelect>
        <ContainerSelect>
          <ContainerTitleSelect>
            {" "}
            2. Selecione uma Cidade:{" "}
          </ContainerTitleSelect>
          <Selected onChange={handleChangeCity}>
            <option> Selecione uma Cidade </option>
            {OptionCity}
          </Selected>
          <CardCity initialCity={initialCity} initialState={initialState} />
        </ContainerSelect>
        <ContainerTamandua src={tamandua}/>
      </ContainerGeral>
    </div>
  );
}

export default SelectState;
