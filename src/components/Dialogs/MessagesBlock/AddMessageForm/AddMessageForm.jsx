import React from "react";
import { Field, reduxForm } from "redux-form";
import classes from "../MessagesBlock.module.css";
import { FormControl } from "../../../common/FormsControls/FormsControls";
import { requiredField, maxLengthText } from "../../../../utils/validators/validators";

const AddMessageForm = props => {
	// console.log(props.dialogsPage);

	const maxLength100 = maxLengthText(100);
	return (
		<form onSubmit={props.handleSubmit} className={classes.newMessage}>
			<Field
				type='textarea'
				component={FormControl}
				name='fieldForNewMessage'
				placeholder='Введите ваше сообщение'
				validate={[requiredField, maxLength100]}
			/>
			<button className={classes.button_sendMessage}>Отправить</button>
			{/* Не затирается textarea после клика - исправить */}
		</form>
	);
};

const AddMessageReduxForm = reduxForm({ form: "addNewMessageForm" })(AddMessageForm);

export default AddMessageReduxForm;
