import { ravenclowActionAdd, ravenclowActionSub } from "./actions";

export const ravenclowThunksAdd = (number) => (dispatch, state) => {
  const { ravenclowReduces } = state();

  const addNumber = ravenclowReduces + number;

  dispatch(ravenclowActionAdd(addNumber));
};

export const ravenclowThunksSub = (number) => (dispatch, state) => {
  const { ravenclowReduces } = state();

  const subNumber = ravenclowReduces - number;

  dispatch(ravenclowActionSub(subNumber));
};
