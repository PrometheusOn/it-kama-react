import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div className={ classes.post }>
            <img src='https://i1.sndcdn.com/avatars-gTTqtXPl7wSOy6It-9dyBaw-t500x500.jpg' />
            <div className={ classes.postMessage }>{ props.message }</div>
            <div>
                <span>{ props.likesCount } likes</span>
            </div>
        </div>        
    )
}

export default Post