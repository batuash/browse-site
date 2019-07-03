import React from 'react';
import {render} from 'react-dom';
import {Route, Link, HashRouter as Router} from 'react-router-dom';
import './styles/style.css';
import {
  App,
  Topics,
  Archives,
  Pages,
  SomePage,
  SomeOtherPage
} from './components';

const routing = (
  <Router>
    <Route exact path="/" component={App} />
    <Route path="/topics" component={Topics} />
    <Route path="/archives" component={Archives} />
    <Route path="/pages" component={Pages} />
    <Route path="/somepage" component={SomePage} />
    <Route path="/someotherpage" component={SomeOtherPage} />
  </Router>
);

render(routing, document.getElementById('root'));
