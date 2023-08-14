import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { getAuthUser } from "../../redux/auth-reducer";
import { compose } from "redux";

class HeaderContainer extends React.Component {
	componentDidMount() {
		this.props.getAuthUser(); // не получаем данные в компоненте, а передаем намерение о желании получить информацию об авторизованном пользователе
	}
	render() {
		return <Header {...this.props} />;
	}
}

const mapStateToProps = state => {
	return {
		isAuth: state.auth.isAuth,
		login: state.auth.login,
		id: state.auth.id,
		photoAuthUser: state.auth.photo,
	};
};

export default compose(
	connect(mapStateToProps, {
		getAuthUser,
	})
)(HeaderContainer);
