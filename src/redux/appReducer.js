import { getAuthUser } from "./authReducer";

const INITIALIZED_SUCCESS = "social-network/appReducer/INITIALIZED_SUCCESS";

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
	const promise = dispatch(getAuthUser());
	Promise.all([promise]).then(() => {
		dispatch(initializedSuccess());
	});
};

export { appReducer, initializeApp };
