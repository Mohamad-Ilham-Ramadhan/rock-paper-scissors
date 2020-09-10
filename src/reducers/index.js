import { combineReducers } from "redux";
import option from "./option";
import step from "./step";

const reducer = combineReducers({ option, step });

export default reducer;
