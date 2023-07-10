import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./Dialog/DialogItem";
import MessagesBlockContainer from "./MessagesBlock/MessagesBlockContainer";
import StoreContext from "../../StoreContext";

const Dialogs = () => {
    return (
        <StoreContext.Consumer>
            {store => {
                const state = store.getState();
                const dialogsElements = state.dialogsPage.dialogs.map(el => (
                    <DialogItem name={el.name} id={el.id} img={el.img} />
                ));

                return (
                    <div className={classes.dialogs}>
                        <div className={classes.dialogsItems}>{dialogsElements}</div>
                        <div className={classes.messagesBlock}>
                            <MessagesBlockContainer />
                        </div>
                    </div>
                );
            }}
        </StoreContext.Consumer>
    )
};

export default Dialogs;
