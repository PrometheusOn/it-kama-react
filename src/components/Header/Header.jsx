import React from "react";
import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";
import userPhoto from "../../assets/images/user.png";

const Header = props => {
	return (
		<header className={classes.header}>
			<img src='https://www.fcufa.pro/images/style/logo_fc_ufa_2022.png' />

			<div className={classes.loginBlock}>
				{props.isAuth ? (
					<div className={classes.authorizedUser}>
						<div className={classes.photoAuthorizedUser}>
							<img src={props.photoAuthUser} />
                            {/* ? props.photoAuthUser : userPhoto */}
						</div>
						<div className={classes.loginAuthorizedUser}>{props.login}</div>
					</div>
				) : (
					<NavLink to={"/login"}>Login</NavLink>
				)}
			</div>
		</header>
	);
};

export default Header;
