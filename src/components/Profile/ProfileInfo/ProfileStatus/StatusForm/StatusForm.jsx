import React from "react";
import { Field, reduxForm } from "redux-form";

const StatusForm = props => {
	console.log(props);
	return (
		<form>
			<Field
				component='input'
				name='fieldForStatus'
				autoFocus={true}
				onBlur={props.toogleEditMode}
			/>
		</form>
	);
};

const StatusReduxForm = reduxForm({ form: "status" })(StatusForm);

export default StatusReduxForm;
