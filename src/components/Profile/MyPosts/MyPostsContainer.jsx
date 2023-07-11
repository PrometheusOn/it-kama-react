import MyPosts from "./MyPosts";
import { AddPostCreateAction, UpdateNewPostTextCreateAction } from "../../../redux/profileReducer";
import { connect } from "react-redux";

const MapStateToProps = (state) => {
	return {
		posts: state.profilePage.posts,
		textNewPost: state.profilePage.textNewPost		
	}
}
const MapDispatchToProps = (dispatch) => {
	return {
		addPost: () => {
			dispatch(AddPostCreateAction());
		},
		onChangeNewPost: (text) => {
			const action = UpdateNewPostTextCreateAction(text);
			dispatch(action);
		}
	}
}
const MyPostsContainer = connect(MapStateToProps, MapDispatchToProps)(MyPosts)

export default MyPostsContainer;
