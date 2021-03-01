import { SCORE_HUNFFEPUFF_ADD, SCORE_HUNFFEPUFF_SUB } from "./actionsType";

export const hunffepuffActionAdd = (number) => ({
  type: SCORE_HUNFFEPUFF_ADD,
  number,
});

export const hunffepuffActionSub = (number) => ({
  type: SCORE_HUNFFEPUFF_SUB,
  number,
});
