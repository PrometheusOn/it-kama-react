import { profileAPI } from "../api/api";

const ADD_POST = "social-network/profileReducer/ADD-POST";
const SET_USER_PROFILE = "social-network/profileReducer/SET_USER_PROFILE";
const SET_USER_STATUS = "social-network/profileReducer/SET_USER_STATUS";

const initialState = {
	posts: [
		{ id: 1, message: "Hi, how are you", likesCount: 787 },
		{ id: 2, message: "I'm hungry... always hungry", likesCount: 512 },
		{ id: 3, message: "it's my first post", likesCount: 837 },
	],
	profile: null,
	status: "",
};

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST: {
			const newPost = {
				id: 4,
				message: action.textNewPost,
				likesCount: 0,
			};
			return {
				...state,
				posts: [...state.posts, newPost],
			};
		}
		case SET_USER_PROFILE: {
			return {
				...state,
				profile: action.profile,
			};
		}
		case SET_USER_STATUS: {
			return {
				...state,
				status: action.status,
			};
		}
		default:
			return state;
	}
};

const addPost = textNewPost => ({ type: ADD_POST, textNewPost });
const setUserProfile = profile => ({ type: SET_USER_PROFILE, profile });
const setUserStatus = status => ({ type: SET_USER_STATUS, status });

const getProfileUser = id => async dispatch => {
	const response = await profileAPI.getProfile(id);
	dispatch(setUserProfile(response));
};

const getUserStatus = id => async dispatch => {
	const response = await profileAPI.getStatus(id);
	dispatch(setUserStatus(response));
};

const updateUserStatus = status => async dispatch => {
	const response = await profileAPI.updateStatus(status);
	if (response.resultCode === 0) dispatch(setUserStatus(status));
};

export { profileReducer, addPost, setUserProfile, getProfileUser, getUserStatus, updateUserStatus };
