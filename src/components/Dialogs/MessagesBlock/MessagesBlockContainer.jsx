import MessagesBlock from "./MessagesBlock";
import { addNewMessage } from "../../../redux/dialogsReducer";
import { connect } from "react-redux";
import { compose } from "redux";

const MapStateToProps = state => {
	return {
		dialogsPage: state.dialogsPage,
	};
};

export default compose(connect(MapStateToProps, { addNewMessage }))(MessagesBlock);
