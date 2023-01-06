import api from "../../Services/api";
import { requestSuccess } from "../ducks/State/reducer";

export const getAllStates = () => async (dispatch) => {
  try {
    const response = await api.get("/localidades/estados");
    if (response) {
      return dispatch(requestSuccess(response.data));
    }
    throw new Error("Error 400: Erro na requisição dos Estados!");
  } catch (error) {
    alert(error);
  }
};