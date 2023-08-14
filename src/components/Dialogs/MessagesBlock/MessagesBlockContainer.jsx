import MessagesBlock from "./MessagesBlock";
import {
	addNewMessageActionCreator,
	updateNewMessageTextActionCreator,
} from "../../../redux/dialogsReducer";
import { connect } from "react-redux";
import { compose } from "redux";

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

export default compose(connect(MapStateToProps, MapDispatchToProps))(MessagesBlock);
