import React from "react";
import { Field, reduxForm } from "redux-form";
import { FormControl } from "../../common/FormsControls/FormsControls";
import { requiredField } from "../../../utils/validators/validators";
import classes from "../../common/FormsControls/FormsControls.module.css";

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

			{/* {сreateField("Email", "email", [requiredField], FormControl, { typeField: "input" })}
			{сreateField("Password", "password", [requiredField], FormControl, {
				typeField: "password",
			})}
			{сreateField(
				null,
				"rememberMe",
				null,
				FormControl,
				{ typeField: "checkbox" },
				"remember me"
			)} */}
			{/* выпуск#90 */}

			{props.error && <div className={classes.formSummaryError}>{props.error}</div>}
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
