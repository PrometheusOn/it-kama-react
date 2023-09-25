import React from "react";
import classes from "./Friend.module.css";

export const Friend = ({ friend }) => {
	return (
		<div className={classes.friend}>
			<img src={friend.img} />
			<div className={classes.friendName}>{friend.name}</div>
		</div>
	);
};
