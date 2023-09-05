import MessagesBlock from "./MessagesBlock";
import { addNewMessage } from "../../../redux/dialogsReducer";
import { connect } from "react-redux";
import { compose } from "redux";
import { getMessages } from "../../../redux/selectors/dialogs-selector";

const MapStateToProps = state => {
	return {
		messages: getMessages(state),
	};
};

export default compose(connect(MapStateToProps, { addNewMessage }))(MessagesBlock);
