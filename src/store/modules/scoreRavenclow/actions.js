import { SCORE_RAVENCLOW_ADD, SCORE_RAVENCLOW_SUB } from "./actionsType";

export const ravenclowActionAdd = (number) => ({
  type: SCORE_RAVENCLOW_ADD,
  number,
});

export const ravenclowActionSub = (number) => ({
  type: SCORE_RAVENCLOW_SUB,
  number,
});
