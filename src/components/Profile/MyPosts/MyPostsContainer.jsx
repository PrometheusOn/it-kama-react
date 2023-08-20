import MyPosts from "./MyPosts";
import { addPost, updateNewPostText } from "../../../redux/profileReducer";
import { connect } from "react-redux";
import userPhoto from "../../../assets/images/user.png";
import { compose } from "redux";

const MapStateToProps = state => {
	return {
		posts: state.profilePage.posts,
		textNewPost: state.profilePage.textNewPost,
		profilePhoto: state.profilePage.profile?.photos?.large || userPhoto,
	};
};
const MapDispatchToProps = dispatch => {
	return {
		addPost: () => {
			dispatch(addPost());
		},
		onChangeNewPost: text => {
			const action = updateNewPostText(text);
			dispatch(action);
		},
	};
};

export default compose(connect(MapStateToProps, MapDispatchToProps))(MyPosts);
