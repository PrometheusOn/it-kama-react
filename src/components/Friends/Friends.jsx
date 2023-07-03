import React from 'react';
import classes from './Friends.module.css';

const Friends = ( props ) => {

    let friends = props.friendsList
    return (
        <div className={ classes.friendsBlock }>
            <div className={ classes.header }>Friends:</div>
            <div className={ classes.friendsItems }>
                {
                    friends.map( friend => {
                        return (
                            <div className={classes.friend}>
                                <img src={ friend.img } />
                                <div className={ classes.friendName }>{ friend.name }</div>
                            </div>
                        )
                    })                
                }                
            </div>

        </div>
    )
}

export default Friends