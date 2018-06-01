export const initialState = {
	situation: "",
	apparentCause: "",
	actualCause: "",
	insight: ""
};

export const Insight_Reducer = (state = initialState, action) => {
	switch (action.type) {
		case "SAVE_SITUATION":
			return Object.assign({}, state, {
				situation: action.payload
			});
		case "SAVE_APPARENTCAUSE":
			return Object.assign({}, state, {
				apparentCause: action.payload
			});
		case "SAVE_ACTUALCAUSE":
			return Object.assign({}, state, {
				actualCause: action.payload
			});
		case "SAVE_INSIGHT":
			return Object.assign({}, state, {
				insight: action.payload
			});
		case "RESET_ALL":
			return initialState;
		default:
			return state;
	}
};