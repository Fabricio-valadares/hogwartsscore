import { SCORE_SLYTHERIN_ADD, SCORE_SLYTHERIN_SUB } from "./actionsType";

const stytherinReduces = (state = 0, actions) => {
  switch (actions.type) {
    case SCORE_SLYTHERIN_ADD:
      return actions.number;
    case SCORE_SLYTHERIN_SUB:
      return actions.number;
    default:
      return state;
  }
};

export default stytherinReduces;
