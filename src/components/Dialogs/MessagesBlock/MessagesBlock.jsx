import React from "react";
import classes from "./MessagesBlock.module.css";
import AddMessageForm from "./AddMessageForm/AddMessageForm";

const MessagesBlock = props => {
	const messages = props.dialogsPage.messages.map(el => (
		<div className={classes.message} key={el.id}>
			{el.message}
		</div>
	));

	const addNewMessage = values => {
		props.addNewMessage(values.fieldForNewMessage);
	};

	return (
		<div className={classes.messageBlock}>
			<div className={classes.messages}>{messages}</div>
			<AddMessageForm onSubmit={addNewMessage} {...props} />
		</div>
	);
};

export default MessagesBlock;
