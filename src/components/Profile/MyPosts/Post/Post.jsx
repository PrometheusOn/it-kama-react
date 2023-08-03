import React from "react";
import classes from "./Post.module.css";

const Post = props => {
	return (
		<div className={classes.post}>
			<img src={props.profilePhoto} />
			<div className={classes.postMessage}>{props.message}</div>
			<div>
				<span>{props.likesCount} likes</span>
			</div>
		</div>
	);
};

export default Post;
