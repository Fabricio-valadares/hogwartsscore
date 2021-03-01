import { studentsActions } from "./actions";
import api from "../../../services";

export const studentsThunksApi = () => (dispatch, state) => {
  api.get().then((response) => {
    dispatch(studentsActions(response.data));
  });
};
