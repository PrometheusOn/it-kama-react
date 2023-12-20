import classes from "./GroupItem.module.css";
import userPhoto from "../../../assets/images/user.png";
import { NavLink } from "react-router-dom";

const User = ({ user, ...props }) => {
	return (
		<div className={classes.user}>
			<div className={classes.imageProfileBlock}>
				<NavLink to={`/profile/${user.id}`}>
					<img
						className={classes.userPhoto}
						src={`${user.photos.small != null ? user.photos.small : userPhoto}`}
					/>
				</NavLink>
			</div>
			<div className={classes.userInfo}>
				<div className={classes.userName}>
					<div>Group name</div>
					{/* <div>{user.name}</div>
					<div>{user.status}</div> */}
				</div>
				<div className={classes.location}>
					<div>Подписчики: 1000</div>
					{/* <div>{"user.location.country"}</div>
					<div>{"user.location.city"}</div> */}
				</div>
				<div className={classes.followBtnBlock}>
					{user.followed ? (
						<button
							disabled={props.followingInProgress.some(id => id === user.id)}
							className={classes.followBtn}
							onClick={() => {
								props.unfollow(user.id);
							}}
						>
							Unfollow
						</button>
					) : (
						<button
							disabled={props.followingInProgress.some(id => id === user.id)}
							className={classes.followBtn}
							onClick={() => {
								props.follow(user.id);
							}}
						>
							Follow
						</button>
					)}
				</div>
			</div>
		</div>
	);
};

export default User;
