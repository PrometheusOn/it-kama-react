import React from 'react';
import classes from './DialogItem.module.css';
import { NavLink } from "react-router-dom"

const DialogItem= ( props ) => {
    return (
        <div className={ classes.dialog }>
            <NavLink className={ ({ isActive }) => isActive ? classes.active : classes.dialog } to={ `/dialogs/${ props.id }` }>
                <div className={ classes.interviewerBlock }>
                    <img src={ props.img } />
                    <div className={ classes.interviewerName }>
                        { props.name }
                    </div>
                </div>
            </NavLink>
        </div>
    )
}

export default DialogItem