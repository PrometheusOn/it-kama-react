import React from "react";
import classes from "./Users.module.css";
import User from "./User/User";
import Pagination from "../common/Pagination/Pagination";

const Users = props => {
	return (
		<div className={classes.usersPage}>
			<Pagination
				totalUsersCount={props.totalUsersCount}
				pageSize={props.pageSize}
				currentPage={props.currentPage}
				onPageChanged={props.onPageChanged}
			/>
			<div className={classes.userList}>
				{props.users.map(user => (
					<User
						key={user.id}
						followingInProgress={props.followingInProgress}
						unfollow={props.unfollow}
						follow={props.follow}
						user={user}
					/>
				))}
			</div>
		</div>
	);
};

export default Users;
