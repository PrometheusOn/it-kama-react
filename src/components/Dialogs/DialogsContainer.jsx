import React from 'react';
import DialogItem from './Dialog/DialogItem';
import Dialogs from './Dialogs';

const DialogsContainer = ( props ) => {
    let dialogsElements = props.dialogsPage.dialogs.map( el => <DialogItem name={ el.name } id={ el.id } img={ el.img }/> )

    return (
        <Dialogs dialogs={ props.store.dialogsPage.dialogs }/>
    )
}

export default DialogsContainer