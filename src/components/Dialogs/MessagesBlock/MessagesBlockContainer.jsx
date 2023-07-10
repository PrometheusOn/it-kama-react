import MessagesBlock from "./MessagesBlock";
import {
	addNewMessageActionCreator,
	updateNewMessageTextActionCreator,
} from "../../../redux/dialogsReducer";
// import StoreContext from "../../../StoreContext";
import { connect } from "react-redux";

// const MessagesBlockContainer = () => {
//     return (
//         <StoreContext.Consumer>
//             {store => {
//                 const dialogsPage = store.getState().dialogsPage;

//                 const addNewMessage = () => {
//                     store.dispatch(addNewMessageActionCreator());
//                 };

//                 const onChangeNewMessageText = text => {
//                     store.dispatch(updateNewMessageTextActionCreator(text));
//                 };

//                 return (
//                     <MessagesBlock
//                         onChangeNewMessageText={onChangeNewMessageText}
//                         addNewMessage={addNewMessage}
//                         dialogsPage={dialogsPage}
//                     />
//                 );
//             }}
// 	    </StoreContext.Consumer>
//     )
// };
const MapStateToProps = state => {
	return {
        dialogsPage: state.dialogsPage
    }
};
const MapDispatchToProps = dispatch => {
	return {
		addNewMessage: () => {
			dispatch(addNewMessageActionCreator());
		},
		onChangeNewMessageText: text => {
			dispatch(updateNewMessageTextActionCreator(text));
		},
	};
};

const MessagesBlockContainer = connect(MapStateToProps, MapDispatchToProps)(MessagesBlock);

export default MessagesBlockContainer;
