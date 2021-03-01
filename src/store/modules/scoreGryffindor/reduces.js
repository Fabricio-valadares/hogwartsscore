import { SCORE_GRYFFINDOR_ADD, SCORE_GRYFFINDOR_SUB } from "./actionsType";

const gryffindorReduces = (state = 0, actions) => {
  switch (actions.type) {
    case SCORE_GRYFFINDOR_ADD:
      return actions.number;
    case SCORE_GRYFFINDOR_SUB:
      return actions.number;
    default:
      return state;
  }
};

export default gryffindorReduces;
