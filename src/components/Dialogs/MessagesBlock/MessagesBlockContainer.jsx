import React from "react";
import MessagesBlock from "./MessagesBlock";
import {
	addNewMessageActionCreator,
	updateNewMessageTextActionCreator,
} from "../../../redux/dialogsReducer";
import StoreContext from "../../../StoreContext";

const MessagesBlockContainer = () => {
    return (
        <StoreContext.Consumer>
            {store => {
                const dialogsPage = store.getState().dialogsPage;

                const addNewMessage = () => {
                    store.dispatch(addNewMessageActionCreator());
                };

                const onChangeNewMessageText = text => {
                    store.dispatch(updateNewMessageTextActionCreator(text));
                };

                return (
                    <MessagesBlock
                        onChangeNewMessageText={onChangeNewMessageText}
                        addNewMessage={addNewMessage}
                        dialogsPage={dialogsPage}
                    />
                );
            }}
	    </StoreContext.Consumer>
    )
	
};

export default MessagesBlockContainer;
