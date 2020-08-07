import React, { Component } from 'react';
import css from './App.module.css';
import { Route, Switch } from 'react-router-dom';
import Me from './containers/Me/Me';
import Resume from './containers/Resume/Resume';
import Projects from './containers/Projects/Projects';
import Contact from './containers/Contact/Contact';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollOnTop/ScrollOnTop';

class App extends Component {
  render() {
    return (
      <div className={css.PageContainer}>
        <Header />
        <div className={css.ContentWrap}>
          <ScrollToTop />
          <Switch>
            <Route path="/" exact component={Me} />
            <Route path="/contact" component={Contact} />
            <Route path="/resume" component={Resume} />
            <Route path="/projects" component={Projects} />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
