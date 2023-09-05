import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import withAuthRedirect from "../../hoc/withAuthRedirect.jsx";
import { compose } from "redux";
import {getDialogs} from '../../redux/selectors/dialogs-selector'

const MapStateToProps = state => {
	return {
		dialogs: getDialogs(state),
	};
};

export default compose(connect(MapStateToProps), withAuthRedirect)(Dialogs);
