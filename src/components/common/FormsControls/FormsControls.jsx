import React from "react";
import classes from "./FormsControls.module.css";

const FormControl = ({ input, meta, ...props }) => {
	const hasError = meta.touched && meta.error;
	return (
		<div className={classes.formControl + " " + (hasError ? classes.error : "")}>
			<props.type {...props} {...input} {...meta} />
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

export { FormControl };
