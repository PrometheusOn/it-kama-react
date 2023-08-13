import { authAPI, profileAPI } from "../api/api";
import userPhoto from "../assets/images/user.png";

const SET_USER_DATA = "FOLLOW";
const TOOGLE_IS_FETCHING = "TOOGLE_IS_FETCHING";
const SET_PHOTO_AUTH_USER = "SET_PHOTO_AUTH_USER";

const initialState = {
	id: null,
	email: null,
	login: null,
	photo: userPhoto,
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

const getAuthUser = () => dispatch => {
	dispatch(toogleIsFetching(true));
	authAPI.authMe().then(response => {
		if (response.resultCode === 0) {
			dispatch(toogleIsFetching(false));
			const { id, email, login } = response.data;
			dispatch(setAuthUserData(id, email, login));

			profileAPI.getProfile(id).then(response => {
				if (response.photos.large) dispatch(setPhotoAuthUser(response.photos.large));
			});
		}
	});
};

// const getPhotoAuthUser = id => dispatch => {
// 	profileAPI.getProfile(id).then(response => {
// 		if (response.photos.large) dispatch(setPhotoAuthUser(response.photos.large));
// 	});
// };

export {
	authReducer,
	setAuthUserData,
	toogleIsFetching,
	setPhotoAuthUser,
	getAuthUser,
	// getPhotoAuthUser,
};
