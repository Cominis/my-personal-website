import React, { Component } from 'react';
import css from './Layout.module.css';
import Header from '../../components/Header/Header';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Footer from '../../components/Footer/Footer';

class Layout extends Component {

    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false })
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer }
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className={css.PageContainer}>
                    <Header drawerToggleClicked={this.sideDrawerToggleHandler} />
                    <SideDrawer
                        open={this.state.showSideDrawer}
                        closed={this.sideDrawerClosedHandler}
                    />
                    <main className={css.ContentWrap}>
                        {this.props.children}
                    </main>
                    <Footer />
                </div>
            </React.Fragment>
        )
    }
}

export default Layout;  