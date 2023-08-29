import React from "react";
import { Field, reduxForm } from "redux-form";
import { FormControl } from "../../common/FormsControls/FormsControls";
import { requiredField } from "../../../utils/validators/validators";

const LoginForm = props => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field
					placeholder='Email'
					name='email'
					typeField='input'
					component={FormControl}
					validate={[requiredField]}
				/>
			</div>
			<div>
				<Field
					placeholder='Password'
					name='password'
					type='password'
					typeField='input'
					component={FormControl}
					validate={[requiredField]}
				/>
			</div>
			<div>
				<Field
					type='checkbox'
					name='rememberMe'
					component='input'
					// typeField='input'
					// component={FormControl}
				/>
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
