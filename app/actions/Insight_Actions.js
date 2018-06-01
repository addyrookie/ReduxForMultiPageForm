export function save_situation(data) {
	return {
		type: "SAVE_SITUATION",
		payload: data
	};
}

export function save_apparentCause(data) {
	return {
		type: "SAVE_APPARENTCAUSE",
		payload: data
	};
}

export function save_actualCause(data) {
	return {
		type: "SAVE_ACTUALCAUSE",
		payload: data
	};
}
export function save_insight(data) {
	return {
		type: "SAVE_INSIGHT",
		payload: data
	};
}

export function reset_all() {
	return {
		type: "RESET_ALL"
	};
}
