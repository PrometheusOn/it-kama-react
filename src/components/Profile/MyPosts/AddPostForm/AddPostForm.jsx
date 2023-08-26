import React from "react";
import { Field, reduxForm } from "redux-form";
import classes from "./../MyPosts.module.css";
import { requiredField, maxLengthText } from "../../../../utils/validators/validators";
import { FormControl } from "../../../common/FormsControls/FormsControls";

const AddPostForm = props => {
	const maxLength15 = maxLengthText(15);

	return (
		<form onSubmit={props.handleSubmit} className={classes.newPost}>
			<Field
				type='textarea'
				component={FormControl}
				placeholder='Что нового?'
				name='fieldForNewPost'
				className={classes.textarea_createPost}
				validate={[requiredField, maxLength15]}
			/>
			{/* Не затирается textarea после клика - исправить */}
			<button className={classes.button_addPost}>Send</button>
		</form>
	);
};

const AddPostReduxForm = reduxForm({ form: "addPostForm" })(AddPostForm);

export default AddPostReduxForm;
