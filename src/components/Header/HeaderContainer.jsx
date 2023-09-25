import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { signOut } from "../../redux/authReducer";
import { compose } from "redux";
import { getIsAuth, getLogin, getPhotoAuthUser } from "../../redux/selectors/auth-selector";

const HeaderContainer = props => {
	return <Header {...props} />;
};

const mapStateToProps = state => {
	return {
		isAuth: getIsAuth(state),
		login: getLogin(state),
		photoAuthUser: getPhotoAuthUser(state),
	};
};

export default compose(
	connect(mapStateToProps, {
		signOut,
	})
)(HeaderContainer);
