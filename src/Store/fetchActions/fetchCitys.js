import api from "../../Services/api";
import { requestSuccess } from "../ducks/City/reducer";

export const getAllCitys = (props) => async (dispatch) => {
  try {
    const response = await api.get(`/localidades/estados/${props}/distritos`);
    if (response) {
      return dispatch(requestSuccess(response.data));
    }
    throw new Error("Error 400: Erro na requisição das Cidades!");
  } catch (error) {
    alert(error);
  }
};
