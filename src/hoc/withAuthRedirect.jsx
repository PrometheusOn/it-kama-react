import React from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";

const withAuthRedirect = Component => {
	class AuthRedirectComponent extends React.Component {
		render() {
			if (!this.props.isAuth) return <Navigate to={"/login"} />;

			return <Component {...this.props} />;
		}
	}

	const MapStateToPropsForRedirect = state => {
		return {
			isAuth: state.auth.isAuth,
		};
	};

	return connect(MapStateToPropsForRedirect)(AuthRedirectComponent);
};

export default withAuthRedirect;
