import _ from "lodash";
import {FETCH_POSTS, FETCH_SINGLE_POST, DELETE_POST} from "../actions/index";

export default function(state={}, action){
	console.log("action received:", action);
	switch(action.type){
		case FETCH_POSTS:
			console.log("In reducer. Type: FETCH_POSTS");
			console.log(_.mapKeys(action.payload.data, "id"));
			return _.mapKeys(action.payload.data, "id");

		case FETCH_SINGLE_POST:
			console.log("In reducer. Type: FETCH_SINGLE_POST");
			console.log(action.payload.data);
			const newState = {[action.payload.data.id]: action.payload.data};
			return newState;
		case DELETE_POST:
			return _.omit(state, actions.payload);
		default:
			return state;

	}

}