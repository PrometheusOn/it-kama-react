import React from 'react';
import MyPosts from './MyPosts';
import { AddPostCreateAction, UpdateNewPostTextCreateAction } from '../../../redux/profileReducer';

const MyPostsContainer = ( props ) => {
    // let postElements = profilePage.posts.map( el => <Post message={ el.message } likesCount={ el.likesCount } />)
    let state = props.store.getState()
    let addPost = () => {
        props.store.dispatch( AddPostCreateAction() )
    }

    let onChangeNewPost = ( text ) => {
        const action = UpdateNewPostTextCreateAction(text)
        props.store.dispatch( action )
    }

    return (<MyPosts UpdateNewPostTextCreateAction={ onChangeNewPost }
                    addPost={ addPost }
                    posts={ state.profilePage.posts }
                    textNewPost={ state.profilePage.textNewPost }/>)
}

export default MyPostsContainer