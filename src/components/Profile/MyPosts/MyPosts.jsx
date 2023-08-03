import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post.jsx';


const MyPosts = ( props ) => {
    let postElements = props.posts.map( el => <Post profilePhoto={ props.profilePhoto } message={ el.message } likesCount={ el.likesCount } key={el.id} />)

    let onAddPost = () => {
        props.addPost()
    }

    let onChangeNewPost = (e) => {
        let text = e.target.value
        props.onChangeNewPost(text)
    }

    return (
        <div className={classes.myPosts}>
            <div className={ classes.postCreator }>
                <h1>My posts</h1>
                <div className={classes.newPost}>
                    <textarea className={classes.textarea_createPost} onChange={ onChangeNewPost } value={ props.textNewPost } />
                    <button className={classes.button_addPost} onClick={ onAddPost }>Send</button>
                </div>
            </div>
            <div className={classes.posts}>
                { postElements }
            </div>
        </div>
    )
}

export default MyPosts