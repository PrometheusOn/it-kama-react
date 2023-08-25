import React from "react";
import { Field, reduxForm } from "redux-form";
import classes from "../MessagesBlock.module.css";

const AddMessageForm = props => {
	// console.log(props.dialogsPage);
	return (
		<form onSubmit={props.handleSubmit} className={classes.newMessage}>
			<Field
				component='textarea'
				name='fieldForNewMessage'
				placeholder='Введите ваше сообщение'
				className={classes.textarea_createMessage}
			/>
			<button className={classes.button_sendMessage}>Отправить</button>
			{/* Не затирается textarea после клика - исправить */}
		</form>
	);
};

const AddMessageReduxForm = reduxForm({ form: "addNewMessageForm" })(AddMessageForm);

export default AddMessageReduxForm;
