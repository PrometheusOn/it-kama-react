import { compose } from "redux";
import Nav from "./Nav";
import { connect } from "react-redux";
import { getFriendsList } from "../../redux/selectors/sidebar-selector";

const MapStateToProps = state => {
	return {
		friendsList: getFriendsList(state),
	};
};

export default compose(connect(MapStateToProps))(Nav);
