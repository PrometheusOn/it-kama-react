import MyPosts from "./MyPosts";
import { AddPostCreateAction, UpdateNewPostTextCreateAction } from "../../../redux/profileReducer";
import { connect } from "react-redux";

// const MyPostsContainer = () => {
// 	return (
// 		<StoreContext.Consumer>
// 			{store => {
// 				const state = store.getState();

// 				const addPost = () => {
// 					store.dispatch(AddPostCreateAction());
// 				};

// 				const onChangeNewPost = text => {
// 					const action = UpdateNewPostTextCreateAction(text);
// 					store.dispatch(action);
// 				};

// 				return (
// 					<MyPosts
// 						UpdateNewPostTextCreateAction={onChangeNewPost}
// 						addPost={addPost}
// 						posts={state.profilePage.posts}
// 						textNewPost={state.profilePage.textNewPost}
// 					/>
// 				);
// 			}}
// 		</StoreContext.Consumer>
// 	);
// };

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
