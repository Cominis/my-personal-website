import React from 'react';
import css from './Footer.module.css';
import Info from './Info/Info';

const footer = () => {
    return (
        <footer className={css.Footer}>
            <Info
                title='© 2020'
                info='By Daumantas Šimkus'
            />
            <Info
                title='Email:'
                info='daumantas.simkus@gmail.com'
            />
            <Info
                title='Number:'
                info='+37067423552'
            />
        </footer>
    );
}

export default footer;