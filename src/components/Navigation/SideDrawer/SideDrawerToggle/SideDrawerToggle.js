import React from "react";
import classes from './SideDrawerToggle.module.css'

const sideDrawerToggle = (props) => (
    <div className={classes.DrawerToggle} onClick={props.menuClicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default sideDrawerToggle;