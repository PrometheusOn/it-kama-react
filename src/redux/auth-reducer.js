const SET_USER_DATA = "FOLLOW";
const TOOGLE_IS_FETCHING = "TOOGLE_IS_FETCHING";

const initialState = {
	id: null,
	email: null,
	login: null,
	isAuth: false,
	isFetching: false,
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_DATA: {
			return {
				...state,
				...action.data,
                isAuth:true,
			};
		}
		case TOOGLE_IS_FETCHING: {
			return {
				...state,
				isFetching: action.isFetching,
			};
		}
		default:
			return state;
	}
};

const setAuthUserData = (id, email, login) => ({
	type: SET_USER_DATA,
	data: { id, email, login },
});
const toogleIsFetching = isFetching => ({ type: TOOGLE_IS_FETCHING, isFetching });

export { authReducer, setAuthUserData, toogleIsFetching };
