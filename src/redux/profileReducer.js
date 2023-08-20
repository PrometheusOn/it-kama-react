import { profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";

const initialState = {
	textNewPost: "",
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
			let newPost = {
				id: 4,
				message: state.textNewPost,
				likesCount: 0,
			};
			return {
				...state,
				textNewPost: "",
				posts: [...state.posts, newPost],
			};
		}
		case UPDATE_NEW_POST_TEXT: {
			return {
				...state,
				textNewPost: action.newText,
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

const addPost = () => ({ type: ADD_POST });
const updateNewPostText = text => ({ type: UPDATE_NEW_POST_TEXT, newText: text });
const setUserProfile = profile => ({ type: SET_USER_PROFILE, profile });
const setUserStatus = status => ({ type: SET_USER_STATUS, status });

const getProfileUser = id => dispatch => {
	profileAPI.getProfile(id).then(response => {
		dispatch(setUserProfile(response));
	});
};

const getUserStatus = id => dispatch => {
	profileAPI.getStatus(id).then(response => {
		dispatch(setUserStatus(response));
	});
};

const updateUserStatus = status => dispatch => {
	profileAPI.updateStatus(status).then(response => {
		if (response.resultCode === 0) dispatch(setUserStatus(status));
	});
};

export {
	profileReducer,
	addPost,
	updateNewPostText,
	setUserProfile,
	getProfileUser,
	getUserStatus,
	updateUserStatus,
};
