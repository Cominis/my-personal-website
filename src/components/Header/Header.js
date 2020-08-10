import React from 'react';
import css from './Header.module.css';
import NavigationItems from '../Navigation/NavigationItems/NavigationItems';
import DrawerToggle from '../Navigation/SideDrawer/DrawerToggle/DrawerToggle';

const header = (props) => {
    return (
        <header className={css.Toolbar}>
            <DrawerToggle clicked={props.drawerToggleClicked} />
            <nav className={css.DesktopOnly}>
                <NavigationItems />
            </nav>
        </header>
    );
}

export default header;