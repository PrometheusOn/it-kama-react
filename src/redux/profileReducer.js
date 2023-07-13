const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const initialState = {
	textNewPost: "",
	posts: [
		{ id: 1, message: "Hi, how are you", likesCount: 787 },
		{ id: 2, message: "I'm hungry... always hungry", likesCount: 512 },
		{ id: 3, message: "it's my first post", likesCount: 837 },
	],
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
		default:
			return state;
	}
};

const AddPostCreateAction = () => ({ type: ADD_POST });
const UpdateNewPostTextCreateAction = text => ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export { profileReducer, AddPostCreateAction, UpdateNewPostTextCreateAction };
