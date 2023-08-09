import React from "react";
import classes from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { followAPI } from "../../api/api";

const Users = props => {
	// const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
	// const pages = []
	// for (let i = 1; i <= pagesCount; i++) {
	// 	pages.push(i)
	// }

	const pagesCount = () => {
		let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
		if (pagesCount > 10) pagesCount = 10;
		return pagesCount;
	};

	const pages = [];
	for (let i = 1; i <= pagesCount(); i++) pages.push(i); // ограничил кол-во страниц, т.к. всего из 24645/sizePage(5)= ~5000 страниц

	return (
		<div className={classes.usersPage}>
			<div className={classes.pagination}>
				{pages.map(p => {
					return (
						<span
							className={
								props.currentPage === p
									? classes.selectedPage
									: classes.unselectedPage
							}
							onClick={e => {
								props.onPageChanged(p); //?;
							}}
						>
							{p}
						</span>
					);
				})}
			</div>
			<div className={classes.userList}>
				{props.users.map(user => (
					<div key={user.id} className={classes.user}>
						<div className={classes.imageProfileBlock}>
							<NavLink to={`/profile/${user.id}`}>
								<img
									className={classes.userPhoto}
									src={`${
										user.photos.small != null ? user.photos.small : userPhoto
									}`}
								/>
							</NavLink>
						</div>
						<div className={classes.userInfo}>
							<div className={classes.userName}>
								<div>{user.name}</div>
								<div>{user.status}</div>
							</div>
							<div className={classes.location}>
								<div>{"user.location.country"}</div>
								<div>{"user.location.city"}</div>
							</div>
							<div className={classes.followBtnBlock}>
								{user.followed ? (
									<button
										className={classes.followBtn}
										onClick={() => {
											followAPI.unfollow(user.id).then(response => {
												if (response.resultCode == 0) {
													props.unfollow(user.id);
												}
											});
										}}
									>
										Unfollow
									</button>
								) : (
									<button
										className={classes.followBtn}
										onClick={() => {
											followAPI.follow(user.id).then(response => {
												if (response.resultCode == 0) {
													props.follow(user.id);
												}
											});
										}}
									>
										Follow
									</button>
								)}
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Users;
