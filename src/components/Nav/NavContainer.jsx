import { compose } from "redux";
import Nav from "./Nav";
import { connect } from "react-redux";

const MapStateToProps = state => {
	return {
		friendsList: state.sidebar.friendsList,
	};
};

export default compose(connect(MapStateToProps))(Nav);
