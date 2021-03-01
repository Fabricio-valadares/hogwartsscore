import { SCORE_SLYTHERIN_ADD, SCORE_SLYTHERIN_SUB } from "./actionsType";

export const slytherinActionAdd = (number) => ({
  type: SCORE_SLYTHERIN_ADD,
  number,
});

export const slytherinActionSub = (number) => ({
  type: SCORE_SLYTHERIN_SUB,
  number,
});
