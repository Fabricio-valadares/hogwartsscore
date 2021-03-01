import { createStore, combineReducers, applyMiddleware } from "redux";
import studentsReduces from "./modules/studentsApi/reduces";
import stytherinReduces from "./modules/scoreSlytherin/reduces";
import ravenclowReduces from "./modules/scoreRavenclow/reduces";
import hunffepuffReduces from "./modules/scoreHunffepuff/reduces";
import gryffindorReduces from "./modules/scoreGryffindor/reduces";
import thunk from "redux-thunk";

const reduces = combineReducers({
  studentsReduces: studentsReduces,
  stytherinReduces: stytherinReduces,
  ravenclowReduces: ravenclowReduces,
  hunffepuffReduces: hunffepuffReduces,
  gryffindorReduces: gryffindorReduces,
});

const store = createStore(reduces, applyMiddleware(thunk));

export default store;
