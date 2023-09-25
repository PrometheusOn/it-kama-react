import React from "react";
import classes from "./Friends.module.css";
import { Friend } from "./Friend/Friend";

const Friends = ({ friendsList }) => {
	return (
		<div className={classes.friendsBlock}>
			<div className={classes.header}>Friends:</div>
			<div className={classes.friendsItems}>
				{friendsList.map(friend => {
					return <Friend key={friend.id} friend={friend} />;
				})}
			</div>
		</div>
	);
};

export default Friends;
