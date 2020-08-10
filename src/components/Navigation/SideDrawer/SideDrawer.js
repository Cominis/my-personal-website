import React from 'react';
import css from './SideDrawer.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Info from '../../Footer/Info/Info';

const sideDrawer = props => {

    let attachedClasses = [css.SideDrawer, css.Close];

    if (props.open) {
        attachedClasses = [css.SideDrawer, css.Open];
    }
    return (
        <React.Fragment>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(' ')}>
                <nav>
                    <NavigationItems />
                </nav>
                <div className={css.Footer}>
                    <Info
                        style={{
                            textAlign: 'left',
                            verticalAlign: 'middle',
                            lineHeight: '0',
                            padding: '0'
                        }}
                        title='© 2020'
                        info='By Daumantas Šimkus'
                    />
                    <Info
                        style={{
                            textAlign: 'left',
                            verticalAlign: 'middle',
                            lineHeight: '0',
                            padding: '0'
                        }}
                        title='Email:'
                        info='daumantas.simkus@gmail.com'
                    />
                    <Info
                        style={{
                            textAlign: 'left',
                            verticalAlign: 'middle',
                            lineHeight: '0',
                            padding: '0'
                        }}
                        title='Number:'
                        info='+37067423552'
                    />
                </div>
            </div>
        </React.Fragment>
    );
}

export default sideDrawer;