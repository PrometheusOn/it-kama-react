import React, { useEffect } from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { getAuthUser, signOut } from "../../redux/auth-reducer";
import { compose } from "redux";

const HeaderContainer = props => {
	useEffect(() => {
		props.getAuthUser(props.userId); // не получаем данные в компоненте, а передаем намерение о желании получить информацию об авторизованном пользователе
	}, [props.userId]);

	return <Header {...props} />;
};

const mapStateToProps = state => {
	return {
		isAuth: state.auth.isAuth,
		login: state.auth.login,
		userId: state.auth.userId,
		photoAuthUser: state.auth.photo,
	};
};

export default compose(
	connect(mapStateToProps, {
		getAuthUser,
		signOut,
	})
)(HeaderContainer);
