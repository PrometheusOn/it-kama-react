const SET_USER_DATA = "FOLLOW";
const TOOGLE_IS_FETCHING = "TOOGLE_IS_FETCHING";
const SET_PHOTO_AUTH_USER = "SET_PHOTO_AUTH_USER";

const initialState = {
	id: null,
	email: null,
	login: null,
	photo: null,
	isAuth: false,
	isFetching: false,
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_DATA: {
			return {
				...state,
				...action.data,
				isAuth: true,
			};
		}
		case TOOGLE_IS_FETCHING: {
			return {
				...state,
				isFetching: action.isFetching,
			};
		}
		case SET_PHOTO_AUTH_USER: {
			return {
				...state,
				photo: action.photo,
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
const setPhotoAuthUser = photo => ({ type: SET_PHOTO_AUTH_USER, photo });

export { authReducer, setAuthUserData, toogleIsFetching, setPhotoAuthUser };
