import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { signOut } from "../../redux/auth-reducer";
import { compose } from "redux";

const HeaderContainer = props => {
	return <Header {...props} />;
};

const mapStateToProps = state => {
	return {
		isAuth: state.auth.isAuth,
		login: state.auth.login,
		photoAuthUser: state.auth.photo,
	};
};

export default compose(
	connect(mapStateToProps, {
		signOut,
	})
)(HeaderContainer);
