import { authAPI } from "../api/api";
import { setAuthUserData } from "./auth-reducer";

const SET_LOGPASS_USER = "SET_LOGPASS_USER";
const SET_USERID = "SET_USERID";

const initialState = {
	email: "",
	password: "",
	rememberMe: false,
	captcha: false,
	userId: null,
};

const loginReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_LOGPASS_USER: {
			const { email, password, rememberMe = false, captcha = false } = action.obj;
			return {
				...state,
				email,
				password,
				rememberMe,
				captcha,
			};
		}
		case SET_USERID: {
			return {
				...state,
				userId: action.userId,
			};
		}
		default:
			return state;
	}
};

const setLogPassUser = obj => ({ type: SET_LOGPASS_USER, obj });
const setUserId = userId => ({ type: SET_USERID, userId });

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
		email: obj.login,
		password: obj.password,
		rememberMe: obj.rememberMe || false,
		captcha: obj.captcha || false,
	};
	dispatch(getUserId(objectForApi));
};

export { loginReducer, setLogPassUser, signIn };
