import { slytherinActionAdd, slytherinActionSub } from "./actions";

export const slytherinThunksAdd = (number) => (dispatch, state) => {
  const { stytherinReduces } = state();

  const addNumber = stytherinReduces + number;

  dispatch(slytherinActionAdd(addNumber));
};

export const slytherinThunksSub = (number) => (dispatch, state) => {
  const { stytherinReduces } = state();

  const subNumber = stytherinReduces - number;

  dispatch(slytherinActionSub(subNumber));
};
