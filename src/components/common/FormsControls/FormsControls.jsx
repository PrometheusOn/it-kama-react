import React from "react";
import classes from "./FormsControls.module.css";
import { Field } from "redux-form";

const FormControl = ({ input, meta, ...props }) => {
	const hasError = meta.touched && meta.error;
	return (
		<div className={classes.formControl + " " + (hasError ? classes.error : "")}>
			<props.typeField {...props} {...input} {...meta} />
			{hasError && <div>{meta.error}</div>}
		</div>
	);
};

// const Textarea = ({ input, meta, ...props }) => {
// 	const hasError = meta.touched && meta.error;

// 	return (
// 		<div className={classes.formControl + " " + (hasError ? classes.error : "")}>
// 			<textarea {...input} {...props} />
// 			{hasError ? <div>{meta.error}</div> : ""}
// 		</div>
// 	);
// };

// const Input = ({ input, meta, ...props }) => {
// 	const hasError = meta.touched && meta.error;

// 	return (
// 		<div className={classes.formControl + " " + (hasError ? classes.error : "")}>
// 			<input {...input} {...props} />
// 			{hasError ? <div>{meta.error}</div> : ""}
// 		</div>
// 	);
// };

// const сreateField = (placeholder, name, validators, component, props={}, text='') => {
// 	return (
// 		<div>
// 			<Field
// 				placeholder={placeholder}
// 				name={name}
// 				validate={validators}
// 				component={component}
// 				{...props}
// 			/> {text}
// 		</div>
// 	);
// };

export { FormControl };
