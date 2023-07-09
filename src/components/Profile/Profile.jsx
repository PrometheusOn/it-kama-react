import React from 'react';
import classes from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer.jsx';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';

const Profile = ( props ) => {
    return  (
        <div className={classes.content}>
            <ProfileInfo />
            <MyPostsContainer store={ props.store }/>
            {/* <MyPosts profilePage={ props.profilePage } dispatch={ props.dispatch } /> */}
             {/* addPost={ props.addPost } updateNewPostText={ props.updateNewPostText } */}
        </div>   
    )
}

export default Profile