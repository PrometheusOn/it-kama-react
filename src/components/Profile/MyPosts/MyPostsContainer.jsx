import MyPosts from "./MyPosts";
import { addPost } from "../../../redux/profileReducer";
import { connect } from "react-redux";
import { compose } from "redux";
import {
	getPosts,
	getTextNewPost,
	getProfilePhoto,
} from "../../../redux/selectors/profile-selector";

const MapStateToProps = state => {
	return {
		posts: getPosts(state),
		textNewPost: getTextNewPost(state),
		profilePhoto: getProfilePhoto(state),
	};
};

export default compose(connect(MapStateToProps, { addPost }))(MyPosts);
