import Dialogs from "./Dialogs";
import { connect } from "react-redux";

const MapStateToProps = state => {
	return {
		dialogs: state.dialogsPage.dialogs,
	};
};
const DialogsContainer = connect(MapStateToProps)(Dialogs);

export default DialogsContainer;
