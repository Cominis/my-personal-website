import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>About Me</NavigationItem>
        <NavigationItem link="/contact" exact>Contact</NavigationItem>
        <NavigationItem link="/resume">Resume</NavigationItem>
        <NavigationItem link="/projects">Projects</NavigationItem>
    </ul>
);

export default navigationItems;