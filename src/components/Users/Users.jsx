import React from "react";
import classes from "./Users.module.css";
import axios from "axios";
import userPhoto from "../../assets/images/user.png";

class Users extends React.Component {
	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
			this.props.setUsers(response.data.items);
			this.props.setTotalUsersCount(response.data.totalCount)
		});
	}

	onPageChanged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber)
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
			this.props.setUsers(response.data.items);
		});
	}

	render() {

		const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
		const pages = []
		for (let i = 1; i <= pagesCount; i++) {
			pages.push(i)
		}

		// const pagesCount = () => {
		// 	let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
		// 	if( pagesCount > 10) {
		// 		pagesCount = 10
		// 	}
		// 	return pagesCount
		// }
		// const pages = []
		// for (let i = 1; i <= pagesCount(); i++) {
		// 	pages.push(i)
		// }

		return (
			<div className={classes.userList}>
				<div className={ classes.pagination }>
					{pages.map( p =>{
						return <span className={this.props.currentPage === p && classes.selectedPage} onClick={(e)=>{ this.onPageChanged(p) }}>{ p }</span>
					})}
				</div>
				{this.props.users.map(user => (
					<div key={user.id} className={classes.user}>
						<div className={classes.imageProfileBlock}>
							<img
								className={classes.userPhoto}
								src={`${user.photos.small != null ? user.photos.small : userPhoto}`}
							/>
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
											this.props.unfollow(user.id);
										}}
									>
										Unfollow
									</button>
								) : (
									<button
										className={classes.followBtn}
										onClick={() => {
											this.props.follow(user.id);
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
		);
	}
}

export default Users;
