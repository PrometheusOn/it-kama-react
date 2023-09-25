import React from "react";
import LoginReduxForm from "./LoginForm/LoginForm";
import { Navigate } from "react-router-dom";

const Login = props => {
	const onSubmit = formData => {
		props.signIn(formData);
	};

	if (props.isAuth) return <Navigate to={`/profile`} />;

	return (
		<div>
			<div>Логин</div>
			<LoginReduxForm onSubmit={onSubmit} />
		</div>
	);
};

export default Login;
