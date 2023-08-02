import MyPosts from "./MyPosts";
import { AddPost, UpdateNewPostText} from "../../../redux/profileReducer";
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
			dispatch(AddPost());
		},
		onChangeNewPost: (text) => {
			const action = UpdateNewPostText(text);
			dispatch(action);
		}
	}
}
const MyPostsContainer = connect(MapStateToProps, MapDispatchToProps)(MyPosts)

export default MyPostsContainer;
