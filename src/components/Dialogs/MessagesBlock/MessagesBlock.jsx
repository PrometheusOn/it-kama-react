import React from 'react';
import classes from './MessagesBlock.module.css';


const MessagesBlock = (props) => {
    const messages = props.dialogsPage.messages.map( el => <div className={ classes.message } key={el.id}>{ el.message }</div> )

    const addNewMessage = () => {
        props.addNewMessage()
    }

    const onChangeNewMessageText = (e) => {
        const text = e.target.value
        props.onChangeNewMessageText(text)
    }

    return (
        <div className={ classes.messageBlock }>
            <div className={ classes.messages }>
                { messages }
            </div>
            <div className={classes.newMessage}>
                <textarea className={classes.textarea_createMessage} onChange={ onChangeNewMessageText } value={ props.dialogsPage.textNewMessage }/>
                <button className={classes.button_sendMessage} onClick={ addNewMessage }>Send</button>
            </div>
        </div>

    )
}

export default MessagesBlock