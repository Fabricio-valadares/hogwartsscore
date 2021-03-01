import { gryffindorActionAdd, gryffindorActionSub } from "./actions";

export const gryffindorThunksAdd = (number) => (dispatch, state) => {
  const { gryffindorReduces } = state();

  const addNumber = gryffindorReduces + number;

  dispatch(gryffindorActionAdd(addNumber));
};

export const gryffindorThunksSub = (number) => (dispatch, state) => {
  const { gryffindorReduces } = state();

  const subNumber = gryffindorReduces - number;

  dispatch(gryffindorActionSub(subNumber));
};
