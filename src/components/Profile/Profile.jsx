import React from "react";
import classes from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer.jsx";
import ProfileInfo from "./ProfileInfo/ProfileInfo.jsx";

const Profile = () => {
    return (
        <div className={classes.content}>
            <ProfileInfo />
            <MyPostsContainer />
        </div>
    );
};

export default Profile;
