import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./Dialog/DialogItem";
import MessagesBlockContainer from "./MessagesBlock/MessagesBlockContainer";


const Dialogs = props => {
	const dialogsElements = props.dialogs.map(el => (
		<DialogItem name={el.name} id={el.id} img={el.img} key={el.id} />
	));

	return (
		<div className={classes.dialogs}>
			<div className={classes.dialogsItems}>{dialogsElements}</div>
			<div className={classes.messagesBlock}>
				<MessagesBlockContainer />
			</div>
		</div>
	);
};

export default Dialogs;
