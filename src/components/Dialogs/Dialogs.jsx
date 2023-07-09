import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './Dialog/DialogItem';
import MessagesBlockContainer from './MessagesBlock/MessagesBlockContainer';

const Dialogs = ( props ) => {
    const state = props.store.getState()
    let dialogsElements = state.dialogsPage.dialogs.map( el => <DialogItem name={ el.name } id={ el.id } img={ el.img }/> )

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={classes.messagesBlock}>
                <MessagesBlockContainer store={ props.store } />
            </div>
        </div>
    )
}

export default Dialogs