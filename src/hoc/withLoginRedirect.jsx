import React from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";

const withLoginRedirect = Component => {
	const withLoginComponent = props => {
		if (props.userId) return <Navigate to={`/profile/${props.userId}`} />;

		return <Component {...props} />;
	};

	const MapStateToPropsForRedirect = state => {
		return {
			userId: state.login.userId,
		};
	};

	return connect(MapStateToPropsForRedirect)(withLoginComponent);
};

export default withLoginRedirect;
