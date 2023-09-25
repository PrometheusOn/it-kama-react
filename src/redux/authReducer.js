import { authAPI, profileAPI } from "../api/api";
import { stopSubmit } from "redux-form";
import userPhoto from "../assets/images/user.png";

const SET_LOGPASS_USER = "social-network/authReducer/SET_LOGPASS_USER";
const SET_USERID = "social-network/authReducer/SET_USERID";
const CLEAR_USER_DATA = "social-network/authReducer/CLEAR_USER_DATA";
const SET_USER_DATA = "social-network/authReducer/SET_USER_DATA";
const TOOGLE_IS_FETCHING = "social-network/authReducer/TOOGLE_IS_FETCHING";
const SET_PHOTO_AUTH_USER = "social-network/authReducer/SET_PHOTO_AUTH_USER";

const initialState = {
	email: "",
	password: "",
	rememberMe: false,
	captcha: false,
	userId: "",
	login: "",
	photo: userPhoto,
	isAuth: false,
	isFetching: false,
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_LOGPASS_USER: {
			const { email, password, rememberMe = false, captcha = false } = action.obj;
			return {
				...state,
				email,
				password,
				rememberMe,
				captcha,
				// isAuth: true,
			};
		}
		// case SET_USERID: {
		// 	return {
		// 		...state,
		// 		userId: action.userId,
		// 	};
		// }
		case CLEAR_USER_DATA: {
			return {
				email: "",
				password: "",
				rememberMe: false,
				captcha: false,
				userId: "",
				login: "",
				photo: userPhoto,
				isAuth: false,
				isFetching: false,
			};
		}
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
const setAuthUserData = (userId, email, login) => ({
	type: SET_USER_DATA,
	data: { userId, email, login },
});
const toogleIsFetching = isFetching => ({ type: TOOGLE_IS_FETCHING, isFetching });
const setPhotoAuthUser = photo => ({ type: SET_PHOTO_AUTH_USER, photo });
const setLogPassUser = obj => ({ type: SET_LOGPASS_USER, obj });
// const setUserId = userId => ({ type: SET_USERID, userId });
const clearUserData = () => ({ type: CLEAR_USER_DATA });

const getAuthUser = () => async dispatch => {
	dispatch(toogleIsFetching(true));
	let response = await authAPI.authMe();
	if (response.resultCode === 0) {
		dispatch(toogleIsFetching(false));
		const { id: userId, email, login } = response.data;
		dispatch(setAuthUserData(userId, email, login));
		response = await profileAPI.getProfile(userId);
		if (response.photos.large) dispatch(setPhotoAuthUser(response.photos.large));
	}
};

const signIn = obj => async dispatch => {
	const objectForApi = {
		email: obj.email,
		password: obj.password,
		rememberMe: obj.rememberMe || false,
		captcha: obj.captcha || false,
	};
	const response = await authAPI.login(objectForApi);
	if (response.resultCode === 0) {
		dispatch(setLogPassUser(objectForApi));
		dispatch(getAuthUser());
		// dispatch(setUserId(response.data.userId));
	} else {
		const message = response.messages.length > 0 ? response.messages[0] : "Неизвестная ошибка";
		dispatch(
			stopSubmit("login", {
				_error: message,
			})
		);
	}
};

const signOut = () => async dispatch => {
	const response = await authAPI.logout();
	if (response.resultCode === 0) {
		dispatch(clearUserData());
	}
};

export {
	authReducer,
	setAuthUserData,
	toogleIsFetching,
	setPhotoAuthUser,
	getAuthUser,
	setLogPassUser,
	signIn,
	signOut,
};
