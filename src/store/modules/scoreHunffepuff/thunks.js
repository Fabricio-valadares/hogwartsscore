import { hunffepuffActionAdd, hunffepuffActionSub } from "./actions";

export const hunffepuffThunksAdd = (number) => (dispatch, state) => {
  const { hunffepuffReduces } = state();

  const addNumber = hunffepuffReduces + number;

  dispatch(hunffepuffActionAdd(addNumber));
};

export const hunffepuffThunksSub = (number) => (dispatch, state) => {
  const { hunffepuffReduces } = state();

  const subNumber = hunffepuffReduces - number;

  dispatch(hunffepuffActionSub(subNumber));
};
