import React from "react";
import { Field, reduxForm } from "redux-form";
import { FormControl } from "../../common/FormsControls/FormsControls";
import { requiredField } from "../../../utils/validators/validators";

const LoginForm = props => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field
					type='input'
					placeholder='Login'
					name='login'
					component={FormControl}
					validate={[requiredField]}
				/>
			</div>
			<div>
				<Field
					type='input'
					placeholder='Password'
					name='password'
					component={FormControl}
					validate={[requiredField]}
				/>
			</div>
			<div>
				<Field type='checkbox' name='rememberMe' component='input' />
				remember me
			</div>
			<div>
				<button>Login</button>
			</div>
		</form>
	);
};

const LoginReduxForm = reduxForm({
	form: "login", //имя формы
})(LoginForm);

export default LoginReduxForm;
