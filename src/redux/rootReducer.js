import { combineReducers } from "@reduxjs/toolkit";
import gameReducer from "./reducers/gameSlice";

const rootReducer= combineReducers({
    game: gameReducer,
});
export default rootReducer;