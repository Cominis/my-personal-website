import React from 'react';
import css from './Header.module.css';
import NavigationItems from './NavigationItems/NavigationItems';

const header = () => {
    return (
        <header className={css.Toolbar}>
            <nav className={css.DesktopOnly}>
                <NavigationItems />
            </nav>
        </header>
    );
}

export default header;