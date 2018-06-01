import { combineReducers } from "redux";

import * as Insight_Reducer from "./Insight_Reducer";

// reducers go here
export const rootReducer = combineReducers({
	Insight: Insight_Reducer.Insight_Reducer
});

export const initialState = {
	Insight: Insight_Reducer.initialState
};


