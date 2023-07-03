import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post.jsx';

const MyPosts = ( props ) => {
    let postElements = props.profilePage.posts.map( el => <Post message={ el.message } likesCount={ el.likesCount } />)
    
    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost()
    }

    let onChangeNewPost = () => {
        let text = newPostElement.current.value
        props.updatePostText( text )
    }

    return (
        <div className={classes.myPosts}>
            <div className={ classes.postCreator }>
                <h1>My posts</h1>
                <div className={classes.newPost}>
                    <textarea className={classes.textarea_createPost} ref={ newPostElement } onChange={ onChangeNewPost } value={ props.profilePage.textNewPost } />
                    <button className={classes.button_addPost} onClick={ addPost }>Send</button>
                </div>
            </div>
            <div className={classes.posts}>
                { postElements }
            </div>
        </div>
    )
}

export default MyPosts