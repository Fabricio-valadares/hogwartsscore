import { SCORE_HUNFFEPUFF_ADD, SCORE_HUNFFEPUFF_SUB } from "./actionsType";

const hunffepuffReduces = (state = 0, actions) => {
  switch (actions.type) {
    case SCORE_HUNFFEPUFF_ADD:
      return actions.number;
    case SCORE_HUNFFEPUFF_SUB:
      return actions.number;
    default:
      return state;
  }
};

export default hunffepuffReduces;
