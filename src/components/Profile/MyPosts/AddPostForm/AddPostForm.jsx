import React from "react";
import { Field, reduxForm } from "redux-form";
import classes from "./../MyPosts.module.css";

const AddPostForm = props => {
	return (
		<form onSubmit={props.handleSubmit} className={classes.newPost}>
			<Field
				component='textarea'
				name='fieldForNewPost'
				className={classes.textarea_createPost}
			/>
			{/* Не затирается textarea после клика - исправить */}
			<button className={classes.button_addPost}>Send</button>
		</form>
	);
};

const AddPostReduxForm = reduxForm({ form: "addPostForm" })(AddPostForm);

export default AddPostReduxForm;
