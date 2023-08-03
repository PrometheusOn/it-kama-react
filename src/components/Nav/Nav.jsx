import React from "react";
import classes from './Nav.module.css';
import { NavLink } from "react-router-dom";
import Friends from './../Friends/Friends.jsx';

const setActive = ({isActive})=>( isActive? classes.activeLink : classes.item)

const Nav = (props) => {
    return (
        <nav className={classes.nav}>
            <div className={ classes.item }>
                <NavLink to='/profile' className={setActive}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/dialogs' className={setActive}>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/news' className={setActive}>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/music' className={setActive}>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/users' className={setActive}>Find users</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/settings' className={setActive}>Settings</NavLink>
            </div>
            <div className={classes.item}>
                <Friends friendsList={ props.friendsList } />
            </div>
        </nav>                    
    )
}

export default Nav