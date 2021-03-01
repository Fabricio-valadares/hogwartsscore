import { DATA_API } from "./actionsType";

const studentsReduces = (state = [], actions) => {
  switch (actions.type) {
    case DATA_API:
      return actions.data;
    default:
      return state;
  }
};

export default studentsReduces;
