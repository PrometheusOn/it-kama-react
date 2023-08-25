import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post.jsx";
import AddPostForm from "./AddPostForm/AddPostForm";

const MyPosts = props => {
	const postElements = props.posts.map(el => (
		<Post
			profilePhoto={props.profilePhoto}
			message={el.message}
			likesCount={el.likesCount}
			key={el.id}
		/>
	));

	const onAddPost = values => {
		props.addPost(values.fieldForNewPost);
	};

	return (
		<div className={classes.myPosts}>
			<div className={classes.postCreator}>
				<h1>My posts</h1>
				<AddPostForm onSubmit={onAddPost} />
			</div>
			<div className={classes.posts}>{postElements}</div>
		</div>
	);
};

export default MyPosts;
