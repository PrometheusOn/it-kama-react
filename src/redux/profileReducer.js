import { profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

const initialState = {
	textNewPost: "",
	posts: [
		{ id: 1, message: "Hi, how are you", likesCount: 787 },
		{ id: 2, message: "I'm hungry... always hungry", likesCount: 512 },
		{ id: 3, message: "it's my first post", likesCount: 837 },
	],
	profile: null,
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
		default:
			return state;
	}
};

const AddPost = () => ({ type: ADD_POST });
const UpdateNewPostText = text => ({ type: UPDATE_NEW_POST_TEXT, newText: text });
const SetUserProfile = profile => ({ type: SET_USER_PROFILE, profile });

const getProfileUser = id => dispatch => {
	
	profileAPI.getProfile(id).then(response => {
		dispatch(SetUserProfile(response));
	});
};

export { profileReducer, AddPost, UpdateNewPostText, SetUserProfile, getProfileUser };
