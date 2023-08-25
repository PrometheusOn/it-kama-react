import React from "react";
import LoginReduxForm from "./LoginForm/LoginForm";

const Login = props => {
	const onSubmit = formData => {
		props.signIn(formData);
	};

	return (
		<div>
			<div>Логин</div>
			<LoginReduxForm onSubmit={onSubmit} />
		</div>
	);
};

export default Login;
