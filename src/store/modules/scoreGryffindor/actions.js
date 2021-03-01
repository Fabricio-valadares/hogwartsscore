import { SCORE_GRYFFINDOR_ADD, SCORE_GRYFFINDOR_SUB } from "./actionsType";

export const gryffindorActionAdd = (number) => ({
  type: SCORE_GRYFFINDOR_ADD,
  number,
});

export const gryffindorActionSub = (number) => ({
  type: SCORE_GRYFFINDOR_SUB,
  number,
});
