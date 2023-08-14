import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import withAuthRedirect from "../../hoc/withAuthRedirect.jsx";
import { compose } from "redux";

const MapStateToProps = state => {
	return {
		dialogs: state.dialogsPage.dialogs,
	};
};

export default compose(connect(MapStateToProps), withAuthRedirect)(Dialogs);
