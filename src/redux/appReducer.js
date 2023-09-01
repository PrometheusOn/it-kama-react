import { authAPI, profileAPI } from "../api/api";
import { stopSubmit } from "redux-form";
import userPhoto from "../assets/images/user.png";
import { getAuthUser } from "./auth-reducer";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";

const initialState = {
	initialized: false,
};

const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case INITIALIZED_SUCCESS: {
			return {
				...state,
				initialized: true,
			};
		}
		default:
			return state;
	}
};
const initializedSuccess = () => ({
	type: INITIALIZED_SUCCESS,
});

const initializeApp = () => dispatch => {
	let promise = dispatch(getAuthUser());
	Promise.all([promise]).then(() => {
		dispatch(initializedSuccess());
	});
};

export { appReducer, initializeApp };
