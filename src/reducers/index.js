import { combineReducers } from "redux";
import userOption from "./userOption";
import computerOption from "./computerOption";
import step from "./step";
import winner from "./winner";
import score from "./score";

const reducer = combineReducers({
  userOption,
  computerOption,
  step,
  winner,
  score,
});

export default reducer;
