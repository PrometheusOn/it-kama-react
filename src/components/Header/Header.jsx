import React from "react";
import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = props => {
	return (
		<header className={classes.header}>
			<img src='https://www.fcufa.pro/images/style/logo_fc_ufa_2022.png' />
			<div className={classes.loginBlock}>
				{props.isAuth ? (
					<div className={classes.logoutBlock}>
						<div className={classes.authorizedUser}>
							<div className={classes.photoAuthorizedUser}>
								<img src={props.photoAuthUser} />
							</div>
							<div className={classes.loginAuthorizedUser}>{props.login}</div>
						</div>
						<div className={classes.logout} onClick={props.signOut}>
							Выйти
						</div>
					</div>
				) : (
					<NavLink to={"/login"}>Войти</NavLink>
				)}
			</div>
		</header>
	);
};

export default Header;
