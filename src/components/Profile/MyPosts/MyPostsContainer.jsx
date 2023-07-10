import React from "react";
import MyPosts from "./MyPosts";
import { AddPostCreateAction, UpdateNewPostTextCreateAction } from "../../../redux/profileReducer";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = () => {
	return (
		<StoreContext.Consumer>
			{store => {
				const state = store.getState();

				const addPost = () => {
					store.dispatch(AddPostCreateAction());
				};

				const onChangeNewPost = text => {
					const action = UpdateNewPostTextCreateAction(text);
					store.dispatch(action);
				};

				return (
					<MyPosts
						UpdateNewPostTextCreateAction={onChangeNewPost}
						addPost={addPost}
						posts={state.profilePage.posts}
						textNewPost={state.profilePage.textNewPost}
					/>
				);
			}}
		</StoreContext.Consumer>
	);
};

export default MyPostsContainer;
