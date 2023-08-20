import React from "react";
import classes from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer.jsx";
import ProfileInfo from "./ProfileInfo/ProfileInfo.jsx";

const Profile = props => {
	return (
		<div className={classes.content}>
			<ProfileInfo
				userIdCurrentPage={props.userIdCurrentPage}
				userIdAuthUser={props.userIdAuthUser}
				profile={props.profile}
				status={props.status}
				updateUserStatus={props.updateUserStatus}
			/>
			<MyPostsContainer />
		</div>
	);
};

export default Profile;
