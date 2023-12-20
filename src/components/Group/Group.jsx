import React from "react";
import classes from "./Group.module.css";
import GroupItem from "./GroupItem/GroupItem";
import Pagination from "../common/Pagination/Pagination";

const Users = props => {
	return (
		<div className={classes.usersPage}>
			<div className='createGroup'>
				<button onClick={() => "Открыть форму"}>Создать группу</button>
			</div>
			<div className={classes.formCreate}>
				<form>
					<input class='uk-input' type='text' placeholder='Введите название группы' />
					<input class='uk-input' type='text' placeholder='Введите описание группы' />
					<button>Подтвердить</button>
				</form>
			</div>
			<div>Группы:</div>
			<div className={classes.userList}>
				{props.users.map(user => (
					<GroupItem
						key={user.id}
						followingInProgress={props.followingInProgress}
						unfollow={props.unfollow}
						follow={props.follow}
						user={user}
					/>
				))}
			</div>
			<Pagination
				totalUsersCount={props.totalUsersCount}
				pageSize={props.pageSize}
				currentPage={props.currentPage}
				onPageChanged={props.onPageChanged}
			/>
		</div>
	);
};

export default Users;
