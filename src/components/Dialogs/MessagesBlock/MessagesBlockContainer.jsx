import MessagesBlock from "./MessagesBlock";
import {
	addNewMessageActionCreator,
	updateNewMessageTextActionCreator,
} from "../../../redux/dialogsReducer";
import { connect } from "react-redux";

const MapStateToProps = state => {
	return {
		dialogsPage: state.dialogsPage,
	};
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
