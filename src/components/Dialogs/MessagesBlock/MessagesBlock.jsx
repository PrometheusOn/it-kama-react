import React from 'react';
import classes from './MessagesBlock.module.css';

const MessagesBlock = (props) => {
    let messages = props.dialogsPage.messages.map( el => <div className={ classes.message }>{ el.message }</div> )

    let newMessageElement = React.createRef()

    let addNewMessage = () => {
        props.addMessage()
    }

    let onChangeNewMessage = () => {
        let text = newMessageElement.current.value
        props.updateMessageText( text )
    }

    return (
        <div className={ classes.messageBlock }>
            <div className={ classes.messages }>
                { messages }
            </div>
            <div className={classes.newMessage}>
                <textarea className={classes.textarea_createMessage} ref={ newMessageElement } onChange={ onChangeNewMessage } value={ props.dialogsPage.textNewMessage }/>
                <button className={classes.button_sendMessage} onClick={ addNewMessage }>Send</button>
            </div>
        </div>

    )
}

export default MessagesBlock