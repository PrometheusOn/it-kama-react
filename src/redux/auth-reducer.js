import { authAPI, profileAPI } from "../api/api";
import userPhoto from "../assets/images/user.png";

const SET_LOGPASS_USER = "SET_LOGPASS_USER";
const SET_USERID = "SET_USERID";
const CLEAR_USER_DATA = "CLEAR_USER_DATA";
const SET_USER_DATA = "SET_USER_DATA";
const TOOGLE_IS_FETCHING = "TOOGLE_IS_FETCHING";
const SET_PHOTO_AUTH_USER = "SET_PHOTO_AUTH_USER";

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
				isAuth: true,
			};
		}
		case SET_USERID: {
			return {
				...state,
				userId: action.userId,
			};
		}
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
const setUserId = userId => ({ type: SET_USERID, userId });
const clearUserData = () => ({ type: CLEAR_USER_DATA });

const getAuthUser = () => dispatch => {
	dispatch(toogleIsFetching(true));
	authAPI.authMe().then(response => {
		if (response.resultCode === 0) {
			dispatch(toogleIsFetching(false));
			const { id: userId, email, login } = response.data;
			dispatch(setAuthUserData(userId, email, login));
			profileAPI.getProfile(userId).then(response => {
				if (response.photos.large) dispatch(setPhotoAuthUser(response.photos.large));
			});
		}
	});
};

const getUserId = obj => dispatch => {
	dispatch(setLogPassUser(obj));
	authAPI.login(obj).then(response => {
		if (response.resultCode === 0) {
			dispatch(setUserId(response.data.userId));
		}
	});
};

const signIn = obj => dispatch => {
	const objectForApi = {
		email: obj.email,
		password: obj.password,
		rememberMe: obj.rememberMe || false,
		captcha: obj.captcha || false,
	};
	dispatch(getUserId(objectForApi));
};

const signOut = () => dispatch => {
	authAPI.logout().then(response => {
		if (response.resultCode === 0) {
			dispatch(clearUserData());
		}
	});
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
