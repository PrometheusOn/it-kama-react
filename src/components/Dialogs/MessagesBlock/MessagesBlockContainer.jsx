import React from 'react';
import MessagesBlock from './MessagesBlock';
import { addNewMessageActionCreator, updateNewMessageTextActionCreator } from '../../../redux/dialogsReducer';


const MessagesBlockContainer = (props) => {
    let dialogsPage = props.store.getState().dialogsPage

    let addNewMessage = () => {
        props.store.dispatch( addNewMessageActionCreator() )
    }

    let onChangeNewMessage = (text) => {
        props.store.dispatch( updateNewMessageTextActionCreator(text) )
    }

    return (
        <MessagesBlock updateNewMessageTextActionCreator={ onChangeNewMessage }
                        addNewMessageActionCreator={ addNewMessage }
                        dialogsPage={ dialogsPage }/>
    )
}

export default MessagesBlockContainer