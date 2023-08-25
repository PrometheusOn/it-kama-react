import MyPosts from "./MyPosts";
import { addPost } from "../../../redux/profileReducer";
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

export default compose(connect(MapStateToProps, { addPost }))(MyPosts);
