import { SCORE_RAVENCLOW_ADD, SCORE_RAVENCLOW_SUB } from "./actionsType";

const ravenclowReduces = (state = 0, actions) => {
  switch (actions.type) {
    case SCORE_RAVENCLOW_ADD:
      return actions.number;
    case SCORE_RAVENCLOW_SUB:
      return actions.number;
    default:
      return state;
  }
};

export default ravenclowReduces;
