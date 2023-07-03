import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './Dialog/DialogItem';
import MessagesBlock from './MessagesBlock/MessagesBlock';

const Dialogs = ( props ) => {
    let dialogsElements = props.dialogsPage.dialogs.map( el => <DialogItem name={ el.name } id={ el.id } img={ el.img }/> )

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={classes.messagesBlock}>
                <MessagesBlock dialogsPage={ props.dialogsPage } addMessage={ props.addMessage } updateMessageText={ props.updateMessageText }/>
            </div>
        </div>
    )
}

export default Dialogs