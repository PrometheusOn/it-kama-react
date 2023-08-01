import React from "react";
import preloader from "../../../assets/images/preloader.gif";
import classes from "./Preloader.module.css";

const Preloader = props => {
	return (
		<div className={classes.preloaderBlock}>
			<img src={preloader} />
		</div>
	);
};

export default Preloader;
