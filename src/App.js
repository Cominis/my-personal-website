import React, { Component } from 'react';
import css from './App.module.css';

import { Route, Switch } from 'react-router-dom';
import Me from './containers/Me/Me';
import Resume from './containers/Resume/Resume';
import Projects from './containers/Projects/Projects';
import Contact from './containers/Contact/Contact';
import ScrollToTop from './components/ScrollOnTop/ScrollOnTop';
import Layout from './hoc/Layout/Layout';

class App extends Component {
  render() {
    return (
      <Layout>
        <ScrollToTop />
        <Switch>
          <Route path="/" exact component={Me} />
          <Route path="/contact" component={Contact} />
          <Route path="/resume" component={Resume} />
          <Route path="/projects" component={Projects} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
