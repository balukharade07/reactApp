import { GET_CONTACTS } from "../action/types";

const initialState = {};

export default function(state = initialState, action) {
	switch (action.type) {
		case GET_CONTACTS:
			return {
				...state
			};

		default:
			return state;
	}
}
