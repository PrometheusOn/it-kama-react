import MyPosts from "./MyPosts";
import { AddPost, UpdateNewPostText} from "../../../redux/profileReducer";
import { connect } from "react-redux";
import userPhoto from '../../../assets/images/user.png'

const MapStateToProps = (state) => {
	return {
		posts: state.profilePage.posts,
		textNewPost: state.profilePage.textNewPost,
		profilePhoto: state.profilePage.profile?.photos?.large || userPhoto  
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
