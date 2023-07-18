import React from "react";
import classes from "./Users.module.css";
import axios from "axios";
import userPhoto from '../../assets/images/user.png'

const Users = props => {

	const getUsers = () => {
		if (props.users.length === 0) {
			axios.get('https://social-network.samuraijs.com/api/1.0/users').then( response => {
				props.setUsers(response.data.items)
			} )
		}		
	}


	return (
		<div className={classes.userList}>
			<button onClick={getUsers}>Get Users</button>
			{props.users.map(user => (
				<div key={user.id} className={classes.user}>
					<div className={classes.imageProfileBlock}>
						<img className={classes.userPhoto} src={`${user.photos.small != null ? user.photos.small : userPhoto}`} />
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
										props.unfollow(user.id);
									}}
								>
									Unfollow
								</button>
							) : (
								<button
									className={classes.followBtn}
									onClick={() => {
										props.follow(user.id);
									}}
								>
									Follow
								</button>
							)}
						</div>
						{/* <div>
                            { user.followed 
                                ? <button onClick={ ()=>{ props.unfollow(user.id) } }>Unfollow</button> 
                                : <button onClick={ ()=>{ props.follow(user.id) } }>Follow</button> }
						</div> */}
					</div>
				</div>
			))}
		</div>
	);
};

export default Users;
